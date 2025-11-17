"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Wallet } from "lucide-react";

export default function WalletCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-6 shadow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium opacity-90">Saldo Dompet</div>
            <div className="text-3xl font-bold mt-2">Rp 125.000</div>
          </div>
          <div className="bg-white bg-opacity-20 p-3 rounded-full">
            <Wallet size={32} className="text-white" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}