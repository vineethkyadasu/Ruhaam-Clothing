import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineHeart, HiHeart, HiAdjustments, HiX } from 'react-icons/hi';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('featured');
    const [showFilters, setShowFilters] = useState(false);
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(
                (p) => p.category.toLowerCase() === selectedCategory
            );
        }

        // Sort
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                break;
            default:
                // Featured - bestsellers first
                filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        }

        return filtered;
    }, [selectedCategory, sortBy]);

    const ProductCard = ({ product, index }) => {
        const inWishlist = isInWishlist(product.id);
        const discount = Math.round(
            ((product.originalPrice - product.price) / product.originalPrice) * 100
        );

        const handleWishlistToggle = (e) => {
            e.preventDefault();
            if (inWishlist) {
                removeFromWishlist(product.id);
            } else {
                addToWishlist(product);
            }
        };

        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
            >
                <Link to={`/product/${product.id}`} className="block">
                    <div className="relative overflow-hidden rounded-lg bg-ivory-100 aspect-[3/4] mb-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {product.isNew && (
                                <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium tracking-wide">
                                    NEW
                                </span>
                            )}
                            {product.isBestseller && (
                                <span className="px-3 py-1 bg-sage-400 text-white text-xs font-medium">
                                    BESTSELLER
                                </span>
                            )}
                            {discount > 0 && (
                                <span className="px-3 py-1 bg-gold-400 text-white text-xs font-medium">
                                    -{discount}%
                                </span>
                            )}
                        </div>

                        {/* Wishlist Button */}
                        <button
                            onClick={handleWishlistToggle}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
                        >
                            {inWishlist ? (
                                <HiHeart className="w-5 h-5 text-primary-600" />
                            ) : (
                                <HiOutlineHeart className="w-5 h-5 text-gray-600" />
                            )}
                        </button>

                        {/* Quick Add */}
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    addToCart(product, 'M', 1);
                                }}
                                className="w-full py-3 bg-white text-primary-600 font-medium text-sm tracking-wide hover:bg-primary-600 hover:text-white transition-colors"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="text-center">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                            {product.category}
                        </p>
                        <h3 className="text-lg font-serif text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                            {product.name}
                        </h3>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-lg font-medium text-primary-600">
                                ₹{product.price.toLocaleString()}
                            </span>
                            {product.originalPrice > product.price && (
                                <span className="text-sm text-gray-400 line-through">
                                    ₹{product.originalPrice.toLocaleString()}
                                </span>
                            )}
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    };

    return (
        <main className="pt-20">
            {/* Hero Banner */}
            <section className="bg-primary-600 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="heading-lg mb-4"
                    >
                        Our Collection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-primary-100 text-lg max-w-2xl mx-auto"
                    >
                        Discover premium menswear crafted with soul. Each piece tells a story of elegance and authenticity.
                    </motion.p>
                </div>
            </section>

            {/* Filters & Products */}
            <section className="section-padding bg-ivory-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
                        {/* Category Tabs */}
                        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.slug)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === cat.slug
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Sort & Filter */}
                        <div className="flex items-center gap-4">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                                <option value="featured">Featured</option>
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="lg:hidden p-2 bg-white border border-gray-200 rounded-lg"
                            >
                                <HiAdjustments className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <p className="text-sm text-gray-500 mb-8">
                        Showing {filteredProducts.length} products
                    </p>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-500 mb-4">No products found</p>
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className="btn-primary"
                            >
                                View All Products
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Shop;
