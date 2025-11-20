"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavigationLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loader when route changes
    setLoading(true);

    // Hide loader after a short delay to ensure smooth transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Adjust duration as needed (800ms = 0.8 seconds)

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[#0a1525] z-[100] flex items-center justify-center animate-fadeIn">
      <div className="text-center">
        {/* Logo with pulse animation */}
        <div className="mb-8 animate-pulse">
          <Image
            src="/techville-logo.png"
            alt="Techville Enterprises"
            width={200}
            height={67}
            className="mx-auto"
          />
        </div>

        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[#0866ff] rounded-full animate-spin"></div>
        </div>

        {/* Loading text */}
        <p className="text-white/60 text-sm tracking-wider">LOADING...</p>
      </div>
    </div>
  );
}
