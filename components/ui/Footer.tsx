import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
                <img src="/logo-pmkri-pwt.png" alt="Icon" />
              </div>
              <span className="font-serif font-bold text-xl text-white">
                PMKRI Purwokerto
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Perhimpunan Mahasiswa Katolik Republik Indonesia Cabang Purwokerto
              "Sanctus Paulus".
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-500 hover:text-slate-900 flex items-center justify-center text-white/50 transition-colors cursor-pointer"
                >
                  <span className="sr-only">Social {i}</span>
                  <div
                    className="w-4 h-4 bg-current"
                    style={{ mask: "url(#)", WebkitMask: "url(#)" }}
                  />{" "}
                  {/* Icon shape */}
                </div>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 font-serif">Organisasi</h4>
            <ul className="space-y-3">
              {[
                "Tentang Kami",
                "Sejarah",
                "Visi & Misi",
                "Struktur Pengurus",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 font-serif">Informasi</h4>
            <ul className="space-y-3">
              {[
                "Kegiatan Terbaru",
                "Galeri",
                "Opini Kader",
                "Pendaftaran MPAB",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-500 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA / Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 font-serif">
              Tetap Terhubung
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Dapatkan update terbaru seputar kegiatan dan opini kader.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email anda..."
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 w-full text-white text-sm focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded-r-md text-sm font-semibold transition-colors"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-sm">
            <p>
              © {new Date().getFullYear()} PMKRI Cabang Purwokerto. All rights
              reserved.
            </p>
            <p className="flex gap-2">
              Develop by
              <a href="http://github.com/blueskye16" target="_blank" className="flex items-center gap-1 hover:text-blue-500 hover:font-bold">
                <FaGithub />
                BlueSkye
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
