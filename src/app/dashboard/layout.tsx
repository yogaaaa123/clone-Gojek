import BottomNav from "@/components/navigation/BottomNav";

import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100 pb-20">
            {children}
            <BottomNav />
        </div>
    );
}