import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
// Tambahkan import animasi
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export default function PagePendidikanKader() {
  return (
    <>
      <main className="relative min-h-screen bg-slate-50 pt-32 dark:bg-slate-950">
        <div className="bg-pattern absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-15" />
        <Navbar />
        <div className="container mx-auto max-w-3xl px-6">
          {/* Bungkus seluruh konten utama dengan FadeInStagger */}
          <FadeInStagger>
            {/* Header Halaman */}
            <FadeIn className="mb-12 border-b border-slate-300 pb-8">
              <span className="text-sm font-bold tracking-wider text-amber-600 uppercase">
                Pendidikan Kader
              </span>
              <h1 className="mt-2 font-serif text-4xl font-bold text-red-900 md:text-5xl dark:text-red-400">
                Tiga Benang Merah
              </h1>
            </FadeIn>

            {/* Konten Nilai */}
            <article className="prose prose-lg mb-14 max-w-none text-slate-700 dark:text-slate-300">
              <FadeIn>
                <p className="text-xl leading-relaxed font-light text-slate-600 dark:text-slate-400">
                  Dalam proses pendidikan dan pembinaan kader (calon anggota) di
                  PMKRI, setiap individu ditempa untuk menghayati identitas
                  perhimpunan. Identitas ini terangkum dalam landasan spiritual
                  dan moral yang diwajibkan bagi setiap kader, yang dikenal
                  sebagai{" "}
                  <strong className="text-slate-900 dark:text-slate-300">
                    Tiga Benang Merah PMKRI
                  </strong>
                  .
                </p>
              </FadeIn>

              <FadeIn>
                <h3 className="mt-8 font-serif text-2xl font-bold text-red-900 dark:text-red-400">
                  1. Kristianitas
                </h3>
                <p className="text-lg leading-relaxed font-light text-slate-600 dark:text-slate-400">
                  Kristianitas bukanlah sekadar identitas agama, melainkan
                  perwujudan nilai-nilai cinta kasih, keadilan, dan pengorbanan.
                  Kader PMKRI dituntut untuk memiliki keberpihakan kepada kaum
                  marginal dan tertindas (
                  <em className="font-serif text-slate-800 dark:text-slate-300">
                    preferential option for the poor
                  </em>
                  ), serta menghayati spiritualitas Katolik dalam setiap gerak
                  perubahan sosialnya.
                </p>
              </FadeIn>

              <FadeIn>
                <h3 className="mt-8 font-serif text-2xl font-bold text-red-900 dark:text-red-400">
                  2. Fraternitas
                </h3>
                <p className="text-lg leading-relaxed font-light text-slate-600 dark:text-slate-400">
                  Fraternitas adalah semangat persaudaraan sejati. Dalam PMKRI,
                  nilai ini melampaui batas-batas suku, ras, dan sekat
                  primordial lainnya. Kader dididik untuk membangun solidaritas
                  yang kokoh, baik untuk merekatkan rasa kekeluargaan di
                  internal organisasi maupun saat terjun membangun bangsa di
                  tengah masyarakat Indonesia yang majemuk.
                </p>
              </FadeIn>

              <FadeIn>
                <h3 className="mt-8 font-serif text-2xl font-bold text-red-900 dark:text-red-400">
                  3. Intelektualitas
                </h3>
                <p className="text-lg leading-relaxed font-light text-slate-600 dark:text-slate-400">
                  Kader PMKRI harus memiliki ketajaman analisis, wawasan yang
                  luas, dan kecerdasan yang membumi. Intelektualitas di sini
                  bukanlah kepintaran untuk menyombongkan diri, melainkan ilmu
                  pengetahuan yang dijiwai oleh moral dan agama untuk diabdikan
                  sepenuhnya bagi kepentingan kemanusiaan (
                  <em className="font-serif text-slate-800 dark:text-slate-300">
                    Religio Omnium Scientiarum Anima
                  </em>
                  ).
                </p>
              </FadeIn>

              <FadeIn>
                {/* Kotak Kesimpulan */}
                <div className="mt-12 rounded-xl border border-red-200 bg-red-100 p-6 shadow-sm">
                  <p className="text-center font-serif text-xl font-medium text-red-900 italic">
                    "Ketiga nilai ini tidak boleh berdiri sendiri. Ketiganya
                    harus terjalin menjadi satu kesatuan utuh dalam mencetak
                    kader pemimpin yang siap melayani Gereja dan Tanah Air (Pro
                    Ecclesia et Patria)."
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
