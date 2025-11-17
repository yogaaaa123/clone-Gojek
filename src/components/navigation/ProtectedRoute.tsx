"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
    } else {
      setIsChecking(false); // aman boleh render
    }
  }, [router]);

  if (isChecking) {
    return null; // jangan render sebelum cek selesai
  }

  return <>{children}</>;
}