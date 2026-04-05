"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { routeItems } from "@/components/utils/routePath";
import { X, Menu, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const isNavActive = isScrolled || !isHomePage;

  const navItems = [
    routeItems.sejarah,
    routeItems.visiMisi,
    routeItems.pendidikan,
    routeItems.galeri,
    routeItems.kontak,
  ];

  return (
    <header
      // PERBAIKAN: Penambahan dark:bg-slate-950/90 dan dark:border-white/5
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isNavActive 
          ? "bg-white/90 dark:bg-slate-950/90 py-3 shadow-sm backdrop-blur-md dark:border-b dark:border-white/5" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full font-serif text-xl font-bold text-white">
            <Image src="/logo-pmkri-pwt.png" alt="icon" width={200} height={200} />
          </div>
          <span
            // PERBAIKAN: Teks logo menyesuaikan dark mode
            className={`font-serif text-lg font-bold tracking-tight transition-colors ${
              isNavActive ? "text-slate-900 dark:text-white" : "text-white"
            }`}
          >
            PMKRI Purwokerto
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              // PERBAIKAN: Hover warna amber, dark mode text
              className={`text-sm font-medium transition-colors hover:text-amber-500 dark:hover:text-amber-400 ${
                isNavActive ? "text-slate-600 dark:text-slate-300" : "text-white/90"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={routeItems.pendaftaran.href}
            className="transform cursor-pointer rounded-full bg-red-900 dark:bg-red-700 px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-red-800 dark:hover:bg-red-600 hover:shadow-xl"
          >
            Bergabung
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-amber-400 transition-all hover:scale-110"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isNavActive ? "text-slate-900 dark:text-white" : "text-white"} />
          ) : (
            <Menu className={isNavActive ? "text-slate-900 dark:text-white" : "text-white"} />
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
            // PERBAIKAN: Latar dark mode untuk menu mobile
            className="mt-3 overflow-hidden border-t border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 md:hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-amber-600 dark:hover:text-amber-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* TOMBOL TOGGLE UNTUK MOBILE */}
              {mounted && (
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-between rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 px-4 py-3 font-medium text-slate-600 dark:text-slate-300"
                >
                  <span>Tema Tampilan</span>
                  {resolvedTheme === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
                </button>
              )}

              <Link
                href={routeItems.pendaftaran.href}
                className="w-full rounded-md bg-red-900 dark:bg-red-800 px-6 py-3 text-center font-semibold text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bergabung
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};