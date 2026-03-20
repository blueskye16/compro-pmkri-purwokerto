"use client"
import { SanityHeroData } from "@/lib/sanity-types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = ({ data }: { data: SanityHeroData }) => {
  return (
    <section
      id="beranda"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          // src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          src={data.backgroundImageUrl}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/70 to-red-950/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-amber-400 text-sm font-medium tracking-wider mb-6"
        >
          Pro Ecclesia et Patria
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
        >
          {/* {data.title} */}
          Merajut <span className="text-amber-500 italic">Intelektualitas</span>
          <br />
          Membangun{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-amber-500">
            Solidaritas
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light"
        >
          {data.slogan}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-red-900 hover:bg-red-800 text-white rounded-md font-semibold transition-colors flex items-center justify-center gap-2">
            {data.primaryCtaText} <ArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-md font-medium transition-colors">
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
        <div className="w-7.5 h-12.5 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
