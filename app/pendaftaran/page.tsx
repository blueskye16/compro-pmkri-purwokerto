import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Users, BookOpen } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { routeItems } from "@/components/utils/routePath";

export default function PageBergabung() {
  return (
    <>
      <main className="relative min-h-screen bg-slate-50 pt-32 dark:bg-slate-950">
        <div className="bg-pattern pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-15" />
        <Navbar />
        <div className="container mx-auto mb-14 px-6 md:px-12">
          <FadeInStagger>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* KOLOM KIRI: Narasi dan Call to Action */}
              <div className="flex flex-col justify-center">
                <FadeIn className="mb-6">
                  <span className="text-sm font-bold tracking-wider text-amber-600 uppercase">
                    Panggilan Pergerakan
                  </span>
                  <h1 className="mt-2 font-serif text-4xl leading-tight font-bold text-red-900 md:text-5xl lg:text-6xl dark:text-red-400">
                    Keluar dari <br />
                    <span className="text-slate-800 italic dark:text-slate-300">
                      Zona Nyaman.
                    </span>
                  </h1>
                </FadeIn>

                <FadeIn>
                  <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                    Menjadi mahasiswa Katolik bukan hanya tentang nilai akademik
                    di ruang kelas. Ini adalah panggilan untuk turun tangan,
                    melayani kaum marginal, dan memimpin perubahan. PMKRI Cabang
                    Purwokerto memanggilmu untuk ditempa menjadi pemimpin yang
                    berkarakter.
                  </p>
                </FadeIn>

                {/* Poin-poin Nilai (Tiga Benang Merah Praktis) */}
                <div className="mb-10 space-y-6">
                  <FadeIn className="group">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 transform items-center justify-center rounded-lg bg-red-100 text-red-900 transition-all group-hover:bg-red-500 group-hover:font-extrabold group-hover:text-red-200">
                        <Flame
                          className="transition-all duration-300 group-hover:stroke-[3px]"
                          size={20}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-slate-300">
                          Spiritualitas Aksi
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                          Menghidupi iman Katolik lewat aksi nyata dan pembelaan
                          terhadap kaum tertindas.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn>
                    <div className="group flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-amber-100">
                        <Users
                          className="transition-all duration-200 group-hover:stroke-[3px]"
                          size={20}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-slate-300">
                          Jejaring Persaudaraan Sejati
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                          Bergabung dengan jaringan alumni dan kader PMKRI yang
                          tersebar di seluruh Indonesia.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn>
                    <div className="group flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-slate-700 group-hover:bg-slate-500 group-hover:text-slate-200">
                        <BookOpen
                          className="transition-all duration-300 group-hover:stroke-[3px]"
                          size={20}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-slate-300">
                          Penajaman Intelektual
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                          Ruang diskusi, kajian strategis, dan pelatihan
                          kepemimpinan yang tidak kamu dapatkan di kampus.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Tombol Aksi */}
                <FadeIn>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    {/* Ganti URL href di bawah ini dengan link Google Form atau WhatsApp pendaftaran */}
                    <a
                      href="https://www.instagram.com/pmkri.purwokerto?igsh=NDVtYnd0bTgyaTRz"
                      // href="https://forms.gle/contoh-link-pendaftaran"
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex h-14 items-center justify-center gap-2 rounded-md bg-red-900 px-8 text-base font-bold text-white transition-all hover:bg-red-800 hover:shadow-lg"
                    >
                      Daftar MPAB Sekarang{" "}
                      <ArrowRight
                        className="transform transition-all group-hover:translate-x-1.5"
                        size={18}
                      />
                    </a>
                    <a
                      href={routeItems.waMalona.href}
                      target="_blank"
                      className="group inline-flex h-14 items-center justify-center gap-2 rounded-md border-2 border-slate-200 bg-transparent px-8 text-base font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-slate-800"
                    >
                      Tanya Narahubung{" "}
                      <FaWhatsapp className="h-5 w-5" />
                    </a>
                  </div>
                </FadeIn>
              </div>

              {/* KOLOM KANAN: Ruang Poster */}
              <div className="relative mx-auto w-full max-w-md lg:max-w-full">
                <FadeIn>
                  {/* Aspek Rasio 4/5 adalah standar umum poster Instagram. Ubah jika postermu berformat A4 (aspect-[21/29]) */}
                  <div className="group relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-2xl">
                    {/* Ganti src ini dengan path postermu di folder public (misal: "/poster-mpab.jpg") */}
                    <Image
                      src="/assets/oprec.jpg"
                      alt="Poster Masa Penerimaan Anggota Baru PMKRI Purwokerto"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />

                    {/* Overlay gradien tipis agar batas poster menyatu dengan background */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-red-950/20 to-transparent" />
                  </div>

                  {/* Elemen Dekoratif */}
                  <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-amber-500/20 blur-2xl" />
                  <div className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-full bg-red-900/10 blur-2xl" />
                </FadeIn>
              </div>
            </div>
          </FadeInStagger>
        </div>
      </main>
      <Footer />
    </>
  );
}
