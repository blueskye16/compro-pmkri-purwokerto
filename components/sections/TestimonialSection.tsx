"use client";
import { SanityQuoteData } from "@/lib/sanity-types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "../ui/FadeIn";

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
    <section className="py-24 bg-red-950 text-white overflow-hidden relative">
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='#ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center mb-16">
            <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4">
              Kutipan Alumni & Senior
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              Suara Pergerakan
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center"
            >
              <div className="text-6xl text-amber-500/30 font-serif leading-none mb-6">
                "
              </div>
              <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-10 text-slate-100">
                {quotes[currentIndex].quoteText}
              </p>
              <div>
                <h4 className="font-bold text-lg">
                  {quotes[currentIndex].author}
                </h4>
                <p className="text-amber-400 text-sm">
                  {quotes[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-red-950 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? "bg-amber-500 w-6" : "bg-white/30"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-red-950 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
