'use client'
import React, { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Placeholder for Logo */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
            <img src="/logo-pmkri-purwokerto.png" alt="icon" />
          </div>
          <span
            className={`font-serif font-bold text-lg tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}
          >
            PMKRI Purwokerto
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Beranda", "Sejarah", "Visi Misi", "Kegiatan", "Kontak"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${isScrolled ? "text-slate-600" : "text-white/90"}`}
              >
                {item}
              </a>
            ),
          )}
          <button className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Bergabung
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
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
            className="md:hidden bg-white border-t mt-3 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {["Beranda", "Sejarah", "Visi Misi", "Kegiatan", "Kontak"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ),
              )}
              <button className="bg-red-900 text-white px-6 py-3 rounded-md font-semibold w-full">
                Bergabung
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
