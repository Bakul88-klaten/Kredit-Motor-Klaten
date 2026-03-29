import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bengkel Resmi Yamaha (YSS) di Klaten | Alamat & Jam Buka Lengkap',
  description: 'Daftar lengkap bengkel resmi Yamaha Yamalube Service Station di Klaten. Alamat, jam operasional, dan nomor telepon untuk servis motor Yamaha Anda.',
  keywords: 'bengkel resmi yamaha klaten, YSS klaten, servis yamaha klaten, bengkel yamaha klaten, yamalube service station klaten',
  alternates: { canonical: 'https://kreditmotorklaten.biz.id/artikel/bengkel-yamaha-klaten/' },
};

const bengkel = [
  { nama: 'Yamaha YSS Klaten Jaya', alamat: 'Jl. Pemuda No. 67, Klaten Tengah, Klaten', telp: '0272-323567', jam: 'Sen–Sab 08.00–17.00' },
  { nama: 'Yamaha YSS Surya Motor', alamat: 'Jl. Raya Delanggu No. 12, Delanggu, Klaten', telp: '0272-552678', jam: 'Sen–Sab 08.00–17.00' },
  { nama: 'Yamaha YSS Prambanan Motor', alamat: 'Jl. Raya Prambanan KM 1, Prambanan, Klaten', telp: '0274-497123', jam: 'Sen–Sab 08.00–16.30' },
  { nama: 'Yamaha YSS Ceper Mandiri', alamat: 'Jl. Solo–Yogya KM 11, Ceper, Klaten', telp: '0272-551890', jam: 'Sen–Sab 08.00–16.30' },
  { nama: 'Yamaha YSS Klaten Utara', alamat: 'Jl. Merbabu No. 34, Klaten Utara, Klaten', telp: '0272-322890', jam: 'Sen–Sab 08.00–17.00' },
];

export default function BengkelYamahaPage() {
  return (
    <>
      <Header />
      <main>
        <article className="articleWrap">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link> › <Link href="/#artikel">Artikel</Link> › Bengkel Resmi Yamaha Klaten
          </div>
          <div className="articleTag">Info Yamaha</div>
          <h1 className="articleTitle">Daftar Bengkel Resmi Yamaha (YSS) di Klaten</h1>
          <div className="articleMeta">Ditulis oleh Rio · Kredit Motor Klaten · Diperbarui 2025</div>

          <div className="articleBody">
            <p>Punya motor Yamaha di Klaten? Pastikan Anda servis di <strong>Yamaha Service Station (YSS)</strong> yang resmi agar motor tetap prima dan garansi tetap berlaku. Berikut daftar lengkap bengkel resmi Yamaha di Klaten.</p>

            <div className="highlight">
              🔧 Servis di YSS resmi menjamin penggunaan spare part original Yamaha dan dikerjakan oleh teknisi bersertifikat.
            </div>

            <h2>Daftar YSS Resmi Yamaha di Klaten</h2>

            {bengkel.map((b, i) => (
              <div key={i} style={{ border: '1.5px solid #E0E0E0', borderRadius: 4, padding: '1rem 1.2rem', marginBottom: '1rem' }}>
                <h3 style={{ marginBottom: '0.5rem', color: '#003087' }}>{i + 1}. {b.nama}</h3>
                <p>📍 <strong>Alamat:</strong> {b.alamat}</p>
                <p>📞 <strong>Telepon:</strong> {b.telp}</p>
                <p>🕐 <strong>Jam Buka:</strong> {b.jam}</p>
              </div>
            ))}

            <h2>Program Servis Gratis Yamaha</h2>
            <p>Motor Yamaha baru mendapatkan <strong>servis gratis berkala</strong> di YSS resmi. Manfaatkan program ini untuk perawatan optimal:</p>
            <ul>
              <li>Servis pertama 1.000 km — gratis</li>
              <li>Servis kedua 5.000 km — gratis (tergantung program dealer)</li>
              <li>Ganti oli gratis pertama untuk beberapa tipe motor</li>
            </ul>

            <h2>Tertarik Kredit Motor Yamaha di Klaten?</h2>
            <p>Dapatkan motor Yamaha impian Anda dengan cicilan ringan. Rio siap membantu proses kredit yang cepat dan mudah di Klaten!</p>
          </div>

          <a href="https://wa.me/6287781658231?text=Halo%20Rio%2C%20saya%20mau%20kredit%20motor%20Yamaha%20di%20Klaten" target="_blank" rel="noopener noreferrer" className="articleCta" style={{ background: '#003087' }}>
            <strong>🛵 Kredit Motor Yamaha Klaten</strong>
            Hubungi Rio — DP Ringan, Proses Cepat!
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
