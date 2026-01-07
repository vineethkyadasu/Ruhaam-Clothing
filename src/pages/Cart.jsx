import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineTrash, HiMinus, HiPlus, HiArrowLeft, HiShoppingBag } from 'react-icons/hi';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <main className="pt-20 min-h-screen flex items-center justify-center bg-ivory-50">
                <div className="text-center px-4">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-ivory-200 flex items-center justify-center">
                        <HiShoppingBag className="w-12 h-12 text-gray-400" />
                    </div>
                    <h2 className="heading-md text-gray-800 mb-4">Your cart is empty</h2>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">
                        Looks like you haven't added anything to your cart yet. Explore our collection to find something you'll love.
                    </p>
                    <Link to="/shop" className="btn-primary">
                        Start Shopping
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-20">
            {/* Header */}
            <section className="bg-primary-600 text-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="heading-lg text-center"
                    >
                        Shopping Cart
                    </motion.h1>
                </div>
            </section>

            <section className="section-padding bg-ivory-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                {/* Header */}
                                <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-ivory-100 text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    <div className="col-span-6">Product</div>
                                    <div className="col-span-2 text-center">Quantity</div>
                                    <div className="col-span-2 text-center">Price</div>
                                    <div className="col-span-2 text-center">Total</div>
                                </div>

                                {/* Items */}
                                <div className="divide-y divide-gray-100">
                                    {cart.map((item, index) => (
                                        <motion.div
                                            key={`${item.id}-${item.size}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-6"
                                        >
                                            <div className="md:grid md:grid-cols-12 md:gap-4 md:items-center">
                                                {/* Product Info */}
                                                <div className="col-span-6 flex gap-4 mb-4 md:mb-0">
                                                    <Link to={`/product/${item.id}`} className="flex-shrink-0">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-20 h-24 object-cover rounded-lg"
                                                        />
                                                    </Link>
                                                    <div>
                                                        <Link
                                                            to={`/product/${item.id}`}
                                                            className="font-serif text-lg text-gray-800 hover:text-primary-600 transition-colors"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                        <p className="text-sm text-gray-500 mt-1">Size: {item.size}</p>
                                                        <button
                                                            onClick={() => removeFromCart(item.id, item.size)}
                                                            className="mt-2 text-sm text-red-500 hover:text-red-600 flex items-center gap-1"
                                                        >
                                                            <HiOutlineTrash className="w-4 h-4" />
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Quantity */}
                                                <div className="col-span-2 flex justify-center mb-4 md:mb-0">
                                                    <div className="flex items-center border border-gray-200 rounded-lg">
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(item.id, item.size, item.quantity - 1)
                                                            }
                                                            className="p-2 hover:bg-gray-100 transition-colors"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <HiMinus className="w-4 h-4" />
                                                        </button>
                                                        <span className="w-10 text-center font-medium">{item.quantity}</span>
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(item.id, item.size, item.quantity + 1)
                                                            }
                                                            className="p-2 hover:bg-gray-100 transition-colors"
                                                        >
                                                            <HiPlus className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Price */}
                                                <div className="col-span-2 text-center mb-4 md:mb-0">
                                                    <span className="md:hidden text-sm text-gray-500 mr-2">Price:</span>
                                                    <span className="text-gray-800">₹{item.price.toLocaleString()}</span>
                                                </div>

                                                {/* Total */}
                                                <div className="col-span-2 text-center">
                                                    <span className="md:hidden text-sm text-gray-500 mr-2">Total:</span>
                                                    <span className="font-medium text-primary-600">
                                                        ₹{(item.price * item.quantity).toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="p-6 bg-ivory-50 flex flex-wrap items-center justify-between gap-4">
                                    <Link
                                        to="/shop"
                                        className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                                    >
                                        <HiArrowLeft className="w-5 h-5" />
                                        Continue Shopping
                                    </Link>
                                    <button
                                        onClick={clearCart}
                                        className="text-red-500 hover:text-red-600"
                                    >
                                        Clear Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                                <h2 className="text-xl font-serif text-gray-800 mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>₹{getCartTotal().toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span className="text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax</span>
                                        <span>₹{Math.round(getCartTotal() * 0.18).toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-4 mb-6">
                                    <div className="flex justify-between text-lg font-medium text-gray-800">
                                        <span>Total</span>
                                        <span className="text-primary-600">
                                            ₹{Math.round(getCartTotal() * 1.18).toLocaleString()}
                                        </span>
                                    </div>
                                </div>

                                {/* Coupon Code */}
                                <div className="mb-6">
                                    <label className="text-sm text-gray-600 mb-2 block">Coupon Code</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter code"
                                            className="flex-1 input-elegant"
                                        />
                                        <button className="px-4 py-2 bg-ivory-200 text-gray-700 rounded-sm hover:bg-ivory-300 transition-colors">
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                <Link to="/checkout" className="w-full btn-primary block text-center">
                                    Proceed to Checkout
                                </Link>

                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Free shipping on all orders • 30-day returns
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cart;
