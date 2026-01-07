import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineTrash, HiShoppingBag } from 'react-icons/hi';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product, 'M', 1);
        removeFromWishlist(product.id);
    };

    if (wishlist.length === 0) {
        return (
            <main className="pt-20 min-h-screen flex items-center justify-center bg-ivory-50">
                <div className="text-center px-4">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-ivory-200 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h2 className="heading-md text-gray-800 mb-4">Your wishlist is empty</h2>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">
                        Save items you love to your wishlist. Review them anytime and easily move them to the cart.
                    </p>
                    <Link to="/shop" className="btn-primary">
                        Explore Collection
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-20">
            {/* Header */}
            <section className="bg-primary-600 text-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="heading-lg"
                    >
                        My Wishlist
                    </motion.h1>
                    <p className="text-primary-100 mt-2">{wishlist.length} items saved</p>
                </div>
            </section>

            <section className="section-padding bg-ivory-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {wishlist.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-xl overflow-hidden shadow-sm group"
                            >
                                <Link to={`/product/${product.id}`} className="block">
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </Link>
                                <div className="p-4">
                                    <Link to={`/product/${product.id}`}>
                                        <h3 className="font-serif text-lg text-gray-800 hover:text-primary-600 transition-colors mb-1">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-lg font-medium text-primary-600">
                                            ₹{product.price.toLocaleString()}
                                        </span>
                                        {product.originalPrice > product.price && (
                                            <span className="text-sm text-gray-400 line-through">
                                                ₹{product.originalPrice.toLocaleString()}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="flex-1 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <HiShoppingBag className="w-4 h-4" />
                                            Add to Cart
                                        </button>
                                        <button
                                            onClick={() => removeFromWishlist(product.id)}
                                            className="p-2 border border-gray-200 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors"
                                        >
                                            <HiOutlineTrash className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Wishlist;
