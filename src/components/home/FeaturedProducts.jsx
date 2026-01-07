import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiOutlineHeart, HiHeart, HiStar, HiOutlineStar, HiShoppingBag } from 'react-icons/hi';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const StarRating = ({ rating = 4.5 }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
                <span key={i}>
                    {i < fullStars ? (
                        <HiStar className="w-3.5 h-3.5 text-gold-400" />
                    ) : i === fullStars && hasHalfStar ? (
                        <HiStar className="w-3.5 h-3.5 text-gold-400" />
                    ) : (
                        <HiOutlineStar className="w-3.5 h-3.5 text-gold-300" />
                    )}
                </span>
            ))}
        </div>
    );
};

const ProductCard = ({ product, index }) => {
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const inWishlist = isInWishlist(product.id);

    const handleWishlistToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 'M', 1);
    };

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group"
        >
            <Link to={`/product/${product.id}`} className="block">
                {/* Card Container with subtle shadow */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(107,39,55,0.12)] transition-all duration-500 hover:-translate-y-2">

                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[3/4] bg-gradient-to-b from-ivory-100 to-ivory-200">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />

                        {/* Elegant Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {product.isNew && (
                                <motion.span
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="px-3 py-1.5 bg-primary-600 text-white text-[10px] font-semibold tracking-widest uppercase rounded-sm shadow-lg"
                                >
                                    New Arrival
                                </motion.span>
                            )}
                            {discount > 0 && (
                                <span className="px-3 py-1.5 bg-gradient-to-r from-gold-400 to-gold-500 text-white text-[10px] font-bold tracking-wide rounded-sm shadow-lg">
                                    Save {discount}%
                                </span>
                            )}
                        </div>

                        {/* Wishlist Button - Always visible with subtle styling */}
                        <button
                            onClick={handleWishlistToggle}
                            className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${inWishlist
                                    ? 'bg-primary-600 scale-100'
                                    : 'bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110'
                                }`}
                        >
                            {inWishlist ? (
                                <HiHeart className="w-5 h-5 text-white" />
                            ) : (
                                <HiOutlineHeart className="w-5 h-5 text-gray-700" />
                            )}
                        </button>

                        {/* Quick Add Button - Slides up from bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            <button
                                onClick={handleAddToCart}
                                className="w-full py-3.5 bg-white/95 backdrop-blur-sm text-primary-600 font-semibold text-sm tracking-wide rounded-lg transition-all duration-300 hover:bg-primary-600 hover:text-white flex items-center justify-center gap-2 shadow-xl"
                            >
                                <HiShoppingBag className="w-4 h-4" />
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* Product Info - Clean & Elegant */}
                    <div className="p-5">
                        {/* Category Tag */}
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-gold-500 uppercase tracking-[0.2em] font-medium">
                                {product.category}
                            </span>
                            <StarRating rating={product.rating || 4.5} />
                        </div>

                        {/* Product Name */}
                        <h3 className="text-base font-serif text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2 leading-snug">
                            {product.name}
                        </h3>

                        {/* Price Section */}
                        <div className="flex items-baseline gap-2.5">
                            <span className="text-xl font-semibold text-primary-600">
                                ₹{product.price.toLocaleString()}
                            </span>
                            {product.originalPrice > product.price && (
                                <span className="text-sm text-gray-400 line-through decoration-gray-300">
                                    ₹{product.originalPrice.toLocaleString()}
                                </span>
                            )}
                        </div>

                        {/* Subtle size hint */}
                        <p className="text-[10px] text-gray-400 mt-2 tracking-wide">
                            Available: S, M, L, XL
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const FeaturedProducts = () => {
    const featuredProducts = products.filter(p => p.isBestseller || p.isNew).slice(0, 4);

    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-white via-ivory-50 to-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block text-gold-500 text-xs tracking-[0.3em] uppercase mb-4 font-medium bg-gold-50 px-5 py-2 rounded-full border border-gold-200"
                    >
                        ✦ Curated for You ✦
                    </motion.span>
                    <h2 className="heading-lg text-gray-900 mb-5">
                        Featured <span className="text-primary-600 italic">Collection</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400" />
                        <div className="w-2 h-2 bg-gold-400 rotate-45" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400" />
                    </div>
                    <p className="subheading max-w-2xl mx-auto text-gray-500">
                        Discover our handpicked selection of premium menswear, designed with attention to detail and crafted for the modern gentleman.
                    </p>
                </motion.div>

                {/* Products Grid - Refined spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
                    {featuredProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {/* View All Button - Premium styled */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                >
                    <Link
                        to="/shop"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-primary-700 hover:shadow-[0_8px_30px_rgba(107,39,55,0.3)] hover:-translate-y-1"
                    >
                        <span>View All Products</span>
                        <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                            <HiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
