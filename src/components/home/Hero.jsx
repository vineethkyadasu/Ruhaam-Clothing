import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero.png"
                    alt="Ruhaam Premium Menswear"
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                <div className="max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block px-4 py-2 bg-gold-400/20 backdrop-blur-sm border border-gold-400/30 rounded-full text-gold-300 text-sm tracking-wider mb-6"
                    >
                        PREMIUM MENSWEAR
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="heading-xl text-white mb-6"
                    >
                        Crafted with <span className="text-gold-400 italic">Soul</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-8"
                    >
                        Luxury that feels effortless. Style that feels right. Premium menswear for modern men who value comfort, quality, and elegance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Link
                            to="/shop"
                            className="group inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-white font-medium rounded-sm tracking-wide transition-all duration-300 hover:bg-gold-500 hover:shadow-xl"
                        >
                            Explore Collection
                            <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-sm tracking-wide transition-all duration-300 hover:bg-white hover:text-primary-600"
                        >
                            Our Story
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-white/80 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
