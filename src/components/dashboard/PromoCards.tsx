"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const promos = [
    { id: 1, image: "/promo1.jpg", title: "Diskon 50% Food Delivery" },
    { id: 2, image: "/promo2.jpg", title: "Gratis Ongkir Ride" },
];

export function PromoCards() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
            <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Promo Spesial</h3>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
                {promos.map((promo) => (
                    <Card key={promo.id} className="min-w-[200px] p-0 overflow-hidden shadow-md rounded-xl hover:shadow-lg transition-all">
                        <img src={promo.image} alt={promo.title} className="w-full h-20 object-cover" />
                        <div className="p-2">
                            <div className="font-semibold text-xs text-gray-900 dark:text-white line-clamp-2">{promo.title}</div>
                        </div>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
}
