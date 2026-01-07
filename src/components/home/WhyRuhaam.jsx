import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const features = [
    {
        title: 'Premium Fabrics',
        description: 'Hand-selected materials from the finest mills, ensuring unmatched comfort and durability.',
    },
    {
        title: 'Thoughtful Design',
        description: 'Every stitch tells a story. Our designs balance modern tailoring with timeless appeal.',
    },
    {
        title: 'Perfect Fit',
        description: 'Meticulously crafted sizing that flatters every body type, ensuring confidence in every wear.',
    },
    {
        title: 'Soulful Experience',
        description: 'From unboxing to wearing, every touchpoint is designed to feel personal and meaningful.',
    },
    {
        title: 'Sustainable Choices',
        description: 'Conscious craftsmanship with eco-friendly practices woven into our process.',
    },
    {
        title: 'Lasting Quality',
        description: 'Investment pieces built to endure, maintaining their elegance wash after wash.',
    },
];

const WhyRuhaam = () => {
    return (
        <section className="section-padding bg-primary-600 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold-400 text-sm tracking-widest uppercase mb-4 block">
                        The Ruhaam Difference
                    </span>
                    <h2 className="heading-lg mb-4">Why Choose Ruhaam?</h2>
                    <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6" />
                    <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                        We don't just create clothes. We craft experiences that resonate with your soul.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/15 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <HiCheckCircle className="w-6 h-6 text-gold-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-serif mb-2">{feature.title}</h3>
                                    <p className="text-primary-100 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-16 border-t border-white/20"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '5000+', label: 'Happy Customers' },
                            { value: '100%', label: 'Premium Fabrics' },
                            { value: '30+', label: 'Unique Designs' },
                            { value: '4.9★', label: 'Customer Rating' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                            >
                                <div className="text-3xl md:text-4xl font-serif text-gold-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-primary-100">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyRuhaam;
