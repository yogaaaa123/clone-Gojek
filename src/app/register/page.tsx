"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleRegister() {
        setLoading(true);
        setError("");

        if (password !== confirmPassword) {
            setError("Password tidak cocok");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Register gagal");
                setLoading(false);
                return;
            }

            router.push("/login");
        } catch (err) {
            setError("Terjadi kesalahan, coba lagi");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-black px-4 py-8">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl opacity-40" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900/15 rounded-full blur-3xl opacity-30" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full max-w-[420px] z-10"
            >
                {/* Premium Form Card */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/50 hover:border-white/20 transition-all duration-300 backdrop-blur-xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent mb-2"
                        >
                            Create Account
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="text-gray-400 text-sm md:text-base"
                        >
                            Join SuperApp today and unlock endless possibilities
                        </motion.p>
                    </div>

                    {/* Form Fields */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="space-y-4 mb-6"
                    >
                        {/* Full Name Input */}
                        <div className="group">
                            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                                Full Name
                            </label>
                            <Input
                                placeholder="Enter your full name"
                                type="text"
                                value={name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 hover:border-white/20"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="group">
                            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                                Email Address
                            </label>
                            <Input
                                placeholder="your@email.com"
                                type="email"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 hover:border-white/20"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="group">
                            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                                Password
                            </label>
                            <Input
                                placeholder="Create a strong password"
                                type="password"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 hover:border-white/20"
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="group">
                            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                                Confirm Password
                            </label>
                            <Input
                                placeholder="Confirm your password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 hover:border-white/20"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-900/20 border border-red-500/30 rounded-xl p-3 text-red-300 text-sm text-center font-medium"
                            >
                                {error}
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="mb-6"
                    >
                        <Button
                            onClick={handleRegister}
                            disabled={loading}
                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-black font-bold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                    Creating Account...
                                </span>
                            ) : (
                                "Create Account"
                            )}
                        </Button>
                    </motion.div>

                    {/* Login Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-center border-t border-white/10 pt-6"
                    >
                        <p className="text-gray-400 text-sm">
                            Already have an account?{" "}
                            <a
                                href="/login"
                                className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-200 underline underline-offset-2"
                            >
                                Sign In
                            </a>
                        </p>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="text-center text-xs text-gray-500 mt-6"
                >
                    By creating an account, you agree to our{" "}
                    <a href="#" className="text-gray-400 hover:text-gray-300 underline">
                        Terms of Service
                    </a>
                    {" "}and{" "}
                    <a href="#" className="text-gray-400 hover:text-gray-300 underline">
                        Privacy Policy
                    </a>
                </motion.p>
            </motion.div>
        </div>
    );
}
