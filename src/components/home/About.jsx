import React from 'react';
import { motion } from 'framer-motion';
import { HiHeart, HiSparkles, HiStar, HiLightBulb } from 'react-icons/hi';

const values = [
    {
        icon: HiHeart,
        title: 'Compassion',
        description: 'Every piece reflects warmth and care, designed not just to be seen but to be felt.',
    },
    {
        icon: HiSparkles,
        title: 'Authenticity',
        description: 'True to our roots, we create genuine experiences through authentic storytelling.',
    },
    {
        icon: HiStar,
        title: 'Elegance with Meaning',
        description: 'Luxury lies in simplicity. Every detail carries purpose and thought.',
    },
    {
        icon: HiLightBulb,
        title: 'Thoughtful Design',
        description: 'Mindful service and attention to detail in every stitch and seam.',
    },
];

const About = () => {
    return (
        <section className="section-padding bg-ivory-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                            <img
                                src="/images/lifestyle.png"
                                alt="Ruhaam Lifestyle"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden lg:block"
                        >
                            <p className="text-primary-600 font-serif text-xl italic mb-2">
                                "We wanted to build a brand that people don't just see — but feel."
                            </p>
                            <p className="text-sm text-gray-500">— Founders, Ruhaam</p>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-gold-400 text-sm tracking-widest uppercase mb-4 block">
                            About Ruhaam
                        </span>
                        <h2 className="heading-lg text-gray-900 mb-6">
                            Where Soul Meets Style
                        </h2>
                        <div className="divider mb-8" />

                        <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
                            <p>
                                <span className="font-serif text-2xl text-primary-600">Ruhaam</span> is inspired by the essence of compassion and soulful living. The name itself carries deep meaning — evoking warmth, authenticity, and care.
                            </p>
                            <p>
                                We create premium menswear for modern men who value comfort, quality, and elegance. From redefined cocktail wear and elegant party shirts to thoughtfully crafted men's kurtas, every piece is designed with attention to detail and superior fabrics.
                            </p>
                            <p>
                                At Ruhaam, we believe true luxury lies in simplicity, fit, and finish. Whether it's an everyday moment, a special evening, or a grand celebration — we help you dress well, leaving a lasting impression.
                            </p>
                        </div>

                        {/* Core Values */}
                        <div className="grid grid-cols-2 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                                    className="group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-3 group-hover:bg-primary-600 transition-colors">
                                        <value.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="font-serif text-lg text-gray-800 mb-1">{value.title}</h4>
                                    <p className="text-sm text-gray-500">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
