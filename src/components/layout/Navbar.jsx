import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineUser, HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getCartCount } = useCart();
    const { wishlist } = useWishlist();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-2 text-primary-600 hover:text-primary-700"
                        >
                            <HiOutlineMenu className="w-6 h-6" />
                        </button>

                        {/* Left Nav Links - Desktop */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.slice(0, 2).map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive(link.path)
                                        ? 'text-primary-600'
                                        : isScrolled
                                            ? 'text-gray-700 hover:text-primary-600'
                                            : 'text-gray-800 hover:text-primary-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Logo - Center */}
                        <Link to="/" className="flex-shrink-0">
                            <motion.img
                                src="/images/logo.png"
                                alt="Ruhaam"
                                className="h-16 md:h-20 w-auto"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            />
                        </Link>

                        {/* Right Nav Links - Desktop */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.slice(2).map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive(link.path)
                                        ? 'text-primary-600'
                                        : isScrolled
                                            ? 'text-gray-700 hover:text-primary-600'
                                            : 'text-gray-800 hover:text-primary-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-4">
                            <Link
                                to="/wishlist"
                                className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
                            >
                                <HiOutlineHeart className="w-5 h-5" />
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary-600 text-white text-[10px] rounded-full flex items-center justify-center">
                                        {wishlist.length}
                                    </span>
                                )}
                            </Link>
                            <Link
                                to="/cart"
                                className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
                            >
                                <HiOutlineShoppingBag className="w-5 h-5" />
                                {getCartCount() > 0 && (
                                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary-600 text-white text-[10px] rounded-full flex items-center justify-center">
                                        {getCartCount()}
                                    </span>
                                )}
                            </Link>
                            <Link
                                to="/login"
                                className="hidden sm:block p-2 text-gray-700 hover:text-primary-600 transition-colors"
                            >
                                <HiOutlineUser className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50 lg:hidden"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <img src="/images/logo.png" alt="Ruhaam" className="h-10" />
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 text-gray-600 hover:text-primary-600"
                                    >
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className={`block py-3 text-lg font-medium border-b border-ivory-200 ${isActive(link.path)
                                                ? 'text-primary-600'
                                                : 'text-gray-700 hover:text-primary-600'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <Link
                                        to="/login"
                                        className="block py-3 text-lg font-medium border-b border-ivory-200 text-gray-700 hover:text-primary-600"
                                    >
                                        Account
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
