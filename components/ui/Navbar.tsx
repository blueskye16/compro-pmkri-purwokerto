"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routeItems } from "@/components/utils/routePath";
import { X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const isNavActive = isScrolled || !isHomePage;

  const navItems = [
    routeItems.beranda,
    routeItems.sejarah,
    routeItems.visiMisi,
    routeItems.kontak,
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isNavActive ? "bg-white/90 py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-3">
          {/* Placeholder for Logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full font-serif text-xl font-bold text-white">
            <img src="/logo-pmkri-pwt.png" alt="icon" />
          </div>
          <span
            className={`font-serif text-lg font-bold tracking-tight ${isNavActive ? "text-slate-900" : "text-white"}`}
          >
            PMKRI Purwokerto
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              // href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${isNavActive ? "text-slate-600" : "text-white/90"}`}
            >
              {item.label}
            </a>
          ))}
          <button className="transform rounded-full bg-red-900 px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-xl">
            Bergabung
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="text-slate-900 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isNavActive ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={isNavActive ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 overflow-hidden border-t bg-white md:hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  // href={`${item.toLowerCase().replace(" ", "-")}`}
                  className="font-medium text-slate-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full rounded-md bg-red-900 px-6 py-3 font-semibold text-white">
                Bergabung
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
