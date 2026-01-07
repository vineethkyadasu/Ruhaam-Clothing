import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        shop: [
            { name: 'Kurtas', path: '/shop?category=kurtas' },
            { name: 'Shirts', path: '/shop?category=shirts' },
            { name: 'Jackets', path: '/shop?category=jackets' },
            { name: 'New Arrivals', path: '/shop?filter=new' },
        ],
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Our Story', path: '/about#story' },
            { name: 'Founders', path: '/about#founders' },
            { name: 'Contact', path: '/contact' },
        ],
        support: [
            { name: 'Shipping Info', path: '/shipping' },
            { name: 'Returns & Exchange', path: '/returns' },
            { name: 'Size Guide', path: '/size-guide' },
            { name: 'FAQs', path: '/faqs' },
        ],
    };

    const socialLinks = [
        { icon: FaInstagram, href: 'https://instagram.com/ruhaam', label: 'Instagram' },
        { icon: FaFacebookF, href: 'https://facebook.com/ruhaam', label: 'Facebook' },
        { icon: FaTwitter, href: 'https://twitter.com/ruhaam', label: 'Twitter' },
        { icon: FaPinterestP, href: 'https://pinterest.com/ruhaam', label: 'Pinterest' },
    ];

    return (
        <footer className="bg-primary-600 text-white">
            {/* Newsletter Section */}
            <div className="border-b border-primary-500/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-serif font-light mb-2">Join the Ruhaam Family</h3>
                            <p className="text-primary-100 text-sm">
                                Subscribe for exclusive updates, new arrivals, and special offers.
                            </p>
                        </div>
                        <form className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-sm text-white placeholder-primary-200 focus:outline-none focus:border-gold-400"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gold-400 text-white font-medium rounded-r-sm hover:bg-gold-500 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <img src="/images/logo.png" alt="Ruhaam" className="h-14 mb-6 brightness-0 invert" />
                        <p className="text-primary-100 text-sm leading-relaxed mb-6 max-w-xs">
                            Crafted with soul. Premium menswear for modern men who value comfort, quality, and elegance.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Shop</h4>
                        <ul className="space-y-3">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-primary-100 text-sm hover:text-gold-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-primary-100 text-sm hover:text-gold-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-primary-100 text-sm hover:text-gold-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-500/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-200">
                        <p>© {currentYear} Ruhaam. All rights reserved.</p>
                        <p>
                            Designed & Developed by{' '}
                            <a
                                href="https://www.vikrin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gold-400 hover:text-gold-300 transition-colors"
                            >
                                Vikrin
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
