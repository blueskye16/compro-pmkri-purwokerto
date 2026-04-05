import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";

export default function PageKontak() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32">
      <Navbar />
      <div className="container mx-auto max-w-3xl px-6">
        <div className="mb-12 border-b border-slate-300 pb-8">
          {/* Warna amber diubah menjadi 600 agar lebih terbaca di latar terang */}
          <span className="text-sm font-bold tracking-wider text-amber-600 uppercase">
            Kontak Kami
          </span>
          <h1 className="mt-2 font-serif text-4xl font-bold text-red-900 md:text-5xl">
            PMKRI Cab. Purwokerto
          </h1>
        </div>
      </div>

      <article className="prose prose-lg mb-14 max-w-none text-slate-700">

      </article>
      <Footer />
    </main>
  );
}
