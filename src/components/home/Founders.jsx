import React from 'react';
import { motion } from 'framer-motion';
import { founders } from '../../data/products';

const Founders = () => {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold-400 text-sm tracking-widest uppercase mb-4 block">
                        The Visionaries
                    </span>
                    <h2 className="heading-lg text-gray-900 mb-4">Meet Our Founders</h2>
                    <div className="divider-center mb-6" />
                    <p className="subheading max-w-2xl mx-auto">
                        Ruhaam was founded with the intention of creating a brand rooted in soul and compassion.
                    </p>
                </motion.div>

                {/* Founders Grid */}
                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="relative mb-6 mx-auto w-48 h-48">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400 to-primary-600 transform rotate-6" />
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                                />
                            </div>
                            <h3 className="text-2xl font-serif text-gray-900 mb-1">{founder.name}</h3>
                            <p className="text-gold-500 text-sm font-medium mb-4">{founder.role}</p>
                            <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Quote Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-ivory-100 rounded-2xl p-8 md:p-12 text-center"
                >
                    <div className="max-w-3xl mx-auto">
                        <svg
                            className="w-12 h-12 text-gold-400 mx-auto mb-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 italic mb-6 leading-relaxed">
                            We wanted to build a brand that people don't just see — but feel.
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-16 h-0.5 bg-gold-400" />
                            <p className="text-gray-500 font-medium">Anil & Ramya</p>
                            <div className="w-16 h-0.5 bg-gold-400" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Founders;
