"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const products = [
  {
    id: "original",
    name: "Sambal Original",
    description: "Pedas gurih yang selalu pas.",
    price: 35000,
    label: "01 / Favorite",
    emoji: "🌶",
    cardClass: "bg-[#c72c18] text-white",
    labelClass: "text-[#ffc85c]",
    descriptionClass: "text-white/75",
    borderClass: "border-white/20",
  },
  {
    id: "asap",
    name: "Sambal Asap",
    description: "Wangi bakaran, pedasnya dalam.",
    price: 38000,
    label: "02 / Smoky",
    emoji: "🔥",
    cardClass: "bg-[#e9b84b] text-[#241814]",
    labelClass: "text-[#8b321d]",
    descriptionClass: "text-[#6d5549]",
    borderClass: "border-black/15",
  },
  {
    id: "gila",
    name: "Sambal Gila",
    description: "Untuk yang lahir tanpa takut.",
    price: 40000,
    label: "03 / Bold",
    emoji: "🥵",
    cardClass: "bg-[#241814] text-white",
    labelClass: "text-[#e9b84b]",
    descriptionClass: "text-white/60",
    borderClass: "border-white/15",
  },
] as const;

const formatRupiah = (amount: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function Home() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const checkoutDialogRef = useRef<HTMLDialogElement>(null);
  const totalItems = Object.values(quantities).reduce(
    (total, quantity) => total + quantity,
    0,
  );
  const totalPrice = products.reduce(
    (total, product) => total + product.price * (quantities[product.id] ?? 0),
    0,
  );

  useEffect(() => {
    const dialog = checkoutDialogRef.current;

    if (!dialog) {
      return;
    }

    if (isCheckoutOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isCheckoutOpen && dialog.open) {
      dialog.close();
    }
  }, [isCheckoutOpen]);

  function updateQuantity(productId: string, change: number) {
    setQuantities((current) => {
      const nextQuantity = Math.max(0, (current[productId] ?? 0) + change);
      return { ...current, [productId]: nextQuantity };
    });
  }

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (totalItems === 0) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const expedition = formData.get("expedition");
    const orderLines = products
      .filter((product) => (quantities[product.id] ?? 0) > 0)
      .map(
        (product) =>
          `- ${product.name} (${quantities[product.id]} x ${formatRupiah(product.price)})`,
      );
    const message = [
      "Halo Sambel Arbi, saya mau pesan:",
      ...orderLines,
      `Total: ${totalItems} produk`,
      `Subtotal: ${formatRupiah(totalPrice)}`,
      "Metode pembayaran: Transfer bank",
      `Ekspedisi pilihan: ${expedition}`,
      "Ongkir: dikonfirmasi kemudian",
      "Detail rekening transfer akan dikirim setelah pesanan dikonfirmasi",
      "",
      `Nama: ${formData.get("name")}`,
      `No. WhatsApp: ${formData.get("phone")}`,
      `Alamat pengiriman: ${formData.get("address")}`,
      `Kota/Kabupaten: ${formData.get("city")}`,
      `Kode pos: ${formData.get("postalCode")}`,
    ].join("\n");

    window.location.assign(
      `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5efe5] text-[#241814]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="#top"
          className="font-display text-2xl font-black tracking-[-0.06em] text-[#c72c18]"
        >
          SAMBEL <span className="text-[#241814]">ARBI</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a className="transition-colors hover:text-[#c72c18]" href="#cerita">
            Cerita kami
          </a>
          <a className="transition-colors hover:text-[#c72c18]" href="#varian">
            Varian
          </a>
          <a className="transition-colors hover:text-[#c72c18]" href="#kontak">
            Kontak
          </a>
        </div>
        <button
          type="button"
          onClick={() => setIsCheckoutOpen(true)}
          className="rounded-full bg-[#c72c18] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5"
        >
          Checkout <span aria-hidden="true">↗</span>
        </button>
      </nav>

      <section
        id="top"
        className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-20"
      >
        <div className="relative z-10 animate-rise">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c72c18]">
            <span className="h-px w-10 bg-[#c72c18]" /> Sambal rumahan, rasa
            juara
          </p>
          <h1 className="font-display max-w-3xl text-[clamp(4rem,9vw,8.5rem)] font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#241814]">
            Pedasnya
            <br />
            <span className="text-[#c72c18]">bikin</span>
            <br />
            pulang.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-8 text-[#6d5549]">
            Sambal cabai pilihan yang diulek dengan resep keluarga. Satu sendok,
            nasi hangat jadi alasan untuk nambah lagi.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#varian"
              className="rounded-full bg-[#241814] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#c72c18]"
            >
              Pilih sambal <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#varian"
              className="group flex items-center gap-3 px-3 py-3 text-sm font-bold"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-[#cbb9a8] transition-colors group-hover:border-[#c72c18] group-hover:text-[#c72c18]">
                ↓
              </span>
              Lihat varian
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] animate-float">
          <div className="absolute -right-8 top-8 h-64 w-64 rounded-full bg-[#e9b84b] opacity-60 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-[45%_55%_48%_52%/44%_43%_57%_56%] bg-[#d83a1f] shadow-[18px_24px_0_#241814]">
            <div className="absolute inset-8 rounded-full border border-white/20" />
            <div className="absolute left-[14%] top-[18%] h-16 w-16 rotate-45 rounded-[65%_35%_55%_45%] bg-[#e94e29]" />
            <div className="absolute right-[17%] top-[25%] h-12 w-24 -rotate-12 rounded-full bg-[#b62216]" />
            <div className="absolute bottom-[24%] left-[22%] h-20 w-32 rotate-12 rounded-[50%_50%_40%_60%] bg-[#ed5c28]" />
            <div className="absolute bottom-[14%] right-[18%] h-14 w-14 -rotate-45 rounded-[60%_40%_55%_45%] bg-[#ad2018]" />
            <div className="absolute inset-0 grid place-items-center text-center text-white">
              <div>
                <p className="font-display text-6xl font-black uppercase leading-[0.8] tracking-[-0.08em]">
                  Arbi
                  <br />
                  <span className="text-[#f4c64f]">Asli</span>
                </p>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.35em]">
                  Ulek • Tuang • Lahap
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-5 grid h-24 w-24 -rotate-12 place-items-center rounded-full border-2 border-[#241814] bg-[#f4c64f] text-center text-[10px] font-black uppercase leading-3 tracking-wider">
            100%
            <br />
            cabai
            <br />
            segar
          </div>
        </div>
      </section>

      <section id="cerita" className="border-y border-[#d8c9bb] bg-[#eadfd2]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c72c18]">
            01 / Dari dapur Arbi
          </p>
          <div>
            <h2 className="font-display max-w-3xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl">
              Bukan sekadar pedas. Ini rasa yang{" "}
              <span className="text-[#c72c18]">dirindukan.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#6d5549]">
              Kami percaya sambal terbaik bukan yang paling menyiksa, tapi yang
              membuat kamu diam sebentar karena enak. Dibuat dalam batch kecil,
              pakai bahan yang kami pilih sendiri.
            </p>
          </div>
        </div>
      </section>

      <section
        id="varian"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c72c18]">
              02 / Pilih pedasmu
            </p>
            <h2 className="font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl">
              Tiga rasa.
              <br />
              Satu obsesi.
            </h2>
          </div>
          <span className="hidden text-5xl text-[#c72c18] sm:block">✳</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => {
            const quantity = quantities[product.id] ?? 0;

            return (
              <article
                key={product.id}
                className={`group transition-transform hover:-translate-y-2 ${product.cardClass} p-7`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-widest ${product.labelClass}`}
                >
                  {product.label}
                </p>
                <div className="my-12 text-center text-7xl transition-transform group-hover:scale-110">
                  {product.emoji}
                </div>
                <h3 className="font-display text-3xl font-black uppercase tracking-[-0.04em]">
                  {product.name}
                </h3>
                <p className={`mt-2 text-sm ${product.descriptionClass}`}>
                  {product.description}
                </p>
                <div
                  className={`mt-8 flex items-center justify-between border-t pt-4 text-sm font-bold ${product.borderClass}`}
                >
                  <span>150 gr</span>
                  <span>{formatRupiah(product.price)}</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold">Jumlah</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, -1)}
                      disabled={quantity === 0}
                      aria-label={`Kurangi ${product.name}`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-current text-lg transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      −
                    </button>
                    <span
                      aria-live="polite"
                      aria-label={`${quantity} ${product.name}`}
                      className="min-w-5 text-center"
                    >
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, 1)}
                      aria-label={`Tambah ${product.name}`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-current text-lg transition-colors hover:bg-white/15"
                    >
                      +
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <dialog
        ref={checkoutDialogRef}
        onClose={() => setIsCheckoutOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsCheckoutOpen(false);
          }
        }}
        aria-label="Checkout pesanan"
        className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-7xl overflow-y-auto border-0 bg-[#eadfd2] p-0 text-[#241814] shadow-2xl backdrop:bg-[#241814]/70"
      >
        <button
          type="button"
          onClick={() => setIsCheckoutOpen(false)}
          aria-label="Tutup checkout"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-[#241814] text-xl text-white transition-colors hover:bg-[#c72c18]"
        >
          ×
        </button>
      <section id="checkout" className="border-y border-[#d8c9bb] bg-[#eadfd2]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c72c18]">
              03 / Selesaikan pesanan
            </p>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl">
              Pesananmu,
              <br />
              siap dikirim.
            </h2>
            <div className="mt-8 rounded-2xl bg-[#f5efe5] p-6">
              <div className="flex items-center justify-between border-b border-[#d8c9bb] pb-4">
                <span className="font-semibold">Ringkasan pesanan</span>
                <span className="text-sm text-[#6d5549]">
                  {totalItems} produk
                </span>
              </div>
              <div className="space-y-3 py-4">
                {products
                  .filter((product) => (quantities[product.id] ?? 0) > 0)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="flex justify-between gap-4 text-sm"
                    >
                      <span>
                        {product.name} × {quantities[product.id]}
                      </span>
                      <span className="shrink-0 font-semibold">
                        {formatRupiah(
                          product.price * (quantities[product.id] ?? 0),
                        )}
                      </span>
                    </div>
                  ))}
                {totalItems === 0 && (
                  <p className="text-sm text-[#6d5549]">
                    Belum ada produk. Pilih varian dan jumlahnya terlebih
                    dahulu.
                  </p>
                )}
              </div>
              <div className="flex justify-between border-t border-[#d8c9bb] pt-4 text-sm">
                <span>Subtotal ({totalItems} produk)</span>
                <span className="font-bold">{formatRupiah(totalPrice)}</span>
              </div>
              <div className="mt-2 flex justify-between text-sm text-[#6d5549]">
                <span>Ongkos kirim</span>
                <span>Dikonfirmasi saat pemesanan</span>
              </div>
              <div className="mt-5 border-t border-[#d8c9bb] pt-4">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c72c18]">
                  Ringkasan pembayaran
                </p>
                <div className="mt-3 flex justify-between gap-4 text-sm">
                  <span>Metode pembayaran</span>
                  <span className="text-right font-semibold">Transfer bank</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-[#6d5549]">
                  Detail rekening akan dikirim setelah pesanan dikonfirmasi.
                  Total akhir menunggu konfirmasi ongkos kirim.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={submitOrder}
            className="rounded-2xl bg-[#f5efe5] p-6 sm:p-8"
          >
            <h3 className="font-display text-2xl font-black uppercase tracking-[-0.04em]">
              Alamat pengiriman
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#6d5549]">
              Isi data penerima agar pesananmu bisa kami kirim dengan tepat.
            </p>
            <div className="mt-6 grid gap-5">
              <label className="grid gap-2 text-sm font-semibold">
                Nama penerima
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Nama lengkap"
                  className="w-full rounded-lg border border-[#d8c9bb] bg-white px-4 py-3 font-normal outline-none transition-colors placeholder:text-[#9b887b] focus:border-[#c72c18]"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Nomor WhatsApp
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Contoh: 081234567890"
                  className="w-full rounded-lg border border-[#d8c9bb] bg-white px-4 py-3 font-normal outline-none transition-colors placeholder:text-[#9b887b] focus:border-[#c72c18]"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Pilih ekspedisi
                <select
                  required
                  name="expedition"
                  defaultValue=""
                  className="w-full rounded-lg border border-[#d8c9bb] bg-white px-4 py-3 font-normal outline-none transition-colors focus:border-[#c72c18]"
                >
                  <option value="" disabled>
                    Pilih jasa pengiriman
                  </option>
                  <option value="JNE">JNE</option>
                  <option value="J&T Express">J&amp;T Express</option>
                  <option value="SiCepat">SiCepat</option>
                  <option value="Pos Indonesia">Pos Indonesia</option>
                  <option value="AnterAja">AnterAja</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Alamat lengkap
                <textarea
                  required
                  name="address"
                  autoComplete="street-address"
                  rows={3}
                  placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan"
                  className="w-full resize-y rounded-lg border border-[#d8c9bb] bg-white px-4 py-3 font-normal outline-none transition-colors placeholder:text-[#9b887b] focus:border-[#c72c18]"
                />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Kota/Kabupaten
                  <input
                    required
                    name="city"
                    autoComplete="address-level2"
                    placeholder="Contoh: Bandung"
                    className="w-full rounded-lg border border-[#d8c9bb] bg-white px-4 py-3 font-normal outline-none transition-colors placeholder:text-[#9b887b] focus:border-[#c72c18]"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Kode pos
                  <input
                    required
                    name="postalCode"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="Contoh: 40123"
                    className="w-full rounded-lg border border-[#d8c9bb] bg-white px-4 py-3 font-normal outline-none transition-colors placeholder:text-[#9b887b] focus:border-[#c72c18]"
                  />
                </label>
              </div>
            </div>
            <button
              type="submit"
              disabled={totalItems === 0}
              className="mt-7 w-full rounded-full bg-[#c72c18] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#a92213] disabled:cursor-not-allowed disabled:bg-[#9b887b]"
            >
              {totalItems === 0
                ? "Pilih produk terlebih dahulu"
                : `Pesan ${totalItems} produk · ${formatRupiah(totalPrice)}`}
              {totalItems > 0 && <span aria-hidden="true"> ↗</span>}
            </button>
            <p className="mt-3 text-center text-xs leading-5 text-[#6d5549]">
              Pesanan akan dikirim ke WhatsApp untuk konfirmasi. Ongkos kirim
              belum termasuk subtotal.
            </p>
          </form>
        </div>
      </section>
      </dialog>

      <footer id="kontak" className="bg-[#241814] px-6 py-12 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-4xl font-black uppercase tracking-[-0.06em] text-[#e9b84b]">
              Sambel Arbi
            </p>
            <p className="mt-3 text-sm text-white/55">
              Dibuat dengan cabai, cinta, dan nasi hangat.
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              Order & kolaborasi
            </p>
            <a
              href="https://wa.me/6281234567890"
              className="mt-2 block text-lg font-bold hover:text-[#e9b84b]"
            >
              +62 812 3456 7890 ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
