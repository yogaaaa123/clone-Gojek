"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const fakeOrders = [
    {
        id: 1,
        type: "Ride",
        status: "Completed",
        date: "2025-11-15",
        price: 15000,
    },
    {
        id: 2,
        type: "Food Delivery",
        status: "Ongoing",
        date: "2025-11-16",
        price: 35000,
    },
    {
        id: 3,
        type: "Parcel Delivery",
        status: "Canceled",
        date: "2025-11-14",
        price: 20000,
    },
];

function StatusBadge({ status }: { status: string }) {
    const color =
        status === "Completed"
            ? "bg-green-100 text-green-700"
            : status === "Ongoing"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700";
    return (
        <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>{status}</span>
    );
}

function OrderSkeleton() {
    return (
        <div className="animate-pulse mb-3">
            <Card className="flex items-center justify-between p-4 mb-2">
                <div className="w-20 h-4 bg-zinc-200 rounded mb-2" />
                <div className="w-16 h-4 bg-zinc-200 rounded" />
            </Card>
        </div>
    );
}

export default function OrdersPage() {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState<typeof fakeOrders>([]);

    useEffect(() => {
        setTimeout(() => {
            setOrders(fakeOrders);
            setLoading(false);
        }, 1200);
    }, []);

    return (
        <ProtectedRoute>
            <div className="max-w-md mx-auto px-2 pt-8 pb-20">
                <h2 className="text-xl font-bold mb-4">My Orders</h2>
                <AnimatePresence>
                    {loading
                        ? Array.from({ length: 3 }).map((_, i) => <OrderSkeleton key={i} />)
                        : orders.map((order) => (
                            <motion.div
                                key={order.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="mb-3"
                            >
                                <Card className="flex items-center justify-between p-4">
                                    <div>
                                        <div className="font-semibold text-sm mb-1">{order.type}</div>
                                        <div className="text-xs text-zinc-400">{order.date}</div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <StatusBadge status={order.status} />
                                        <div className="font-bold text-blue-600 mt-1 text-sm">Rp {order.price.toLocaleString()}</div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>
        </ProtectedRoute>
    );
}
