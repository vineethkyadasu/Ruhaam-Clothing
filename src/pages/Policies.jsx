import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    HiDocumentText, 
    HiLockClosed, 
    HiReply, 
    HiTruck, 
    HiCalendar, 
    HiGlobeAlt 
} from 'react-icons/hi';

const sections = [
    {
        id: 'terms-conditions',
        title: 'Terms & Conditions',
        icon: HiDocumentText,
        content: (
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">1. Introduction</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Welcome to Ruhaam.in. By accessing or using our website, you agree to be bound by these Terms & Conditions.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">2. Use of Website</h3>
                    <p className="text-gray-600 leading-relaxed">
                        You agree to use this website only for lawful purposes and in compliance with all applicable laws.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">3. Product Information</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We strive to ensure all product details are accurate. However, errors may occur and we reserve the right to correct them at any time.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">4. Pricing & Availability</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Prices and availability of products are subject to change without prior notice.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">5. Intellectual Property</h3>
                    <p className="text-gray-600 leading-relaxed">
                        All website content including images, designs, text, and logos belong to Ruhaam.in and cannot be reused without permission.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">6. Governing Law</h3>
                    <p className="text-gray-600 leading-relaxed">
                        These terms are governed by the laws of India.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 'privacy-policy',
        title: 'Privacy Policy',
        icon: HiLockClosed,
        content: (
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">1. Introduction</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Ruhaam.in respects your privacy and is committed to protecting your personal information.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">2. Information We Collect</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">We collect:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li>Name</li>
                        <li>Phone number</li>
                        <li>Email address</li>
                        <li>Shipping address</li>
                        <li>Payment details (via secure third-party gateways)</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">3. How We Use Information</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">We use your data to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li>Process orders</li>
                        <li>Deliver products</li>
                        <li>Provide customer support</li>
                        <li>Improve services</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">4. Data Protection</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We take strong security measures to protect your data but cannot guarantee 100% security.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">5. Sharing Information</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We do not sell data. Information is shared only with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li>Payment processors</li>
                        <li>Delivery partners</li>
                        <li>Legal authorities (if required)</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">6. Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Cookies may be used to improve user experience and website performance.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 'refund-policy',
        title: 'Refund & Cancellation',
        icon: HiReply,
        content: (
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">1. No Refund Policy</h3>
                    <p className="text-gray-600 leading-relaxed">
                        All payments are final. No refunds will be provided under any circumstances.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">2. No Return Policy</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Products once delivered cannot be returned.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">3. No Cancellation Policy</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Orders cannot be cancelled once placed and confirmed.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">4. Exceptions</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Ruhaam.in reserves the right to handle exceptional cases at its sole discretion.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 'shipping-policy',
        title: 'Shipping & Delivery',
        icon: HiTruck,
        content: (
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">1. Processing Time</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Orders are processed within 2–5 business days.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">2. Delivery Time</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Delivery usually takes 10-15 business days depending on location.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">3. Shipping Partners</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We use trusted courier services for deliveries.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">4. Delays</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Delays may occur due to weather, logistics, or remote locations.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">5. Tracking</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Tracking details will be shared once the order is shipped.
                    </p>
                </div>
            </div>
        )
    }
];

const Policies = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(sections[0].id);

    useEffect(() => {
        const path = location.pathname.substring(1);
        const section = sections.find(s => s.id === path);
        if (section) {
            setActiveSection(section.id);
        }
    }, [location]);

    const handleSectionChange = (id) => {
        setActiveSection(id);
        navigate(`/${id}`);
    };

    return (
        <main className="pt-24 pb-20 bg-ivory-100 min-h-screen">
            {/* Cover Header */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary-600 rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <span className="inline-block px-4 py-1 bg-gold-400 text-white text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
                                OFFICIAL POLICY BOOK
                            </span>
                            <h1 className="text-5xl md:text-6xl font-serif mb-4">RUHAAM.IN</h1>
                            <div className="flex flex-wrap items-center gap-6 text-primary-100 text-sm">
                                <span className="flex items-center gap-2">
                                    <HiGlobeAlt className="w-4 h-4 text-gold-400" />
                                    ruhaam.in
                                </span>
                                <span className="flex items-center gap-2">
                                    <HiCalendar className="w-4 h-4 text-gold-400" />
                                    Effective: 14 April 2026
                                </span>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 md:w-48 md:h-48 border-2 border-gold-400/30 rounded-full flex items-center justify-center relative">
                                <div className="absolute inset-2 border border-gold-400/20 rounded-full animate-spin-slow" />
                                <img src="/images/logo.png" alt="Ruhaam" className="w-24 md:w-32 brightness-0 invert" />
                            </div>
                        </div>
                    </div>
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700/50 rounded-full -ml-32 -mb-32 blur-3xl" />
                </motion.div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Navigation Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-32 space-y-2">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => handleSectionChange(section.id)}
                                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 group ${
                                        activeSection === section.id
                                            ? 'bg-white shadow-md text-primary-600 border-l-4 border-gold-400'
                                            : 'hover:bg-white/50 text-gray-500 hover:text-gray-900 border-l-4 border-transparent'
                                    }`}
                                >
                                    <section.icon className={`w-6 h-6 transition-colors duration-300 ${
                                        activeSection === section.id ? 'text-gold-500' : 'text-gray-400 group-hover:text-gold-400'
                                    }`} />
                                    <span className="font-medium tracking-wide uppercase text-xs">{section.title}</span>
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-ivory-200">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSection}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center gap-4 mb-10 pb-6 border-b border-ivory-100">
                                        <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                                            {React.createElement(sections.find(s => s.id === activeSection).icon, {
                                                className: "w-6 h-6 text-gold-600"
                                            })}
                                        </div>
                                        <h2 className="text-3xl font-serif text-gray-900">
                                            {sections.find(s => s.id === activeSection).title}
                                        </h2>
                                    </div>
                                    <div className="prose prose-gray max-w-none">
                                        {sections.find(s => s.id === activeSection).content}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Pagination Helper */}
                        <div className="mt-12 flex items-center justify-between">
                            {sections.findIndex(s => s.id === activeSection) > 0 ? (
                                <button 
                                    onClick={() => handleSectionChange(sections[sections.findIndex(s => s.id === activeSection) - 1].id)}
                                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors"
                                >
                                    ← Previous: {sections[sections.findIndex(s => s.id === activeSection) - 1].title}
                                </button>
                            ) : <div />}

                            {sections.findIndex(s => s.id === activeSection) < sections.length - 1 ? (
                                <button 
                                    onClick={() => handleSectionChange(sections[sections.findIndex(s => s.id === activeSection) + 1].id)}
                                    className="flex items-center gap-2 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
                                >
                                    Next: {sections[sections.findIndex(s => s.id === activeSection) + 1].title} →
                                </button>
                            ) : <div />}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Policies;
