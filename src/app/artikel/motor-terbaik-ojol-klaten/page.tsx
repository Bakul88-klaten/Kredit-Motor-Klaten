import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Motor Terbaik untuk Ojol di Klaten 2025 | Rekomendasi Vario, Beat, NMax, PCX',
  description: 'Rekomendasi motor terbaik untuk ojek online (Gojek/Grab) di Klaten. Perbandingan Vario, Beat, Scoopy, NMax, dan PCX dari segi irit, kenyamanan, dan harga kredit.',
  keywords: 'motor terbaik ojol klaten, motor ojek online klaten, motor irit ojol, vario untuk ojol, beat untuk ojol, nmax untuk ojol, kredit motor ojol klaten',
  alternates: { canonical: 'https://kreditmotorklaten.biz.id/artikel/motor-terbaik-ojol-klaten/' },
};

const motors = [
  { rank: 1, nama: 'Honda Vario 160', harga: 'Rp 29.890.000', angsuran: '~Rp 750.000/bln', pros: ['Mesin 160cc kuat untuk nanjak', 'Bagasi luas 18,9 liter', 'Konsumsi BBM ~47 km/L', 'Tampil profesional'], cons: ['Harga lebih mahal dari Beat', 'Sedikit lebih berat'] },
  { rank: 2, nama: 'Honda BeAT', harga: 'Rp 20.890.000', angsuran: '~Rp 530.000/bln', pros: ['Harga paling terjangkau', 'Irit BBM ~60 km/L', 'Lincah di kemacetan', 'Bobot ringan 93 kg'], cons: ['Bagasi kecil 12 liter', 'Mesin 110cc kurang bertenaga saat nanjak'] },
  { rank: 3, nama: 'Honda Scoopy', harga: 'Rp 24.910.000', angsuran: '~Rp 630.000/bln', pros: ['Tampil retro elegan', 'Nyaman dikendarai', 'Konsumsi BBM ~55 km/L'], cons: ['Bagasi agak kecil', 'Kurang ideal untuk bawa barang besar'] },
  { rank: 4, nama: 'Yamaha NMax', harga: 'Rp 36.500.000', angsuran: '~Rp 920.000/bln', pros: ['Mesin 155cc bertenaga', 'Bagasi super besar 25,4 liter', 'Nyaman perjalanan jauh', 'Ideal untuk delivery'], cons: ['Harga paling mahal', 'BBM lebih boros ~44 km/L'] },
  { rank: 5, nama: 'Honda PCX 160', harga: 'Rp 36.060.000', angsuran: '~Rp 910.000/bln', pros: ['Mesin 160cc bertenaga', 'Bagasi 30 liter terbesar', 'Suspensi nyaman', 'Tampil premium'], cons: ['Harga tinggi', 'Lebih cocok premium segment'] },
];

export default function OjolPage() {
  return (
    <>
      <Header />
      <main>
        <article className="articleWrap">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link> › <Link href="/#artikel">Artikel</Link> › Motor Terbaik Ojol
          </div>
          <div className="articleTag">Tips Motor</div>
          <h1 className="articleTitle">5 Rekomendasi Motor Terbaik untuk Ojol di Klaten 2025</h1>
          <div className="articleMeta">Ditulis oleh Rio · Kredit Motor Klaten · Diperbarui 2025</div>

          <div className="articleBody">
            <p>Memilih motor untuk ojek online (Gojek/Grab) di Klaten butuh pertimbangan matang. Motor yang bagus untuk ojol harus <strong>irit BBM, nyaman dikendarai lama, punya bagasi cukup, dan mudah perawatannya</strong>. Berikut rekomendasi Rio berdasarkan pengalaman melayani ratusan driver ojol di Klaten.</p>

            <div className="highlight">
              🏆 Berdasarkan survei driver ojol Klaten, <strong>Vario 160 adalah pilihan nomor 1</strong> karena keseimbangan terbaik antara tenaga, irit, dan bagasi.
            </div>

            {motors.map((m) => (
              <div key={m.rank} style={{ border: '1.5px solid #E0E0E0', borderRadius: 4, padding: '1.2rem', marginBottom: '1.2rem' }}>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>#{m.rank} {m.nama}</h2>
                <p style={{ marginBottom: '0.5rem' }}>💰 Harga OTR: <strong>{m.harga}</strong> · Cicilan: <strong>{m.angsuran}</strong></p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <div>
                    <strong style={{ color: '#22863a', fontSize: '0.85rem' }}>✅ KELEBIHAN</strong>
                    <ul style={{ marginTop: '0.3rem' }}>{m.pros.map(p => <li key={p} style={{ fontSize: '0.9rem' }}>{p}</li>)}</ul>
                  </div>
                  <div>
                    <strong style={{ color: '#cc0000', fontSize: '0.85rem' }}>⚠️ KEKURANGAN</strong>
                    <ul style={{ marginTop: '0.3rem' }}>{m.cons.map(c => <li key={c} style={{ fontSize: '0.9rem' }}>{c}</li>)}</ul>
                  </div>
                </div>
              </div>
            ))}

            <h2>Kesimpulan</h2>
            <p><strong>Anggaran terbatas?</strong> Pilih Honda BeAT — paling irit dan murah.<br />
            <strong>Mau yang serba bisa?</strong> Honda Vario 160 adalah pilihan terbaik.<br />
            <strong>Sering delivery barang besar?</strong> Yamaha NMax atau Honda PCX adalah pilihan ideal.</p>

            <div className="highlight">
              💬 Masih bingung pilih motor? Konsultasikan langsung dengan Rio — gratis dan tanpa komitmen!
            </div>
          </div>

          <a href="https://wa.me/6287781658231?text=Halo%20Rio%2C%20saya%20mau%20kredit%20motor%20untuk%20ojol%20di%20Klaten" target="_blank" rel="noopener noreferrer" className="articleCta">
            <strong>🛵 Kredit Motor Ojol di Klaten</strong>
            Hubungi Rio — Cicilan Ringan, Motor Langsung Bawa Pulang!
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
