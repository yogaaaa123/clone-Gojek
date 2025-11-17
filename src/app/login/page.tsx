"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleLogin() {
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Login gagal");
                setLoading(false);
                return;
            }

            // Simpan token ke localStorage
            localStorage.setItem("token", data.token);

            router.push("/dashboard");
        } catch (err) {
            setError("Terjadi kesalahan, coba lagi");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Card className="w-full max-w-sm p-6 shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                    <div className="space-y-3">
                        <Input
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />

                        <Input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />

                        {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        )}

                        <Button
                            className="w-full"
                            disabled={loading}
                            onClick={handleLogin}
                        >
                            {loading ? "Loading..." : "Login"}
                        </Button>

                        <p className="text-center text-sm text-gray-600">
                            Belum punya akun?{" "}
                            <a href="/register" className="text-blue-600 underline">
                                Register
                            </a>
                        </p>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
}