const features = [
  { icon: '⚡', title: 'Proses Cepat', desc: 'Pengajuan kredit diproses cepat. Survei hari ini, bisa bawa motor besok!' },
  { icon: '💰', title: 'DP Ringan', desc: 'Uang muka mulai dari 10%. Sesuaikan dengan kemampuan finansial Anda.' },
  { icon: '📋', title: 'Syarat Mudah', desc: 'Cukup KTP, KK, dan slip gaji. Proses pengajuan tidak berbelit-belit.' },
  { icon: '🏆', title: 'Resmi & Terpercaya', desc: 'Motor Honda asli resmi dengan garansi pabrik. Surat-surat lengkap dan legal.' },
  { icon: '🤝', title: 'Konsultasi Gratis', desc: 'Konsultasikan kebutuhan Anda dengan Rio secara gratis via WhatsApp kapan saja.' },
  { icon: '🛵', title: '22+ Pilihan', desc: 'Lebih dari 22 tipe motor Honda tersedia untuk semua segmen dan kebutuhan.' },
];

export default function Keunggulan() {
  return (
    <section className="section bgDark2" id="keunggulan">
      <div className="sectionInner">
        <div className="sectionLabel">Kenapa Kami?</div>
        <h2 className="sectionTitle">Keunggulan<br />Layanan Kami</h2>
        <div className="featuresGrid">
          {features.map((f) => (
            <div key={f.title} className="featureItem">
              <div className="featureIcon">{f.icon}</div>
              <div className="featureTitle">{f.title}</div>
              <p className="featureDesc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
