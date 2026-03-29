import Link from 'next/link';

const articles = [
  { slug: 'bengkel-honda-klaten', tag: 'Info Honda', title: 'Daftar Bengkel Resmi Honda di Klaten', desc: 'Lengkap dengan alamat, jam buka, dan nomor telepon semua AHASS (bengkel resmi Honda) di Klaten.' },
  { slug: 'cara-kredit-motor-tidak-ditolak', tag: 'Tips Kredit', title: 'Cara Mengajukan Kredit Motor Agar Tidak Ditolak', desc: '7 tips ampuh agar pengajuan kredit motor Anda langsung disetujui leasing. Wajib baca sebelum apply!' },
  { slug: 'bengkel-yamaha-klaten', tag: 'Info Yamaha', title: 'Daftar Bengkel Resmi Yamaha (YSS) di Klaten', desc: 'Alamat lengkap dan kontak semua bengkel resmi Yamaha Yamalube Service Station di Klaten.' },
  { slug: 'motor-terbaik-ojol-klaten', tag: 'Tips Motor', title: 'Rekomendasi Motor Terbaik untuk Ojol di Klaten', desc: 'Vario, Beat, Scoopy, NMax, PCX — mana yang paling irit dan cocok untuk ojek online di Klaten?' },
];

export default function ArtikelSection() {
  return (
    <section className="section bgDark2" id="artikel">
      <div className="sectionInner">
        <div className="sectionLabel">Artikel & Tips</div>
        <h2 className="sectionTitle">Panduan Kredit<br />Motor Klaten</h2>
        <p className="sectionDesc">Informasi lengkap seputar kredit motor, bengkel resmi, dan tips berkendara di Klaten.</p>
        <div className="artikelGrid">
          {articles.map((a) => (
            <Link key={a.slug} href={`/artikel/${a.slug}`} className="artikelCard">
              <div style={{ background: '#CC0000', height: '6px' }} />
              <div className="artikelCardBody">
                <div className="artikelTag">{a.tag}</div>
                <div className="artikelTitle">{a.title}</div>
                <p className="artikelDesc">{a.desc}</p>
                <div className="artikelReadMore">Baca Selengkapnya →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
