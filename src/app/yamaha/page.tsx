import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YamahaProducts from '@/components/YamahaProducts';
import YamahaKalkulator from '@/components/YamahaKalkulator';
import Keunggulan from '@/components/Keunggulan';
import Syarat from '@/components/Syarat';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kredit Motor Yamaha Klaten | Angsuran Murah & Proses Cepat – Rio',
  description: 'Kredit motor Yamaha di Klaten dengan angsuran murah, DP ringan, proses cepat. Tersedia NMax, Aerox, Mio, Filano, FreeGo, Lexi, XMax. Hubungi Rio sekarang!',
  keywords: 'kredit motor yamaha klaten, angsuran motor yamaha klaten, cicilan yamaha klaten, kredit nmax klaten, kredit aerox klaten, kredit mio klaten, dealer yamaha klaten',
  openGraph: {
    title: 'Kredit Motor Yamaha Klaten | Angsuran Murah & Proses Cepat',
    description: 'Kredit motor Yamaha di Klaten, DP ringan mulai 10%, proses cepat. Hubungi Rio!',
    type: 'website',
    locale: 'id_ID',
  },
  alternates: { canonical: 'https://kreditmotorklaten.biz.id/yamaha/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'Kredit Motor Yamaha Klaten – Rio',
  description: 'Dealer kredit motor Yamaha di Klaten dengan angsuran murah dan proses cepat',
  telephone: '+62877-8165-8231',
  address: { '@type': 'PostalAddress', addressLocality: 'Klaten', addressRegion: 'Jawa Tengah', addressCountry: 'ID' },
  areaServed: 'Klaten',
};

export default function YamahaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* HERO */}
        <section className="hero" style={{ background: 'linear-gradient(135deg,#003087 0%,#001a54 100%)' }} id="hero">
          <div className="heroContent">
            <div className="heroBadge">
              <span className="heroBadgeDot" style={{ background: '#00C2FF' }} />
              Kredit Motor Yamaha Klaten
            </div>
            <h1 className="heroH1">
              Wujudkan
              <em style={{ color: '#00C2FF' }}>Motor Impian</em>
              Anda
            </h1>
            <p className="heroSub">
              Kredit motor Yamaha di Klaten — angsuran ringan, DP mulai 10%, proses disetujui cepat. Tersedia 14+ tipe Yamaha terbaru.
            </p>
            <div className="heroStats">
              <div>
                <div className="statNum">14<span style={{ color: '#00C2FF' }}>+</span></div>
                <div className="statLabel">Tipe Motor</div>
              </div>
              <div>
                <div className="statNum">12<span style={{ color: '#00C2FF' }}>–48</span></div>
                <div className="statLabel">Bulan Tenor</div>
              </div>
              <div>
                <div className="statNum">1<span style={{ color: '#00C2FF' }}>hr</span></div>
                <div className="statLabel">Proses ACC</div>
              </div>
            </div>
            <div className="heroCtas">
              <Link href="#kalkulator" className="btnPrimary" style={{ background: '#00C2FF', color: '#001a54' }}>Hitung Angsuran →</Link>
              <Link href="#produk" className="btnOutline">Lihat Semua Motor</Link>
            </div>
          </div>
        </section>

        <YamahaProducts />
        <YamahaKalkulator />
        <Keunggulan />
        <Syarat />

        {/* KONTAK */}
        <section className="section bgKontak" style={{ background: 'linear-gradient(135deg,#003087 0%,#001a54 100%)' }} id="kontak">
          <div className="sectionInner">
            <div className="kontakWrap">
              <div className="sectionLabel" style={{ color: 'rgba(255,255,255,.7)' }}>Hubungi Kami</div>
              <h2 className="sectionTitle" style={{ color: '#fff', fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
                Siap Bantu<br />Anda Sekarang
              </h2>
              <p style={{ color: 'rgba(255,255,255,.8)', margin: '1rem auto', maxWidth: 500, lineHeight: 1.7 }}>
                Konsultasikan pilihan motor Yamaha dan simulasi kredit langsung dengan Rio. Gratis, tanpa komitmen!
              </p>
              <div className="kontakCards">
                {[['📱','WhatsApp / Telepon','+62 877-8165-8231'],['👤','Sales Executive','Rio — Yamaha Klaten'],['📍','Area Pelayanan','Klaten & Sekitarnya'],['🕐','Jam Operasional','Senin–Sabtu, 08.00–17.00']].map(([icon,label,val]) => (
                  <div key={label} className="kontakCard">
                    <div className="kontakIcon">{icon}</div>
                    <div><div className="kontakLabel">{label}</div><div className="kontakVal">{val}</div></div>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/6287781658231?text=Halo%20Rio%2C%20saya%20mau%20tanya%20kredit%20motor%20Yamaha%20di%20Klaten" target="_blank" rel="noopener noreferrer" className="waBtn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat WhatsApp dengan Rio
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
