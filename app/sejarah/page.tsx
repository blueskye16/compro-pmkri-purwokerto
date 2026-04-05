import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
// Tambahkan import animasi
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export default function PageSejarah() {
  return (
    <>
      <main className="relative min-h-screen bg-slate-50 pt-32 dark:bg-slate-950">
        <div className="bg-pattern pointer-events-none absolute inset-0 dark:opacity-15 opacity-0 transition-opacity duration-500" />

        <Navbar />
        <div className="container z-10 mx-auto max-w-3xl px-6">
          {/* Bungkus seluruh konten utama dengan FadeInStagger */}
          <FadeInStagger>
            {/* <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-amber-600 transition-colors hover:text-amber-500"
          >
            <FaArrowLeft size={20} />
            <span>Kembali ke Beranda</span>
          </Link> */}
            {/* Header Halaman */}
            <FadeIn className="mb-12 border-b border-slate-300 pb-8">
              <span className="text-sm font-bold tracking-wider text-amber-600 uppercase">
                Jejak Langkah
              </span>
              <h1 className="mt-2 font-serif text-4xl font-bold text-red-900 md:text-5xl dark:text-red-400">
                Sejarah PMKRI
              </h1>
            </FadeIn>

            {/* Konten Sejarah */}
            <article className="prose prose-lg mb-14 max-w-none text-slate-700 dark:text-slate-300">
              <FadeIn>
                <p className="text-xl leading-relaxed font-light text-slate-600 dark:text-slate-400">
                  Perhimpunan Mahasiswa Katolik Republik Indonesia (PMKRI) lahir
                  dari fusi antara Federasi Katholieke Studenten Vereniging
                  (KSV) dan PMKRI Yogyakarta pada 11 Juni 1950. Namun, hari
                  lahirnya secara historis ditetapkan pada{" "}
                  <strong className="text-slate-900 dark:text-slate-300">
                    25 Mei 1947
                  </strong>
                  .
                </p>
              </FadeIn>

              <FadeIn>
                <h3 className="mt-8 font-serif text-2xl font-bold text-red-900 dark:text-red-400">
                  Lahirnya Cabang Purwokerto
                </h3>
                <p className="text-lg leading-relaxed font-light text-slate-600 dark:text-slate-400">
                  Di tengah dinamika pergerakan mahasiswa secara nasional, PMKRI
                  terus melebarkan sayapnya untuk menjadi wadah pembinaan
                  mahasiswa Katolik di berbagai daerah.{" "}
                  <strong className="text-slate-900 dark:text-slate-300">
                    PMKRI Cabang Purwokerto "Santo Paulus"
                  </strong>{" "}
                  secara resmi didirikan pada tanggal{" "}
                  <strong className="text-slate-900 dark:text-slate-300">
                    16 Juni 1963
                  </strong>
                  .
                </p>
              </FadeIn>

              <FadeIn>
                <h3 className="mt-8 font-serif text-2xl font-bold text-red-900 dark:text-red-400">
                  Dinamika & Pergerakan Bangsa
                </h3>
                <p className="text-lg leading-relaxed font-light text-black dark:text-slate-400">
                  Sepanjang sejarahnya, PMKRI tidak pernah lepas dari urat nadi
                  pergerakan bangsa Indonesia:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-red-900 dark:marker:text-red-300 dark:text-slate-400">
                  <li>
                    <strong className="text-slate-900 dark:text-slate-300">1965-1969:</strong>{" "}
                    Menjadi salah satu pelopor berdirinya Kesatuan Aksi
                    Mahasiswa Indonesia (KAMI) yang melahirkan Tiga Tuntutan
                    Rakyat (Tritura).
                  </li>
                  <li>
                    <strong className="text-slate-900 dark:text-slate-300">1972:</strong> Turut
                    membidani lahirnya forum komunikasi Kelompok Cipayung
                    bersama HMI, GMKI, GMNI, dan PMII sebagai kekuatan kontrol
                    sosial.
                  </li>
                  <li>
                    <strong className="text-slate-900 dark:text-slate-300">1998:</strong> Terlibat
                    aktif secara nasional dalam menyuarakan amanat penderitaan
                    rakyat pada era Gerakan Reformasi.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn>
                <div className="mt-14 rounded-xl border border-red-200 bg-red-100 p-6 shadow-sm">
                  <p className="text-center font-serif text-xl font-medium text-red-900 italic">
                    "Religio Omnium Scientiarum Anima. Pro Ecclesia et Patria!"
                  </p>
                </div>
              </FadeIn>
            </article>
          </FadeInStagger>
        </div>
      </main>
      <Footer />
    </>
  );
}
