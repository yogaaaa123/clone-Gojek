"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Smartphone, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
    { emoji: "🚗", name: "Go-Ride", desc: "Transportasi Online" },
    { emoji: "🍔", name: "Go-Food", desc: "Pesan Makanan" },
    { emoji: "📦", name: "Go-Send", desc: "Pengiriman Paket" },
    { emoji: "🛍️", name: "Go-Shop", desc: "Belanja Online" },
    { emoji: "💳", name: "Go-Pay", desc: "Dompet Digital" },
    { emoji: "🏪", name: "Go-Mart", desc: "Belanja Groceries" },
];

const stats = [
    { number: "50M+", label: "Active Users" },
    { number: "3.1M", label: "Driver Partners" },
    { number: "20M+", label: "Merchants" },
    { number: "2", label: "Countries" },
];

const achievements = [
    { title: "Best Transportation App 2024", icon: "🏆" },
    { title: "Consumers' Choice Award 2024", icon: "⭐" },
    { title: "Trusted by Millions", icon: "❤️" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white overflow-x-hidden">
            {/* Navigation - Premium Level */}
            <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-emerald-900/20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 sm:py-6 flex items-center justify-between">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-3"
                    >
                        <div className="text-2xl sm:text-3xl font-black tracking-tight">
                            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">Super</span>
                            <span className="text-white">App</span>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-3 sm:gap-4"
                    >
                        <Link href="/login">
                            <Button className="hidden sm:inline-flex bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gray-700 hover:border-emerald-500 text-gray-200 hover:text-emerald-300 px-7 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]">
                                Login
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button className="inline-flex bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-7 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                                Download
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </nav>

            {/* Hero Section - Premium */}
            <section className="relative py-20 md:py-28 pb-24 md:pb-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
                {/* Gradient Orbs Background */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl opacity-40" />
                <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl opacity-30" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10"
                >
                    {/* Left Content */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6 }
                            }
                        }}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6 sm:space-y-8"
                    >
                        {/* Pill Badge */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1, transition: { delay: 0.2 } }
                            }}
                            className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-300 backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            The #1 Super App in Asia
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { delay: 0.3 } }
                            }}
                            className="mt-10 md:mt-16 mb-8 md:mb-12 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] sm:leading-[1.15]"
                        >
                            One App for
                            <br />
                            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">Everything</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { delay: 0.4 } }
                            }}
                            className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md"
                        >
                            Ride, food, shopping, payments - all in one secure platform. Experience seamless daily life like never before.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { delay: 0.5 } }
                            }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Link href="/register" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-black px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                                    Get Started
                                </Button>
                            </Link>
                            <Button className="w-full sm:w-auto bg-transparent text-emerald-400 border-2 border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-500/10 px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-[1.02]">
                                Explore Features
                            </Button>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { delay: 0.6 } }
                            }}
                            className="flex flex-wrap gap-6 pt-4 border-t border-gray-700/50"
                        >
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Downloads</p>
                                <p className="text-xl sm:text-2xl font-bold text-white">500M+</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Rating</p>
                                <p className="text-xl sm:text-2xl font-bold text-emerald-400">4.8★</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Countries</p>
                                <p className="text-xl sm:text-2xl font-bold text-white">8+</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Phone Mockup */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.8, x: 40 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                x: 0,
                                transition: { duration: 0.7, delay: 0.2 }
                            }
                        }}
                        initial="hidden"
                        animate="visible"
                        className="relative h-full min-h-[500px] sm:min-h-[600px] hidden lg:flex items-center justify-center"
                    >
                        {/* Floating Phone */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-72 h-96 bg-gradient-to-b from-gray-200 to-gray-300 rounded-3xl shadow-2xl border-8 border-gray-800"
                        >
                            {/* Phone Screen */}
                            <div className="absolute inset-4 bg-gradient-to-b from-slate-900 to-black rounded-2xl overflow-hidden">
                                <div className="p-4 space-y-4">
                                    <div className="h-8 bg-gradient-to-r from-emerald-500/50 to-green-500/50 rounded-lg" />
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-700 rounded w-3/4" />
                                        <div className="h-4 bg-gray-700 rounded w-full" />
                                        <div className="h-4 bg-gray-700 rounded w-5/6" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-lg" />
                                        <div className="h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-lg" />
                                        <div className="h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-lg" />
                                    </div>
                                </div>
                            </div>

                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
                        </motion.div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 to-transparent rounded-full blur-3xl" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Section - Premium */}
            <section className="relative py-20 md:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="group bg-gradient-to-br from-gray-900/40 to-gray-950/40 border border-gray-800/50 hover:border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300"
                        >
                            <motion.div
                                className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:from-emerald-300 group-hover:to-green-400 transition-all duration-300"
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider group-hover:text-gray-400 transition-colors duration-300 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Services Section - Premium */}
            <section className="relative py-20 md:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-10 md:mt-16 mb-8 md:mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        Everything You Need
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Six powerful services to make your daily life easier, all in one place.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10 lg:gap-12"
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -6, scale: 1.05 }}
                            className="group"
                        >
                            <div className="h-full bg-gradient-to-br from-gray-900/60 to-gray-950/60 border border-gray-800/50 hover:border-emerald-500/40 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 shadow-lg hover:shadow-emerald-500/15 backdrop-blur-sm">
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                                    className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 origin-center"
                                >
                                    {service.emoji}
                                </motion.div>
                                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors duration-300 line-clamp-1">
                                    {service.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300 line-clamp-2">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Achievements Section - Premium */}
            <section className="relative py-20 md:py-28 mt-16 md:mt-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mt-10 md:mt-16 mb-8 md:mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        Recognized & Trusted
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                >
                    {achievements.map((achievement, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="group"
                        >
                            <div className="h-full bg-gradient-to-br from-gray-900/60 to-gray-950/60 border border-gray-800/50 hover:border-emerald-500/40 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 shadow-lg hover:shadow-emerald-500/15 backdrop-blur-sm">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                                    className="text-4xl sm:text-5xl mb-4 origin-center"
                                >
                                    {achievement.icon}
                                </motion.div>
                                <p className="text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 leading-relaxed">
                                    {achievement.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA Section - Premium */}
            <section className="relative py-20 md:py-28 mt-28 md:mt-36 mb-20 md:mb-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
                {/* Decorative gradient orbs */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-900/15 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/15 rounded-full blur-3xl opacity-20" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-6 sm:space-y-8 relative z-10"
                >
                    <h2 className="mt-10 md:mt-16 mb-8 md:mb-12 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                        Ready to Transform
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">Your Everyday Life?</span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Join millions of users experiencing the convenience of having everything in one place. Download SuperApp now and start your journey today.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4"
                    >
                        <Link href="/register">
                            <Button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-black px-7 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group flex items-center justify-center gap-2">
                                <span>App Store</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-black px-7 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group flex items-center justify-center gap-2">
                                <span>Play Store</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Footer - Premium */}
            <footer className="relative border-t border-gray-900/50 py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black opacity-50" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                        {/* Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="col-span-2 sm:col-span-1"
                        >
                            <div className="text-2xl font-black mb-3 sm:mb-4">
                                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">Super</span>
                                <span className="text-white">App</span>
                            </div>
                            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                Your complete solution for daily life. Trusted by millions worldwide.
                            </p>
                        </motion.div>

                        {/* Company Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                        >
                            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Company</h4>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-500">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">About Us</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Careers</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Blog</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Press</a></li>
                            </ul>
                        </motion.div>

                        {/* Products Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Services</h4>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-500">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Go-Ride</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Go-Food</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Go-Pay</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Go-Mart</a></li>
                            </ul>
                        </motion.div>

                        {/* Legal Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Legal</h4>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-500">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Privacy</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Terms</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Security</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Contact</a></li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-900/50 pt-6 sm:pt-8 text-center">
                        <p className="text-xs sm:text-sm text-gray-600">
                            &copy; 2025 SuperApp. All rights reserved. Transforming daily life, one experience at a time.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
