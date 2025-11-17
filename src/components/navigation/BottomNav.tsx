"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ListOrdered, Wallet, User } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: <Home size={22} />, label: "Home" },
    { href: "/orders", icon: <ListOrdered size={22} />, label: "Orders" },
    { href: "/wallet", icon: <Wallet size={22} />, label: "Wallet" },
    { href: "/profile", icon: <User size={22} />, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-between px-6 py-3">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <div
            className={`flex flex-col items-center text-xs ${
              pathname === item.href ? "text-green-600" : "text-gray-500"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}