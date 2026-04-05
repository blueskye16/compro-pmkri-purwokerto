"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "@/components/ui/Footer";
import { SanityGalleryData } from "@/lib/sanity-types";

interface GalleryClientProps {
  initialData: SanityGalleryData[];
}

export default function GalleryClient({ initialData }: GalleryClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<SanityGalleryData | null>(
    null,
  );
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isMounted, setIsMounted] = useState(false);

  // Otomatis mengekstrak kategori unik dari data Sanity yang masuk
  const CATEGORIES = [
    "Semua",
    ...Array.from(new Set(initialData.map((item) => item.category))),
  ].filter(Boolean); // filter(Boolean) untuk mencegah error jika ada data kosong

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(4);
      else setItemsPerPage(6);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => setCurrentPage(1), [activeCategory]);

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  // Gunakan initialData, bukan data statis lagi
  const filteredData =
    activeCategory === "Semua"
      ? initialData
      : initialData.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) setCurrentPage(1);
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  if (!isMounted) return null;

  return (
    <>
      <main className="relative min-h-screen bg-slate-50 pt-32 dark:bg-slate-950">
        <div className="bg-pattern pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-15" />
        <Navbar />
        <div className="container z-10 mx-auto mb-14 px-6 md:px-12">
          <div className="mb-8 border-b border-slate-300 pb-8 text-center md:text-left">
            <span className="text-sm font-bold tracking-wider text-amber-600 uppercase">
              Dokumentasi
            </span>
            <h1 className="mt-2 font-serif text-4xl font-bold text-red-900 md:text-5xl dark:text-red-400">
              Galeri Pergerakan
            </h1>
          </div>

          {/* Filter Kategori Dinamis */}
<div className="mb-10 flex flex-wrap justify-center gap-3 md:justify-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                // Penyempurnaan Dark Mode pada tombol filter
                className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "border-red-900 bg-red-900 text-white shadow-md dark:border-red-800 dark:bg-red-800"
                    : "border-slate-300 bg-white text-slate-600 hover:border-red-900 hover:text-red-900 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-red-400 dark:hover:text-red-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredData.length === 0 ? (
            <div className="py-20 text-center text-slate-500">
              Tidak ada foto untuk kategori ini.
            </div>
          ) : (
            <FadeInStagger
              key={`${activeCategory}-${currentPage}-${itemsPerPage}`}
            >
              <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
                {currentImages.map((photo) => (
                  <FadeIn key={photo._id}>
                    <div
                      className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-xl bg-slate-200 shadow-sm"
                      onClick={() => setSelectedImage(photo)}
                    >
                      <Image
                        src={photo.mainImageUrl}
                        alt={photo.title}
                        width={800}
                        height={800}
                        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        // Memaksa prioritas pada gambar pertama agar LCP (Largest Contentful Paint) cepat
                        priority={currentImages.indexOf(photo) < 2}
                      />
                      <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-red-950/90 via-red-950/40 to-transparent p-6 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                        <p className="mb-1 text-xs font-bold tracking-widest text-amber-400 uppercase">
                          {photo.category}
                        </p>
                        <h3 className="font-serif text-xl leading-tight font-bold text-white">
                          {photo.title}
                        </h3>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeInStagger>
          )}

          {/* Kontrol Pagination Tetap Sama */}
{totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-white dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:disabled:hover:bg-slate-900"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="font-medium text-slate-600 dark:text-slate-400">
                Halaman{" "}
                <span className="font-bold text-red-900 dark:text-red-400">{currentPage}</span>{" "}
                dari {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-white dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:disabled:hover:bg-slate-900"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 z-50 text-white/70 transition-colors hover:text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.mainImageUrl}
                  alt={selectedImage.title}
                  className="max-h-[80vh] w-auto object-contain"
                />
                <div className="bg-slate-900 p-6 text-center">
                  <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
                    {selectedImage.category}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
