import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="heroContent">
        <div className="heroBadge">
          <span className="heroBadgeDot" />
          Kredit Motor Honda Klaten
        </div>
        <h1 className="heroH1">
          Wujudkan
          <em>Motor Impian</em>
          Anda
        </h1>
        <p className="heroSub">
          Angsuran ringan, proses mudah, dan disetujui cepat. Tersedia 22+ tipe Honda untuk kebutuhan Anda di Klaten dan sekitarnya.
        </p>
        <div className="heroStats">
          <div>
            <div className="statNum">22<span>+</span></div>
            <div className="statLabel">Tipe Motor</div>
          </div>
          <div>
            <div className="statNum">12<span>–48</span></div>
            <div className="statLabel">Bulan Tenor</div>
          </div>
          <div>
            <div className="statNum">0<span>%</span></div>
            <div className="statLabel">Ribet &amp; Susah</div>
          </div>
        </div>
        <div className="heroCtas">
          <Link href="#kalkulator" className="btnPrimary">Hitung Angsuran →</Link>
          <Link href="#produk" className="btnOutline">Lihat Semua Motor</Link>
        </div>
      </div>
    </section>
  );
}
