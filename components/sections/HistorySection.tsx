"use client"
import { SanityHistoryData } from "@/lib/sanity-types";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export const HistorySection = ({ data }: { data: SanityHistoryData }) => {
  return (
    <section id="sejarah" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-100 rounded-lg transform rotate-3 -z-10" />
              <img
                src={data.imageUrl}
                alt="Sejarah"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-900 text-white p-6 rounded-lg shadow-lg">
                <span className="block text-4xl font-serif font-bold">
                  1947
                </span>
                <span className="text-sm font-medium text-amber-200 uppercase tracking-wider">
                  Awal Pergerakan
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-amber-500" />
                <span className="text-red-900 font-bold tracking-wider uppercase text-sm">
                  Sejarah Singkat
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-snug">
                {data.heading}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                {data.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <button className="mt-8 text-red-900 font-semibold flex items-center gap-2 hover:text-red-700 transition-colors group">
                Baca Selengkapnya
                <span className="transform group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
