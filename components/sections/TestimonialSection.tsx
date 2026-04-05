"use client";
import { SanityQuoteData } from "@/lib/sanity-types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { AcademicCapIcon } from "@/components/icons";

export const TestimonialSection = ({
  quotes,
}: {
  quotes: SanityQuoteData[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % quotes.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);

  return (
    // PERBAIKAN: Background transisi. Terang = Merah pekat, Gelap = Slate pekat dengan gradient
    <section className="relative overflow-hidden bg-red-950 py-24 text-white transition-colors duration-500 dark:bg-slate-950 dark:bg-radial dark:from-red-900/20 dark:to-slate-950">
    {/* <section className="relative overflow-hidden bg-red-950 py-24 text-white transition-colors duration-500 dark:bg-slate-950 dark:bg-radial dark:from-red-900/20 dark:to-slate-950"> */}
      {/* Texture overlay */}
      <div className="bg-pattern absolute inset-0 opacity-20 transition-opacity duration-500" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-4 flex flex-col items-center">
            <span className="mb-4 text-sm font-bold tracking-wider text-amber-500 uppercase">
              Kutipan Alumni & Senior
            </span>
            <h2 className="text-center font-serif text-3xl font-bold md:text-4xl">
              Suara Pergerakan
            </h2>
          </div>
        </FadeIn>

        <div className="relative mx-auto max-w-4xl">
          <div className="flex min-h-80 flex-col justify-center md:min-h-62.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center"
              >
                {/* PERBAIKAN WARNA ICON SESUAI TEMA PMKRI (Amber/Merah, bukan Biru) */}
                <AcademicCapIcon className="mx-auto mb-4 size-10 text-amber-500/80 shadow-sm" />

                <p className="mb-10 font-serif text-xl leading-relaxed font-light text-slate-100 md:text-3xl">
                  {quotes[currentIndex].quoteText}
                </p>
                <div>
                  <h4 className="text-lg font-bold">
                    {quotes[currentIndex].author}
                  </h4>
                  <p className="text-sm text-amber-400">
                    {quotes[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-red-950"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${i === currentIndex ? "w-6 bg-amber-500" : "bg-white/30"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-red-950"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
