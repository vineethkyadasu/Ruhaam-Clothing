import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { testimonials } from '../../data/products';

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section-padding bg-ivory-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold-400 text-sm tracking-widest uppercase mb-4 block">
                        Customer Love
                    </span>
                    <h2 className="heading-lg text-gray-900 mb-4">What Our Customers Say</h2>
                    <div className="divider-center" />
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    {/* Customer Image */}
                                    <div className="flex-shrink-0">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gold-400/30">
                                            <img
                                                src={testimonials[current].image}
                                                alt={testimonials[current].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 text-center md:text-left">
                                        {/* Stars */}
                                        <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                                            {[...Array(testimonials[current].rating)].map((_, i) => (
                                                <HiStar key={i} className="w-5 h-5 text-gold-400" />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                                            "{testimonials[current].text}"
                                        </p>

                                        {/* Customer Info */}
                                        <div>
                                            <p className="font-serif text-xl text-gray-900">
                                                {testimonials[current].name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {testimonials[current].location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all"
                        >
                            <HiChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all"
                        >
                            <HiChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === current
                                        ? 'bg-primary-600 w-6'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
