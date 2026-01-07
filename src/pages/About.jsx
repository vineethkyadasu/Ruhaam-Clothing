import React from 'react';
import { motion } from 'framer-motion';
import { HiHeart, HiSparkles, HiStar, HiLightBulb } from 'react-icons/hi';
import { founders } from '../data/products';

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

const AboutPage = () => {
    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/lifestyle.png"
                        alt="Ruhaam Story"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-2 bg-gold-400/20 border border-gold-400/30 rounded-full text-gold-300 text-sm tracking-wider mb-6"
                    >
                        OUR STORY
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-xl mb-4"
                    >
                        About Ruhaam
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        Where soul meets style. Crafted with compassion, designed with purpose.
                    </motion.p>
                </div>
            </section>

            {/* The Name Section */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-gold-400 text-sm tracking-widest uppercase mb-4 block">
                            The Meaning
                        </span>
                        <h2 className="heading-lg text-gray-900 mb-8">What is Ruhaam?</h2>
                        <div className="divider-center mb-8" />
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            <span className="font-serif text-3xl text-primary-600 italic">Ruhaam</span> is inspired by the essence of compassion and soulful living. The name evokes warmth, authenticity, and care — qualities that define every piece we create.
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            It's not just a brand name; it's a philosophy. A reminder that true luxury isn't just seen — it's felt. Every thread, every stitch, every design choice is made with soul.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Brand Story */}
            <section className="section-padding bg-ivory-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-gold-400 text-sm tracking-widest uppercase mb-4 block">
                                Our Journey
                            </span>
                            <h2 className="heading-lg text-gray-900 mb-6">Luxury That Feels Effortless</h2>
                            <div className="divider mb-8" />
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Ruhaam creates premium menswear for modern men who value comfort, quality, and elegance. From redefined cocktail wear and elegant party shirts to thoughtfully crafted men's kurtas — basic, occasional, festive — every piece is designed with attention to detail and superior fabrics.
                                </p>
                                <p>
                                    Our designs balance modern tailoring with timeless appeal, ensuring a confident and polished look. At Ruhaam, we believe true luxury lies in simplicity, fit, and finish.
                                </p>
                                <p>
                                    Whether it's an everyday moment, a special evening, or a grand celebration, Ruhaam helps you dress well, leaving a lasting impression.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="/images/hero.png"
                                alt="Ruhaam Quality"
                                className="w-full rounded-lg shadow-xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-primary-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold-400 text-sm tracking-widest uppercase mb-4 block">
                            What We Stand For
                        </span>
                        <h2 className="heading-lg mb-4">Our Core Values</h2>
                        <div className="w-16 h-0.5 bg-gold-400 mx-auto" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                                    <value.icon className="w-8 h-8 text-gold-400" />
                                </div>
                                <h3 className="font-serif text-xl mb-2">{value.title}</h3>
                                <p className="text-primary-100 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders */}
            <section className="section-padding bg-white" id="founders">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <div className="divider-center" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
                        {founders.map((founder, index) => (
                            <motion.div
                                key={founder.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
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
                                <p className="text-gray-600">{founder.bio}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quote */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-ivory-100 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
                    >
                        <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 italic mb-6 leading-relaxed">
                            "We wanted to build a brand that people don't just see — but feel."
                        </blockquote>
                        <p className="text-gray-500 font-medium">— Anil Rathod & Ramya Rangineni</p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
