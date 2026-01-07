import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineHeart, HiHeart, HiMinus, HiPlus, HiShoppingBag, HiStar, HiChevronRight } from 'react-icons/hi';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-serif text-gray-800 mb-4">Product not found</h2>
                    <Link to="/shop" className="btn-primary">
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const inWishlist = isInWishlist(product.id);
    const discount = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
    );

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        addToCart(product, selectedSize, quantity);
    };

    const handleWishlistToggle = () => {
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <main className="pt-20">
            {/* Breadcrumb */}
            <div className="bg-ivory-100 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link to="/" className="hover:text-primary-600">Home</Link>
                        <HiChevronRight className="w-4 h-4" />
                        <Link to="/shop" className="hover:text-primary-600">Shop</Link>
                        <HiChevronRight className="w-4 h-4" />
                        <span className="text-gray-800">{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* Product Section */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Images */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-ivory-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    {product.isNew && (
                                        <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium tracking-wide">
                                            NEW
                                        </span>
                                    )}
                                    {discount > 0 && (
                                        <span className="px-3 py-1 bg-gold-400 text-white text-xs font-medium">
                                            -{discount}% OFF
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col"
                        >
                            <div className="mb-6">
                                <p className="text-sm text-gold-500 uppercase tracking-widest mb-2">
                                    {product.category} • {product.subcategory}
                                </p>
                                <h1 className="heading-md text-gray-900 mb-4">{product.name}</h1>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <HiStar
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(product.rating)
                                                        ? 'text-gold-400'
                                                        : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        {product.rating} ({product.reviews} reviews)
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-3xl font-serif text-primary-600">
                                        ₹{product.price.toLocaleString()}
                                    </span>
                                    {product.originalPrice > product.price && (
                                        <>
                                            <span className="text-lg text-gray-400 line-through">
                                                ₹{product.originalPrice.toLocaleString()}
                                            </span>
                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-sm font-medium rounded">
                                                Save ₹{(product.originalPrice - product.price).toLocaleString()}
                                            </span>
                                        </>
                                    )}
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {product.description}
                                </p>
                            </div>

                            {/* Size Selection */}
                            <div className="mb-6">
                                <p className="text-sm font-medium text-gray-800 mb-3">
                                    Select Size
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-12 rounded-lg border-2 font-medium transition-all ${selectedSize === size
                                                    ? 'border-primary-600 bg-primary-600 text-white'
                                                    : 'border-gray-200 text-gray-600 hover:border-primary-600'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="mb-8">
                                <p className="text-sm font-medium text-gray-800 mb-3">Quantity</p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border border-gray-200 rounded-lg">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="p-3 hover:bg-gray-100 transition-colors"
                                        >
                                            <HiMinus className="w-4 h-4" />
                                        </button>
                                        <span className="w-12 text-center font-medium">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="p-3 hover:bg-gray-100 transition-colors"
                                        >
                                            <HiPlus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4 mb-8">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 btn-primary flex items-center justify-center gap-2"
                                >
                                    <HiShoppingBag className="w-5 h-5" />
                                    Add to Cart
                                </button>
                                <button
                                    onClick={handleWishlistToggle}
                                    className={`p-4 rounded-lg border-2 transition-all ${inWishlist
                                            ? 'border-primary-600 bg-primary-50'
                                            : 'border-gray-200 hover:border-primary-600'
                                        }`}
                                >
                                    {inWishlist ? (
                                        <HiHeart className="w-6 h-6 text-primary-600" />
                                    ) : (
                                        <HiOutlineHeart className="w-6 h-6 text-gray-600" />
                                    )}
                                </button>
                            </div>

                            {/* Product Details */}
                            <div className="border-t border-gray-200 pt-8">
                                <h3 className="text-lg font-serif text-gray-800 mb-4">Product Details</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-500 mb-1">Fabric</p>
                                        <p className="text-gray-800 font-medium">{product.fabric}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 mb-1">Fit</p>
                                        <p className="text-gray-800 font-medium">{product.fit}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 mb-1">Care</p>
                                        <p className="text-gray-800 font-medium">{product.care}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 mb-1">Available Colors</p>
                                        <p className="text-gray-800 font-medium">{product.colors.join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="section-padding bg-ivory-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="heading-md text-gray-900 text-center mb-12">You May Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map((p) => (
                                <Link key={p.id} to={`/product/${p.id}`} className="group">
                                    <div className="relative overflow-hidden rounded-lg bg-white aspect-[3/4] mb-4">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-serif text-gray-800 group-hover:text-primary-600 transition-colors">
                                            {p.name}
                                        </h3>
                                        <p className="text-primary-600 font-medium mt-1">
                                            ₹{p.price.toLocaleString()}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default ProductDetail;
