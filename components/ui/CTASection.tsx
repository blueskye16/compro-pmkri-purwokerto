import { MapPin, Mail, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section
      id="kontak"
      className="m-6 bg-slate-900 rounded-2xl shadow-2xl p-6"
    >
      {/* CTA Section */}
      <div className="container mx-auto">
        <h2 className="text-2xl font-serif font-bold text-white mb-6">
          Siap Berproses <br />
          Bersama Kami?
        </h2>
        <p className="text-slate-300 mb-8">
          Jadilah bagian dari generasi pemimpin yang cerdas, bermoral, dan
          peduli pada realitas sosial. Hubungi kami untuk informasi pendaftaran
          atau kemitraan lembaga.{" "}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-md transition-colors text-center">
            Daftar Sekarang
          </button>
          <button className="px-8 py-2 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold rounded-md transition-colors text-center">
            Hubungi Pengurus
          </button>
        </div>
      </div>
      {/* Contact Info */}
      <div className="bg-white/5 p-8 rounded-xl border border-white/10 flex flex-col gap-6"></div>
    </section>
  );
};
