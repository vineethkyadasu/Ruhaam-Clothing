import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCheck, HiLockClosed } from 'react-icons/hi';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        paymentMethod: 'card',
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const subtotal = getCartTotal();
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else {
            setIsProcessing(true);
            // Simulate payment processing
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setIsProcessing(false);
            setOrderComplete(true);
            clearCart();
        }
    };

    if (cart.length === 0 && !orderComplete) {
        return (
            <main className="pt-20 min-h-screen flex items-center justify-center bg-ivory-50">
                <div className="text-center px-4">
                    <h2 className="heading-md text-gray-800 mb-4">No items to checkout</h2>
                    <Link to="/shop" className="btn-primary">
                        Continue Shopping
                    </Link>
                </div>
            </main>
        );
    }

    if (orderComplete) {
        return (
            <main className="pt-20 min-h-screen flex items-center justify-center bg-ivory-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center px-4 max-w-lg"
                >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                        <HiCheck className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="heading-md text-gray-800 mb-4">Order Confirmed!</h2>
                    <p className="text-gray-600 mb-2">
                        Thank you for shopping with Ruhaam.
                    </p>
                    <p className="text-gray-500 mb-8">
                        Your order has been placed and you will receive a confirmation email shortly.
                    </p>
                    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                        <p className="text-sm text-gray-500 mb-1">Order Number</p>
                        <p className="text-xl font-serif text-primary-600">
                            RH{Date.now().toString().slice(-8)}
                        </p>
                    </div>
                    <Link to="/shop" className="btn-primary">
                        Continue Shopping
                    </Link>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="pt-20 bg-ivory-50 min-h-screen">
            {/* Header */}
            <section className="bg-primary-600 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="heading-lg text-center mb-8">Checkout</h1>
                    {/* Steps */}
                    <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
                        <div className="flex items-center gap-2">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? 'bg-gold-400 text-white' : 'bg-white/20 text-white/60'
                                    }`}
                            >
                                1
                            </div>
                            <span className={step >= 1 ? 'text-white' : 'text-white/60'}>Shipping</span>
                        </div>
                        <div className="w-12 h-0.5 bg-white/30" />
                        <div className="flex items-center gap-2">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? 'bg-gold-400 text-white' : 'bg-white/20 text-white/60'
                                    }`}
                            >
                                2
                            </div>
                            <span className={step >= 2 ? 'text-white' : 'text-white/60'}>Payment</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit}>
                                {step === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="bg-white rounded-xl shadow-sm p-6 md:p-8"
                                    >
                                        <h2 className="text-xl font-serif text-gray-800 mb-6">Shipping Information</h2>
                                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-2">First Name *</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input-elegant"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-2">Last Name *</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input-elegant"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input-elegant"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-2">Phone *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input-elegant"
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm text-gray-600 mb-2">Address *</label>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input-elegant"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-2">City *</label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input-elegant"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-2">State *</label>
                                                <input
                                                    type="text"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input-elegant"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-600 mb-2">Pincode *</label>
                                                <input
                                                    type="text"
                                                    name="pincode"
                                                    value={formData.pincode}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input-elegant"
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="w-full btn-primary">
                                            Continue to Payment
                                        </button>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="bg-white rounded-xl shadow-sm p-6 md:p-8"
                                    >
                                        <h2 className="text-xl font-serif text-gray-800 mb-6">Payment Method</h2>

                                        {/* Payment Options */}
                                        <div className="space-y-4 mb-6">
                                            {[
                                                { id: 'card', label: 'Credit / Debit Card', icon: '💳' },
                                                { id: 'upi', label: 'UPI Payment', icon: '📱' },
                                                { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
                                            ].map((option) => (
                                                <label
                                                    key={option.id}
                                                    className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.paymentMethod === option.id
                                                            ? 'border-primary-600 bg-primary-50'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value={option.id}
                                                        checked={formData.paymentMethod === option.id}
                                                        onChange={handleInputChange}
                                                        className="hidden"
                                                    />
                                                    <span className="text-2xl">{option.icon}</span>
                                                    <span className="font-medium text-gray-800">{option.label}</span>
                                                    {formData.paymentMethod === option.id && (
                                                        <HiCheck className="ml-auto w-5 h-5 text-primary-600" />
                                                    )}
                                                </label>
                                            ))}
                                        </div>

                                        {formData.paymentMethod === 'card' && (
                                            <div className="bg-ivory-100 rounded-lg p-6 mb-6">
                                                <div className="grid gap-4">
                                                    <div>
                                                        <label className="block text-sm text-gray-600 mb-2">Card Number</label>
                                                        <input
                                                            type="text"
                                                            placeholder="1234 5678 9012 3456"
                                                            className="input-elegant"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-sm text-gray-600 mb-2">Expiry Date</label>
                                                            <input
                                                                type="text"
                                                                placeholder="MM/YY"
                                                                className="input-elegant"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm text-gray-600 mb-2">CVV</label>
                                                            <input
                                                                type="text"
                                                                placeholder="123"
                                                                className="input-elegant"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex gap-4">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="flex-1 btn-secondary"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isProcessing}
                                                className="flex-1 btn-primary flex items-center justify-center gap-2"
                                            >
                                                {isProcessing ? (
                                                    <>
                                                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                                            <circle
                                                                className="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                                fill="none"
                                                            />
                                                            <path
                                                                className="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            />
                                                        </svg>
                                                        Processing...
                                                    </>
                                                ) : (
                                                    <>
                                                        <HiLockClosed className="w-5 h-5" />
                                                        Place Order • ₹{total.toLocaleString()}
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div>
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                                <h2 className="text-xl font-serif text-gray-800 mb-6">Order Summary</h2>

                                {/* Items */}
                                <div className="space-y-4 mb-6">
                                    {cart.map((item) => (
                                        <div key={`${item.id}-${item.size}`} className="flex gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-20 object-cover rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                                                <p className="text-xs text-gray-500">Size: {item.size} × {item.quantity}</p>
                                                <p className="text-sm text-primary-600 mt-1">
                                                    ₹{(item.price * item.quantity).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 pt-4 space-y-2">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span className="text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax (18%)</span>
                                        <span>₹{tax.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-medium text-gray-800 pt-2 border-t">
                                        <span>Total</span>
                                        <span className="text-primary-600">₹{total.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Checkout;
