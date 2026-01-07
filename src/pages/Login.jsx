import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Demo: just navigate to home
        navigate('/');
    };

    return (
        <main className="pt-20 min-h-screen bg-ivory-50 flex items-center justify-center py-12">
            <div className="max-w-md w-full mx-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-primary-600 text-white p-8 text-center">
                        <Link to="/">
                            <img src="/images/logo.png" alt="Ruhaam" className="h-12 mx-auto mb-4 brightness-0 invert" />
                        </Link>
                        <h1 className="text-2xl font-serif">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h1>
                        <p className="text-primary-100 text-sm mt-2">
                            {isLogin
                                ? 'Sign in to continue shopping'
                                : 'Join the Ruhaam family today'}
                        </p>
                    </div>

                    {/* Form */}
                    <div className="p-8">
                        <form onSubmit={handleSubmit}>
                            {!isLogin && (
                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required={!isLogin}
                                        className="input-elegant"
                                        placeholder="John Doe"
                                    />
                                </div>
                            )}

                            <div className="mb-4">
                                <label className="block text-sm text-gray-600 mb-2">Email Address</label>
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

                            <div className="mb-4">
                                <label className="block text-sm text-gray-600 mb-2">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        className="input-elegant pr-10"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {!isLogin && (
                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600 mb-2">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        required={!isLogin}
                                        className="input-elegant"
                                        placeholder="••••••••"
                                    />
                                </div>
                            )}

                            {isLogin && (
                                <div className="flex items-center justify-between mb-6">
                                    <label className="flex items-center gap-2 text-sm text-gray-600">
                                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                        Remember me
                                    </label>
                                    <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                                        Forgot password?
                                    </a>
                                </div>
                            )}

                            <button type="submit" className="w-full btn-primary mb-4">
                                {isLogin ? 'Sign In' : 'Create Account'}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">or continue with</span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <FcGoogle className="w-5 h-5" />
                            <span className="text-gray-700 font-medium">Google</span>
                        </button>

                        {/* Toggle */}
                        <p className="text-center text-sm text-gray-600 mt-6">
                            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-primary-600 font-medium hover:text-primary-700"
                            >
                                {isLogin ? 'Sign up' : 'Sign in'}
                            </button>
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default Login;
