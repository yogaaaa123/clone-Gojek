"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function ProfilePage() {
    const router = useRouter();
    // Example user data (replace with real data from API)
    const [user] = useState({
        avatar: "/avatar.png",
        name: "Budi Santoso",
        email: "budi@example.com",
        phone: "+62 812-3456-7890",
    });
    const [darkMode, setDarkMode] = useState(false);

    function handleLogout() {
        localStorage.removeItem("token");
        router.replace("/login");
    }

    function handleToggleDarkMode() {
        setDarkMode((d) => {
            const next = !d;
            if (next) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return next;
        });
    }

    return (
        <ProtectedRoute>
            <div className="max-w-md mx-auto px-2 pt-8 pb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                    <Card className="flex flex-col items-center p-6 mb-6">
                        <img
                            src={user.avatar}
                            alt="Avatar"
                            className="w-20 h-20 rounded-full border-4 border-blue-500 mb-3 object-cover"
                        />
                        <div className="font-bold text-lg mb-1">{user.name}</div>
                        <div className="text-zinc-500 text-sm mb-1">{user.email}</div>
                        <div className="text-zinc-400 text-xs mb-4">{user.phone}</div>
                        <Button className="w-full mb-2 border border-zinc-300 bg-white text-blue-600 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-blue-400 dark:border-zinc-700" type="button">
                            Edit Profile
                        </Button>
                        <Button className="w-full mb-2 bg-red-600 hover:bg-red-700" type="button" onClick={handleLogout}>
                            Logout
                        </Button>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-sm">Dark Mode</span>
                            <Switch checked={darkMode} onCheckedChange={handleToggleDarkMode} />
                        </div>
                    </Card>
                </motion.div>
            </div>
        </ProtectedRoute>
    );
}
