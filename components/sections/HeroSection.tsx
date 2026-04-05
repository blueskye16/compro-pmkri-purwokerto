"use client";
import Link from "next/link";
import { SanityHeroData } from "@/lib/sanity-types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { routeItems } from "@/components/utils/routePath";

export const HeroSection = ({ data }: { data: SanityHeroData }) => {
  return (
    <section
      id="beranda"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden py-20"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.backgroundImageUrl}
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/70 to-red-950/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white sm:px-6 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wider text-amber-400 backdrop-blur-sm sm:text-sm"
        >
          Pro Ecclesia et Patria
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-serif text-4xl leading-tight font-bold wrap-break-word sm:text-5xl md:text-7xl"
        >
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
          className="mx-auto mb-10 max-w-2xl text-base font-light text-slate-200 sm:text-lg md:text-xl"
        >
          {data.slogan}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href={routeItems.pendaftaran.href}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-red-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-800 sm:w-auto sm:px-8 sm:py-4"
          >
            {data.primaryCtaText} <ArrowRight size={18} />
          </Link>
          <Link
            href={"#sejarah"}
            className="w-full cursor-pointer rounded-md border border-white/30 bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4"
          >
            {data.secondaryCtaText}
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-white/50 min-[600px]:block"
      >
        <div className="flex h-12.5 w-7.5 justify-center rounded-full border-2 border-white/30 p-1">
          <div className="h-3 w-1.5 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
};
