import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { MapPin, Mail, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function KontakPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-slate-50 pt-32 pb-20 transition-colors duration-500 dark:bg-slate-950">
        {/* Background Pattern: Opacity disesuaikan untuk mode gelap agar tidak bertabrakan */}
        <div className="bg-pattern pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-15" />

        <Navbar />

        {/* HIASAN ELEGAN & SUPER RINGAN (Diperbesar radius blurnya menjadi 100px agar lebih halus) */}
        {/* <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-red-900/10 blur-[100px] dark:bg-red-900/20" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[100px]" /> */}

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="mb-12 border-b border-slate-300 pb-8 text-center transition-colors duration-500 md:text-left dark:border-white/10">
            <span className="text-sm font-bold tracking-wider text-amber-600 uppercase dark:text-amber-500">
              Hubungi Kami
            </span>
            <h1 className="mt-2 font-serif text-4xl font-bold text-red-900 transition-colors duration-500 md:text-5xl dark:text-red-400">
              Mari Berkolaborasi
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 transition-colors duration-500 md:mx-0 dark:text-slate-300">
              Pintu sekretariat kami selalu terbuka untuk diskusi, pergerakan,
              dan kolaborasi.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Kolom Kiri: Informasi Kontak */}
            <FadeInStagger className="flex flex-col justify-center space-y-6">
              {/* Card Alamat */}
              <FadeIn>
                {/* OPTIMASI MOBILE: flex-col pada layar kecil (sm), flex-row pada layar menengah ke atas */}
                <div className="group flex flex-col items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-red-200 hover:shadow-md sm:flex-row dark:border-white/10 dark:bg-slate-900/50 dark:backdrop-blur-sm dark:hover:border-red-900/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-900 transition-colors group-hover:bg-red-900 group-hover:text-white dark:bg-red-950/50 dark:text-red-400 dark:group-hover:bg-red-800">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 transition-colors duration-500 dark:text-white">
                      Marga Siswa (Sekretariat)
                    </h3>
                    {/* OPTIMASI ESTETIKA: Teks paragraf menggunakan slate-300 bukan white murni */}
                    <p className="mt-2 leading-relaxed text-slate-600 transition-colors duration-500 dark:text-slate-300">
                      Jl. Jend. A. Yani No.26
                      <br />
                      Sokanegara, Purwokerto Timur
                      <br />
                      Kabupaten Banyumas, Jawa Tengah 53115
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Card Email */}
              <FadeIn>
                <div className="group flex flex-col items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-red-200 hover:shadow-md sm:flex-row dark:border-white/10 dark:bg-slate-900/50 dark:backdrop-blur-sm dark:hover:border-red-900/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-900 transition-colors group-hover:bg-red-900 group-hover:text-white dark:bg-red-950/50 dark:text-red-400 dark:group-hover:bg-red-800">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 transition-colors duration-500 dark:text-white">
                      Email Resmi
                    </h3>
                    <p className="mt-2 text-slate-600 transition-colors duration-500 dark:text-slate-300">
                      Kirimkan surat permohonan audiensi, undangan, atau
                      penawaran kerja sama melalui email kami.
                    </p>
                    <a
                      href="mailto:pmkripurwokerto@gmail.com"
                      className="mt-3 inline-flex items-center gap-2 font-semibold text-amber-600 transition-colors hover:text-red-900 dark:text-amber-500 dark:hover:text-red-400"
                    >
                      pmkri.purwokerto@gmail.com <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Card Humas / CP */}
              <FadeIn>
                <div className="group flex flex-col items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-red-200 hover:shadow-md sm:flex-row dark:border-white/10 dark:bg-slate-900/50 dark:backdrop-blur-sm dark:hover:border-red-900/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-900 transition-colors group-hover:bg-red-900 group-hover:text-white dark:bg-red-950/50 dark:text-red-400 dark:group-hover:bg-red-800">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 transition-colors duration-500 dark:text-white">
                      Kontak
                    </h3>
                    <p className="mt-2 text-slate-600 transition-colors duration-500 dark:text-slate-300">
                      Butuh respons cepat? Hubungi Sekretaris kami via WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 font-semibold text-amber-600 transition-colors hover:text-red-900 dark:text-amber-500 dark:hover:text-red-400"
                    >
                      +62 812-3456-7890 <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </FadeInStagger>

            {/* Kolom Kanan: Google Maps */}
            <FadeInStagger className="h-full w-full">
              <FadeIn className="h-full w-full">
                {/* OPTIMASI MOBILE: Menggunakan tinggi spesifik 400px untuk HP, dan menyesuaikan hingga 600px di Desktop */}
                <div className="group relative h-[400px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-md transition-all duration-500 hover:shadow-xl lg:h-full lg:min-h-[600px] dark:border-white/10 dark:bg-slate-800">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.445422348309!2d109.23091889999999!3d-7.415854800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e5e6ca2a04b%3A0xdf3624885ae4bc78!2sPMKRI%20Cabang%20Purwokerto%20%22St%20Paulus%22!5e0!3m2!1sid!2sid!4v1775399459967!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    // OPTIMASI ESTETIKA: Filter abu-abu aktif dan menghilang perlahan (durasi 700ms) saat kursor diarahkan ke peta
                    className="absolute inset-0 h-full w-full border-0 contrast-125 grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                  {/* OPTIMASI DARK MODE: Overlay sangat tipis di atas peta agar cahaya peta tidak menyilaukan saat mode gelap, hilang saat kursor diarahkan */}
                  <div className="pointer-events-none absolute inset-0 bg-slate-900/10 transition-opacity duration-700 group-hover:opacity-0 dark:bg-slate-950/40" />
                </div>
              </FadeIn>
            </FadeInStagger>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
