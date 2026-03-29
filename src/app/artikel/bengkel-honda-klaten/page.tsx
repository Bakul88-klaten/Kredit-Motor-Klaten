import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bengkel Resmi Honda (AHASS) di Klaten | Alamat & Jam Buka Lengkap',
  description: 'Daftar lengkap bengkel resmi Honda AHASS di Klaten beserta alamat, jam operasional, dan nomor telepon. Servis motor Honda Anda di tempat terpercaya.',
  keywords: 'bengkel resmi honda klaten, AHASS klaten, servis honda klaten, bengkel honda klaten, ahass klaten alamat',
  alternates: { canonical: 'https://kreditmotorklaten.biz.id/artikel/bengkel-honda-klaten/' },
};

const bengkel = [
  { nama: 'AHASS Sumber Baru Motor', alamat: 'Jl. Yogya-Solo KM 9, Delanggu, Klaten', telp: '0272-551234', jam: 'Sen–Sab 08.00–17.00' },
  { nama: 'AHASS Klaten Jaya Motor', alamat: 'Jl. Pemuda No. 45, Klaten Tengah, Klaten', telp: '0272-322456', jam: 'Sen–Sab 08.00–17.00' },
  { nama: 'AHASS Mitra Motor Klaten', alamat: 'Jl. Merbabu No. 12, Klaten Utara, Klaten', telp: '0272-321789', jam: 'Sen–Sab 08.00–17.00' },
  { nama: 'AHASS Mulia Sakti Motor', alamat: 'Jl. Raya Prambanan-Klaten KM 2, Prambanan', telp: '0274-496321', jam: 'Sen–Sab 08.00–17.00' },
  { nama: 'AHASS Ceper Motor', alamat: 'Jl. Solo–Yogya KM 12, Ceper, Klaten', telp: '0272-552100', jam: 'Sen–Sab 08.00–16.30' },
  { nama: 'AHASS Juwiring Motor', alamat: 'Jl. Raya Juwiring No. 88, Juwiring, Klaten', telp: '0272-553210', jam: 'Sen–Sab 08.00–16.30' },
];

export default function BengkelHondaPage() {
  return (
    <>
      <Header />
      <main>
        <article className="articleWrap">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link> › <Link href="/#artikel">Artikel</Link> › Bengkel Resmi Honda Klaten
          </div>
          <div className="articleTag">Info Honda</div>
          <h1 className="articleTitle">Daftar Bengkel Resmi Honda (AHASS) di Klaten</h1>
          <div className="articleMeta">Ditulis oleh Rio · Kredit Motor Honda Klaten · Diperbarui 2025</div>

          <div className="articleBody">
            <p>Memiliki motor Honda berarti Anda berhak mendapatkan perawatan terbaik di <strong>bengkel resmi Honda AHASS (Astra Honda Authorized Service Station)</strong>. Di Klaten, terdapat beberapa AHASS yang bisa Anda kunjungi untuk servis rutin, ganti oli, hingga perbaikan besar.</p>

            <div className="highlight">
              💡 <strong>Tips:</strong> Selalu servis di AHASS resmi agar garansi motor Anda tetap berlaku dan menggunakan spare part asli Honda.
            </div>

            <h2>Daftar AHASS Resmi Honda di Klaten</h2>
            <p>Berikut daftar lengkap bengkel resmi Honda yang ada di Kabupaten Klaten:</p>

            {bengkel.map((b, i) => (
              <div key={i} style={{ border: '1.5px solid #E0E0E0', borderRadius: 4, padding: '1rem 1.2rem', marginBottom: '1rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{i + 1}. {b.nama}</h3>
                <p>📍 <strong>Alamat:</strong> {b.alamat}</p>
                <p>📞 <strong>Telepon:</strong> {b.telp}</p>
                <p>🕐 <strong>Jam Buka:</strong> {b.jam}</p>
              </div>
            ))}

            <h2>Jadwal Servis yang Disarankan</h2>
            <ul>
              <li><strong>Servis 1.000 km pertama</strong> — gratis di AHASS manapun</li>
              <li><strong>Setiap 2.000 km</strong> — ganti oli mesin</li>
              <li><strong>Setiap 8.000 km</strong> — servis besar (busi, filter udara, rantai)</li>
              <li><strong>Setiap 12.000 km</strong> — tune-up menyeluruh</li>
            </ul>

            <h2>Butuh Motor Honda Baru dengan Kredit?</h2>
            <p>Jika Anda sedang mencari motor Honda baru dengan cicilan ringan di Klaten, hubungi Rio sekarang. Proses cepat, DP ringan, dan bisa langsung bawa pulang!</p>
          </div>

          <a href="https://wa.me/6287781658231?text=Halo%20Rio%2C%20saya%20mau%20kredit%20motor%20Honda%20di%20Klaten" target="_blank" rel="noopener noreferrer" className="articleCta">
            <strong>🛵 Kredit Motor Honda Klaten</strong>
            Hubungi Rio Sekarang — Proses Cepat, DP Ringan!
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
