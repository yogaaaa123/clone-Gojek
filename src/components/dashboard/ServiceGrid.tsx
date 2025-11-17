"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon, Car, Utensils, Package, PlusCircle, Receipt, ShoppingBag } from "lucide-react";

const services: { label: string; icon: LucideIcon; color: string }[] = [
    { label: "Ride", icon: Car, color: "bg-blue-100 text-blue-600" },
    { label: "Food Delivery", icon: Utensils, color: "bg-green-100 text-green-600" },
    { label: "Parcel Delivery", icon: Package, color: "bg-yellow-100 text-yellow-600" },
    { label: "Top-Up", icon: PlusCircle, color: "bg-purple-100 text-purple-600" },
    { label: "Bills", icon: Receipt, color: "bg-pink-100 text-pink-600" },
    { label: "Shopping", icon: ShoppingBag, color: "bg-orange-100 text-orange-600" },
];

export function ServiceGrid() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>
            <div className="mb-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Layanan</h3>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
                {services.map((service) => (
                    <Card key={service.label} className="flex flex-col items-center justify-center p-3 cursor-pointer hover:shadow-lg transition-all rounded-xl bg-white dark:bg-zinc-800">
                        <div className={`rounded-full p-2 mb-2 ${service.color}`}>
                            <service.icon size={24} />
                        </div>
                        <span className="text-xs font-semibold text-center text-gray-900 dark:text-white">{service.label}</span>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
}
