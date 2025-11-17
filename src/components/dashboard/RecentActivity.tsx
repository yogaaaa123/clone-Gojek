"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const activities = [
    { id: 1, type: "Ride", desc: "GoRide to Office", date: "2025-11-15", amount: -15000 },
    { id: 2, type: "Top-Up", desc: "Top up Wallet", date: "2025-11-14", amount: 50000 },
    { id: 3, type: "Food Delivery", desc: "Lunch Order", date: "2025-11-13", amount: -35000 },
];

function formatAmount(amount: number): string {
    return Math.abs(amount).toLocaleString("id-ID");
}

export function RecentActivity() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Aktivitas Terakhir</h3>
            </div>
        );
    }

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }}>
            <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Aktivitas Terakhir</h3>
            </div>
            <div className="space-y-2">
                {activities.map((a) => (
                    <Card key={a.id} className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-800 hover:shadow-md transition-all">
                        <div>
                            <div className="font-semibold text-sm text-gray-900 dark:text-white">{a.type}</div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">{a.desc}</div>
                        </div>
                        <div className="text-right">
                            <div className={`text-sm font-bold ${a.amount < 0 ? "text-red-500" : "text-green-600"}`}>
                                {a.amount < 0 ? "-" : "+"}Rp {formatAmount(a.amount)}
                            </div>
                            <div className="text-xs text-zinc-400">{a.date}</div>
                        </div>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
}
