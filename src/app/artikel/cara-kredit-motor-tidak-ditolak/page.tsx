import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cara Mengajukan Kredit Motor Agar Tidak Ditolak | 7 Tips Ampuh 2025',
  description: '7 tips ampuh agar pengajuan kredit motor Anda langsung disetujui leasing. Dokumen yang perlu disiapkan, tips BI checking, dan cara menghindari penolakan.',
  keywords: 'cara kredit motor tidak ditolak, tips kredit motor disetujui, syarat kredit motor klaten, kredit motor ditolak leasing, BI checking kredit motor',
  alternates: { canonical: 'https://kreditmotorklaten.biz.id/artikel/cara-kredit-motor-tidak-ditolak/' },
};

export default function TipsKreditPage() {
  return (
    <>
      <Header />
      <main>
        <article className="articleWrap">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link> › <Link href="/#artikel">Artikel</Link> › Tips Kredit Motor
          </div>
          <div className="articleTag">Tips Kredit</div>
          <h1 className="articleTitle">7 Cara Mengajukan Kredit Motor Agar Tidak Ditolak Leasing</h1>
          <div className="articleMeta">Ditulis oleh Rio · Kredit Motor Klaten · Diperbarui 2025</div>

          <div className="articleBody">
            <p>Pengajuan kredit motor ditolak adalah pengalaman yang menyebalkan. Tapi tenang — <strong>sebagian besar penolakan bisa dihindari</strong> jika Anda tahu caranya. Berikut 7 tips ampuh dari pengalaman Rio sebagai sales motor di Klaten.</p>

            <div className="highlight">
              ✅ Ikuti 7 tips ini dan peluang kredit Anda disetujui akan meningkat drastis!
            </div>

            <h2>1. Pastikan BI Checking / SLIK OJK Bersih</h2>
            <p>Ini adalah faktor <strong>paling penting</strong>. Leasing akan memeriksa riwayat kredit Anda di Sistem Layanan Informasi Keuangan (SLIK) OJK. Pastikan tidak ada tunggakan kredit lain (KTP, KK, cicilan lain) yang macet.</p>
            <p>Cek SLIK OJK Anda secara gratis di <strong>idebku.ojk.go.id</strong> sebelum mengajukan kredit.</p>

            <h2>2. Siapkan Dokumen Lengkap dan Asli</h2>
            <ul>
              <li>KTP asli yang masih berlaku (suami & istri jika sudah menikah)</li>
              <li>Kartu Keluarga (KK) terbaru</li>
              <li>Slip gaji 3 bulan terakhir atau surat keterangan usaha</li>
              <li>Rekening koran/tabungan 3 bulan terakhir</li>
              <li>NPWP (untuk kredit di atas Rp 50 juta)</li>
            </ul>

            <h2>3. Pastikan Penghasilan Memadai</h2>
            <p>Aturan umum leasing: <strong>angsuran tidak boleh melebihi 30–35% dari penghasilan bulanan</strong>. Jika angsuran Rp 600.000/bulan, maka penghasilan minimal Rp 1.800.000/bulan.</p>

            <h2>4. Pilih DP yang Lebih Besar</h2>
            <p>Semakin besar DP, semakin kecil risiko bagi leasing — sehingga kemungkinan disetujui lebih besar. Jika anggaran terbatas, usahakan DP minimal 20–25%.</p>

            <h2>5. Pilih Tenor yang Sesuai Kemampuan</h2>
            <p>Jangan memaksakan tenor pendek jika penghasilan pas-pasan. Pilih tenor yang membuat angsuran terasa ringan agar skor kredit Anda tetap bagus untuk kredit berikutnya.</p>

            <h2>6. Alamat KTP dan Domisili Harus Sesuai</h2>
            <p>Leasing akan melakukan survei ke alamat Anda. Jika alamat KTP berbeda jauh dengan tempat tinggal, lengkapi dengan <strong>surat keterangan domisili</strong> dari RT/RW setempat.</p>

            <h2>7. Jujur Isi Formulir Pengajuan</h2>
            <p>Isi semua data dengan jujur dan lengkap. Leasing memiliki cara untuk memverifikasi data — data yang tidak sesuai justru bisa langsung menyebabkan penolakan.</p>

            <div className="highlight">
              💬 <strong>Tips dari Rio:</strong> Konsultasikan kondisi keuangan Anda sebelum mengajukan kredit. Rio akan membantu Anda memilih tenor dan DP yang paling tepat agar kredit langsung disetujui!
            </div>

            <h2>Siap Ajukan Kredit Motor di Klaten?</h2>
            <p>Rio akan membantu proses pengajuan kredit motor Honda maupun Yamaha Anda di Klaten — dari awal hingga motor ada di tangan Anda!</p>
          </div>

          <a href="https://wa.me/6287781658231?text=Halo%20Rio%2C%20saya%20mau%20konsultasi%20kredit%20motor%20di%20Klaten" target="_blank" rel="noopener noreferrer" className="articleCta">
            <strong>💬 Konsultasi Gratis dengan Rio</strong>
            Kredit Motor Honda & Yamaha Klaten — Proses Mudah & Cepat!
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
