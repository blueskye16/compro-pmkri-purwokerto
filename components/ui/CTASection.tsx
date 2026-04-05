import { MapPin, Mail, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section
      id="kontak"
      className="m-6 flex flex-col gap-4 rounded-2xl bg-slate-900 p-6 shadow-2xl sm:flex-row"
    >
      {/* CTA Section */}
      <div className="container mx-auto">
        <h2 className="mb-6 font-serif text-2xl font-bold text-white">
          Siap Berproses <br />
          Bersama Kami?
        </h2>
        <p className="mb-8 text-slate-300">
          Jadilah bagian dari generasi pemimpin yang cerdas, bermoral, dan
          peduli pada realitas sosial. Hubungi kami untuk informasi pendaftaran
          atau kemitraan lembaga.{" "}
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button className="rounded-md bg-amber-500 px-8 py-2 text-center font-bold text-slate-900 transition-colors hover:bg-amber-400">
            Daftar Sekarang
          </button>
          <button className="rounded-md border border-white/20 bg-transparent px-8 py-2 text-center font-semibold text-white transition-colors hover:bg-white/10">
            Hubungi Pengurus
          </button>
        </div>
      </div>
      {/* Contact Info */}
      <div className="flex gap-6 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex flex-col items-start gap-4">
          {/* Secretariat */}
          <div className="flex gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
              <MapPin className="text-amber-500" size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="mb-1 font-bold text-white">
                Sekretariat Margasiswa
              </h4>
              <p className="text-sm text-slate-400">
                Jl. A. Yani No.20, Karangjengkol, Sokanegara, Kec. Purwokerto
                Timur, Kab. Banyumas, Jawa Tengah.
              </p>
            </div>
          </div>
          {/* Email */}
          <div className="flex gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Mail className="text-amber-500" size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="mb-1 font-bold text-white">Email</h4>
              <p className="text-sm break-all text-slate-400">
                pmkri.purwokerto@gmail.com
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Phone className="text-amber-500" size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="mb-1 font-bold text-white">Telepon / Whatsapp</h4>
              <p className="text-sm break-all text-slate-400">
                +62 895-3608-1019 (Humas)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
