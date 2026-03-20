import { MapPin, Mail, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-100 h-100 bg-red-900/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="grid md:grid-cols-2 p-10 md:p-16 relative z-10 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Siap Berproses <br />
                Bersama Kami?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Jadilah bagian dari generasi pemimpin yang cerdas, bermoral, dan
                peduli pada realitas sosial. Hubungi kami untuk informasi
                pendaftaran atau kemitraan lembaga.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-md transition-colors text-center">
                  Daftar Sekarang
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold rounded-md transition-colors text-center">
                  Hubungi Pengurus
                </button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-amber-500" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">
                    Sekretariat Margasiswa
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Jl. A. Yani No.20, Karangjengkol, Sokanegara, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-amber-500" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-slate-400 text-sm">
                    pmkri.purwokerto@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-amber-500" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">
                    Telepon / WhatsApp
                  </h4>
                  <p className="text-slate-400 text-sm">
                    +62 895-3608-1019 (Humas)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
