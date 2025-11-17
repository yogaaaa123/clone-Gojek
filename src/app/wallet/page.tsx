"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const fakeTransactions = [
    { id: 1, type: "Top-Up", date: "2025-11-15", amount: 50000 },
    { id: 2, type: "Ride Payment", date: "2025-11-14", amount: -15000 },
    { id: 3, type: "Food Delivery", date: "2025-11-13", amount: -35000 },
    { id: 4, type: "Withdraw", date: "2025-11-12", amount: -20000 },
];

function TransactionSkeleton() {
    return (
        <div className="animate-pulse mb-3">
            <Card className="flex items-center justify-between p-4 mb-2">
                <div className="w-20 h-4 bg-zinc-200 rounded mb-2" />
                <div className="w-16 h-4 bg-zinc-200 rounded" />
            </Card>
        </div>
    );
}

export default function WalletPage() {
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState<typeof fakeTransactions>([]);
    const [balance] = useState(120000);

    useEffect(() => {
        setTimeout(() => {
            setTransactions(fakeTransactions);
            setLoading(false);
        }, 1200);
    }, []);

    return (
        <ProtectedRoute>
            <div className="max-w-md mx-auto px-2 pt-8 pb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                    <Card className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-5 mb-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-xs uppercase opacity-80">Wallet Balance</div>
                                <div className="text-2xl font-bold mt-1">Rp {balance.toLocaleString()}</div>
                            </div>
                            <img src="/wallet.svg" alt="Wallet" className="w-10 h-10" />
                        </div>
                    </Card>
                </motion.div>
                <div className="flex gap-3 mb-6">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Top Up</Button>
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">Withdraw</Button>
                </div>
                <h2 className="font-semibold mb-2">Transaction History</h2>
                <AnimatePresence>
                    {loading
                        ? Array.from({ length: 3 }).map((_, i) => <TransactionSkeleton key={i} />)
                        : transactions.map((tx) => (
                            <motion.div
                                key={tx.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="mb-3"
                            >
                                <Card className="flex items-center justify-between p-4">
                                    <div>
                                        <div className="font-medium text-sm">{tx.type}</div>
                                        <div className="text-xs text-zinc-400">{tx.date}</div>
                                    </div>
                                    <div className={`font-bold text-sm ${tx.amount < 0 ? "text-red-500" : "text-green-600"}`}>
                                        {tx.amount < 0 ? "-" : "+"}Rp {Math.abs(tx.amount).toLocaleString()}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>
        </ProtectedRoute>
    );
}
