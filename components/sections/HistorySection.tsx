import Link from "next/link";
import Image from "next/image";
import { SanityHistoryData } from "@/lib/sanity-types";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { PortableText } from "next-sanity";
import { routeItems } from "@/components/utils/routePath";

export const HistorySection = ({ data }: { data: SanityHistoryData }) => {
  return (
    <section
      id="sejarah"
      className="bg-slate-50 py-24 transition-colors duration-500 dark:bg-linear-to-b dark:from-red-950/90 dark:via-slate-950 dark:to-slate-950"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <FadeIn>
            <div className="relative">
              {/* HIASAN 1: Kotak di belakang gambar. 
                  Di mode terang warnanya kuning solid. 
                  Di mode gelap kita gunakan opacity rendah (amber-900/30) agar menyatu dengan latar gelap */}
              <div className="absolute -inset-4 -z-10 rotate-3 transform rounded-lg bg-amber-100 transition-colors duration-500 dark:bg-amber-900/30" />

              <Image
                src={data.imageUrl}
                alt="Sejarah"
                width={1000}
                height={1000}
                // FOTO: Tambahkan dark:opacity-90 agar foto yang terlalu terang tidak menyilaukan mata di dark mode
                className="h-125 w-full rounded-lg border border-slate-300 object-cover shadow-xl grayscale-75 transition-all duration-500 dark:border-white/10 dark:opacity-90 object-[25%_75%]"
              />
              {/* <img
                src={data.imageUrl}
                alt="Sejarah"
                // FOTO: Tambahkan dark:opacity-90 agar foto yang terlalu terang tidak menyilaukan mata di dark mode
                className="h-125 w-full rounded-lg border border-slate-300 object-cover shadow-xl transition-all duration-500 dark:border-white/10 dark:opacity-90"
              /> */}

              {/* KOTAK TANGGAL: Di mode gelap, kita pakai efek 'kaca' (backdrop-blur) dengan merah semi-transparan */}
              <div className="absolute -right-6 -bottom-6 rounded-lg bg-red-900 p-6 text-white shadow-lg transition-all duration-500 dark:border dark:border-red-900/50 dark:bg-red-950/80 dark:backdrop-blur-md">
                <span className="block font-serif text-4xl font-bold">
                  16 Juni 1963
                </span>
                <span className="text-sm font-medium tracking-wider text-amber-200 uppercase">
                  Awal Pergerakan
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col items-start">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-amber-500" />
                {/* SUBTITLE: Merah pekat di terang, Merah menyala di gelap */}
                <span className="text-sm font-bold tracking-wider text-red-900 uppercase transition-colors dark:text-red-400">
                  Sejarah Singkat
                </span>
              </div>

              {/* JUDUL BESAR: Hitam di terang, Putih di gelap */}
              <h2 className="mb-6 font-serif text-3xl leading-snug font-bold text-slate-900 transition-colors md:text-4xl dark:text-white">
                {data.heading}
              </h2>

              {/* TEKS PARAGRAF: Abu-abu gelap di terang, abu-abu terang di gelap. 
                  Pewarnaan ini diturunkan langsung ke PortableText */}
              <div className="space-y-4 text-lg leading-relaxed text-slate-600 transition-colors dark:text-slate-300">
                <PortableText value={data.paragraphs} />
              </div>

              {/* LINK CTA: Perbaikan BUG HTML NESTING. Button dibuang, class dipindah ke Link */}
              <Link
                href={routeItems.sejarah.href}
                className="group mt-8 flex cursor-pointer items-center gap-2 font-semibold text-red-900 transition-colors hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                Baca Selengkapnya
                <span className="transform transition-transform group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
