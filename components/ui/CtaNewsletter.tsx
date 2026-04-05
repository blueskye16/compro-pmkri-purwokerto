export default function CtaNewsletter() {
  return (
    <div>
      <h4 className="mb-6 font-serif font-bold text-white">Tetap Terhubung</h4>
      <p className="mb-4 text-sm text-slate-400">
        Dapatkan update terbaru seputar kegiatan dan opini kader.
      </p>
      <form className="flex">
        <input
          type="email"
          placeholder="Email anda..."
          className="w-full rounded-l-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-r-md bg-red-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-800"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};
