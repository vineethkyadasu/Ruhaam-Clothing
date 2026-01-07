import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: HiMail,
            title: 'Email Us',
            details: ['hello@ruhaam.com', 'support@ruhaam.com'],
        },
        {
            icon: HiPhone,
            title: 'Call Us',
            details: ['+91 98765 43210', '+91 87654 32109'],
        },
        {
            icon: HiLocationMarker,
            title: 'Visit Us',
            details: ['Ruhaam Flagship Store', 'Jubilee Hills, Hyderabad', 'Telangana 500033'],
        },
        {
            icon: HiClock,
            title: 'Working Hours',
            details: ['Mon - Sat: 10:00 AM - 8:00 PM', 'Sun: 11:00 AM - 6:00 PM'],
        },
    ];

    const socialLinks = [
        { icon: FaInstagram, href: 'https://instagram.com/ruhaam', label: 'Instagram' },
        { icon: FaFacebookF, href: 'https://facebook.com/ruhaam', label: 'Facebook' },
        { icon: FaTwitter, href: 'https://twitter.com/ruhaam', label: 'Twitter' },
        { icon: FaWhatsapp, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
    ];

    return (
        <main className="pt-20">
            {/* Hero */}
            <section className="bg-primary-600 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="heading-lg mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-primary-100 text-lg max-w-2xl mx-auto"
                    >
                        Have a question or need assistance? We'd love to hear from you. Our team is here to help.
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding bg-ivory-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="heading-sm text-gray-900 mb-8">Contact Information</h2>

                                <div className="space-y-6 mb-10">
                                    {contactInfo.map((item) => (
                                        <div key={item.title} className="flex gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                                                <item.icon className="w-5 h-5 text-primary-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-800 mb-1">{item.title}</h3>
                                                {item.details.map((detail, i) => (
                                                    <p key={i} className="text-sm text-gray-500">{detail}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div>
                                    <h3 className="font-medium text-gray-800 mb-4">Follow Us</h3>
                                    <div className="flex gap-3">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
                                                aria-label={social.label}
                                            >
                                                <social.icon className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-sm p-6 md:p-10"
                            >
                                <h2 className="heading-sm text-gray-900 mb-6">Send Us a Message</h2>

                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                                    >
                                        Thank you for your message! We'll get back to you soon.
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-2">Your Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="input-elegant"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="input-elegant"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="input-elegant"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-2">Subject *</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                                className="input-elegant"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="order">Order Support</option>
                                                <option value="returns">Returns & Exchange</option>
                                                <option value="custom">Custom Orders</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm text-gray-600 mb-2">Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="textarea-elegant"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <button type="submit" className="w-full md:w-auto btn-primary">
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 bg-gray-200 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5775927477!2d78.41071731487624!3d17.42897718806069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c82e9c677b%3A0x8c8c3f9a5c2b6e0a!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ruhaam Store Location"
                />
            </section>
        </main>
    );
};

export default Contact;
