import {
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import { routeItems } from "@/components/utils/routePath";

export const Footer = () => {
  const firstRouteList = [
    routeItems.sejarah,
    routeItems.visiMisi,
    { ...routeItems.pendidikan, label: "Pendidikan PMKRI" },
    // routeItems.pendidikan,
  ];

  const secondRouteList = [
    routeItems.galeri,
    routeItems.kontak,
    routeItems.pendaftaran,
  ];

  return (
    <footer className="border-t border-slate-900 bg-slate-950 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full font-serif text-xl font-bold text-white">
                <img src="/logo-pmkri-pwt.png" alt="Icon" />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                PMKRI Purwokerto
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Perhimpunan Mahasiswa Katolik Republik Indonesia Cabang Purwokerto
              <br />
              <span className="text-amber-300">"Sanctus Paulus".</span>
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="mb-6 font-serif font-bold text-white">Organisasi</h4>
            <ul className="space-y-3">
              {firstRouteList.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-amber-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="mb-6 font-serif font-bold text-white">Informasi</h4>
            <ul className="space-y-3">
              {secondRouteList.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-amber-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA / Newsletter (optional here)*/}
          {/* Social Icons Placeholder */}
          <div className="flex flex-col gap-2">
            <h4 className="mb-6 font-serif font-bold text-white">
              Tetap Terhubung
            </h4>
            <div className="flex gap-2">
              <a href="mailto:pmkri.purwokerto@gmail.com" target="_blank">
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors hover:bg-amber-500 hover:text-white">
                  <IoIosMail />
                </div>
              </a>
              <a href="https://wa.me/+6289536081019" target="_blank">
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors hover:bg-amber-500 hover:text-white">
                  <FaWhatsapp />
                </div>
              </a>
              <a
                href="https://www.instagram.com/pmkri.purwokerto?igsh=NDVtYnd0bTgyaTRz"
                target="_blank"
              >
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors hover:bg-amber-500 hover:text-white">
                  <FaInstagram />
                </div>
              </a>
              <a
                href="https://linkedin.com/company/pmkri-purwokerto"
                target="_blank"
              >
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors hover:bg-amber-500 hover:text-white">
                  <FaLinkedin />
                </div>
              </a>
              <a href="https://share.google/PVeXA4PWUOu502kpc" target="_blank">
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors hover:bg-amber-500 hover:text-slate-900">
                  <FaGoogle />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-8 md:flex-row">
          <div className="text-sm text-slate-600">
            <p>
              © {new Date().getFullYear()} DPC PMKRI Cabang Purwokerto. All
              rights reserved.
            </p>
          </div>
          <span className="group text-sm text-slate-500">
            <a
              href="https://github.com/blueskye16"
              className="flex items-center gap-2"
              target="_blank"
            >
              Dev by{" "}
              <FaGithub className="transition-colors group-hover:text-white" />
            </a>
          </span>
          {/* <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
