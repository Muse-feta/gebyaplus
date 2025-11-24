"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100;

          setIsAtBottom(isNearBottom);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed z-50 bottom-0 left-0 w-full bg-primary text-white"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="w-full px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-center sm:text-left">
            {/* Logo + tagline */}
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="w-6 h-6 bg-white text-primary rounded flex items-center justify-center font-bold text-sm">
                  G
                </div>
                <div className="text-lg font-bold">Gebya+</div>
              </div>
              <div className="text-xs opacity-90 mt-1">
                Bring Your Products to Customers Across Ethiopia
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs">
              <Link href="#" className="hover:underline">
                About
              </Link>
              <Link href="#" className="hover:underline">
                Creators
              </Link>
              <Link href="#" className="hover:underline">
                Brands
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
              <Link href="#" className="hover:underline">
                Support
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-xs opacity-75">
              © 2025 Gebya+. Made in Ethiopia 🇪🇹
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
