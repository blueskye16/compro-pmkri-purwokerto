"use client";
import { SanityHeroData } from "@/lib/sanity-types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = ({ data }: { data: SanityHeroData }) => {
  return (
    <section
      id="beranda"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          // src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          src={data.backgroundImageUrl}
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/70 to-red-950/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium tracking-wider text-amber-400 backdrop-blur-sm"
        >
          Pro Ecclesia et Patria
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-serif text-5xl leading-tight font-bold md:text-7xl"
        >
          {/* {data.title} */}
          Merajut <span className="text-amber-500 italic">Intelektualitas</span>
          <br />
          Membangun{" "}
          <span className="bg-linear-to-r from-red-400 to-amber-500 bg-clip-text text-transparent">
            Solidaritas
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-lg font-light text-slate-200 md:text-xl"
        >
          {data.slogan}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="flex w-full items-center justify-center gap-2 rounded-md bg-red-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-red-800 sm:w-auto">
            {data.primaryCtaText} <ArrowRight size={18} />
          </button>
          <button className="w-full rounded-md border border-white/30 bg-transparent px-8 py-4 font-medium text-white transition-colors hover:bg-white/10 sm:w-auto">
            {data.secondaryCtaText}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="flex h-12.5 w-7.5 justify-center rounded-full border-2 border-white/30 p-1">
          <div className="h-3 w-1.5 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
};
