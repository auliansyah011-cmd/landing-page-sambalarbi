export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5efe5] text-[#241814]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="font-display text-2xl font-black tracking-[-0.06em] text-[#c72c18]">
          SAMBEL <span className="text-[#241814]">ARBI</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a className="transition-colors hover:text-[#c72c18]" href="#cerita">Cerita kami</a>
          <a className="transition-colors hover:text-[#c72c18]" href="#varian">Varian</a>
          <a className="transition-colors hover:text-[#c72c18]" href="#kontak">Kontak</a>
        </div>
        <a href="#pesan" className="rounded-full bg-[#c72c18] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5">
          Pesan sekarang <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section id="top" className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-20">
        <div className="relative z-10 animate-rise">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c72c18]"><span className="h-px w-10 bg-[#c72c18]" /> Sambal rumahan, rasa juara</p>
          <h1 className="font-display max-w-3xl text-[clamp(4rem,9vw,8.5rem)] font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#241814]">Pedasnya<br /><span className="text-[#c72c18]">bikin</span><br />pulang.</h1>
          <p className="mt-8 max-w-md text-lg leading-8 text-[#6d5549]">Sambal cabai pilihan yang diulek dengan resep keluarga. Satu sendok, nasi hangat jadi alasan untuk nambah lagi.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a id="pesan" href="https://wa.me/6281234567890?text=Halo%20Sambel%20Arbi%2C%20saya%20mau%20pesan" className="rounded-full bg-[#241814] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#c72c18]">Pesan via WhatsApp <span aria-hidden="true">↗</span></a>
            <a href="#varian" className="group flex items-center gap-3 px-3 py-3 text-sm font-bold"><span className="grid h-9 w-9 place-items-center rounded-full border border-[#cbb9a8] transition-colors group-hover:border-[#c72c18] group-hover:text-[#c72c18]">↓</span> Lihat varian</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] animate-float">
          <div className="absolute -right-8 top-8 h-64 w-64 rounded-full bg-[#e9b84b] blur-3xl opacity-60" />
          <div className="relative aspect-square overflow-hidden rounded-[45%_55%_48%_52%/44%_43%_57%_56%] bg-[#d83a1f] shadow-[18px_24px_0_#241814]">
            <div className="absolute inset-8 rounded-full border border-white/20" />
            <div className="absolute left-[14%] top-[18%] h-16 w-16 rotate-45 rounded-[65%_35%_55%_45%] bg-[#e94e29]" />
            <div className="absolute right-[17%] top-[25%] h-12 w-24 -rotate-12 rounded-full bg-[#b62216]" />
            <div className="absolute bottom-[24%] left-[22%] h-20 w-32 rotate-12 rounded-[50%_50%_40%_60%] bg-[#ed5c28]" />
            <div className="absolute bottom-[14%] right-[18%] h-14 w-14 -rotate-45 rounded-[60%_40%_55%_45%] bg-[#ad2018]" />
            <div className="absolute inset-0 grid place-items-center text-center text-white"><div><p className="font-display text-6xl font-black uppercase leading-[0.8] tracking-[-0.08em]">Arbi<br /><span className="text-[#f4c64f]">Asli</span></p><p className="mt-5 text-[10px] font-bold uppercase tracking-[0.35em]">Ulek • Tuang • Lahap</p></div></div>
          </div>
          <div className="absolute -bottom-4 -left-5 grid h-24 w-24 -rotate-12 place-items-center rounded-full border-2 border-[#241814] bg-[#f4c64f] text-center text-[10px] font-black uppercase leading-3 tracking-wider">100%<br />cabai<br />segar</div>
        </div>
      </section>

      <section id="cerita" className="border-y border-[#d8c9bb] bg-[#eadfd2]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c72c18]">01 / Dari dapur Arbi</p>
          <div><h2 className="font-display max-w-3xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl">Bukan sekadar pedas. Ini rasa yang <span className="text-[#c72c18]">dirindukan.</span></h2><p className="mt-7 max-w-xl text-base leading-7 text-[#6d5549]">Kami percaya sambal terbaik bukan yang paling menyiksa, tapi yang membuat kamu diam sebentar karena enak. Dibuat dalam batch kecil, pakai bahan yang kami pilih sendiri.</p></div>
        </div>
      </section>

      <section id="varian" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="mb-12 flex items-end justify-between"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c72c18]">02 / Pilih pedasmu</p><h2 className="font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl">Tiga rasa.<br />Satu obsesi.</h2></div><span className="hidden text-5xl text-[#c72c18] sm:block">✳</span></div><div className="grid gap-4 md:grid-cols-3"><article className="group bg-[#c72c18] p-7 text-white transition-transform hover:-translate-y-2"><p className="text-xs font-bold uppercase tracking-widest text-[#ffc85c]">01 / Favorite</p><div className="my-16 text-center text-7xl transition-transform group-hover:scale-110">🌶</div><h3 className="font-display text-3xl font-black uppercase tracking-[-0.04em]">Sambal Original</h3><p className="mt-2 text-sm text-white/75">Pedas gurih yang selalu pas.</p><div className="mt-8 flex justify-between border-t border-white/20 pt-4 text-sm font-bold"><span>150 gr</span><span>Rp 35.000</span></div></article><article className="group bg-[#e9b84b] p-7 text-[#241814] transition-transform hover:-translate-y-2"><p className="text-xs font-bold uppercase tracking-widest text-[#8b321d]">02 / Smoky</p><div className="my-16 text-center text-7xl transition-transform group-hover:scale-110">🔥</div><h3 className="font-display text-3xl font-black uppercase tracking-[-0.04em]">Sambal Asap</h3><p className="mt-2 text-sm text-[#6d5549]">Wangi bakaran, pedasnya dalam.</p><div className="mt-8 flex justify-between border-t border-black/15 pt-4 text-sm font-bold"><span>150 gr</span><span>Rp 38.000</span></div></article><article className="group bg-[#241814] p-7 text-white transition-transform hover:-translate-y-2"><p className="text-xs font-bold uppercase tracking-widest text-[#e9b84b]">03 / Bold</p><div className="my-16 text-center text-7xl transition-transform group-hover:scale-110">🥵</div><h3 className="font-display text-3xl font-black uppercase tracking-[-0.04em]">Sambal Gila</h3><p className="mt-2 text-sm text-white/60">Untuk yang lahir tanpa takut.</p><div className="mt-8 flex justify-between border-t border-white/15 pt-4 text-sm font-bold"><span>150 gr</span><span>Rp 40.000</span></div></article></div></section>

      <footer id="kontak" className="bg-[#241814] px-6 py-12 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="font-display text-4xl font-black uppercase tracking-[-0.06em] text-[#e9b84b]">Sambel Arbi</p><p className="mt-3 text-sm text-white/55">Dibuat dengan cabai, cinta, dan nasi hangat.</p></div><div className="text-left sm:text-right"><p className="text-xs uppercase tracking-[0.2em] text-white/45">Order & kolaborasi</p><a href="https://wa.me/6281234567890" className="mt-2 block text-lg font-bold hover:text-[#e9b84b]">+62 812 3456 7890 ↗</a></div></div></footer>
    </main>
  );
}
