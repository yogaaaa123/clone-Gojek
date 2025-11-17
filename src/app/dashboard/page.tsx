"use client";

import WalletCard from "@/components/dashboard/WalletCard";
import { ServiceGrid } from "@/components/dashboard/ServiceGrid";
import { PromoCards } from "@/components/dashboard/PromoCards";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
                {/* Header */}
                <div className="sticky top-0 z-40 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 px-4 py-4">
                    <div className="flex items-center justify-between max-w-md mx-auto">
                        <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Selamat Pagi</div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">Budi Santoso</div>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                    </div>
                </div>

                {/* Content */}
                <main className="max-w-md mx-auto px-4 py-6 pb-24">
                    <WalletCard />
                    <div className="mt-6">
                        <ServiceGrid />
                    </div>
                    <div className="mt-6">
                        <PromoCards />
                    </div>
                    <div className="mt-6">
                        <RecentActivity />
                    </div>
                </main>
            </div>
        </ProtectedRoute>
    );
}