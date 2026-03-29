const karyawan = [
  'Fotocopy KTP pemohon (suami & istri)',
  'Fotocopy Kartu Keluarga (KK)',
  'Slip gaji / surat keterangan penghasilan',
  'Fotocopy rekening koran 3 bulan terakhir',
  'Fotocopy NPWP (kredit di atas Rp 50 juta)',
  'Pas foto 3×4 terbaru',
];

const wiraswasta = [
  'Fotocopy KTP pemohon (suami & istri)',
  'Fotocopy Kartu Keluarga (KK)',
  'Surat keterangan usaha / SIUP / SITU',
  'Fotocopy rekening koran 3 bulan terakhir',
  'Fotocopy tagihan listrik / PBB tempat usaha',
  'Pas foto 3×4 terbaru',
];

export default function Syarat() {
  return (
    <section className="section bgDark" id="syarat">
      <div className="sectionInner">
        <div className="sectionLabel">Persyaratan</div>
        <h2 className="sectionTitle">Syarat &amp;<br />Ketentuan Kredit</h2>
        <p className="sectionDesc">Dokumen yang perlu disiapkan untuk pengajuan kredit motor Honda di Klaten.</p>
        <div className="syaratGrid">
          <div className="syaratCard">
            <div className="syaratTitle">Karyawan / Pegawai <span>Swasta &amp; BUMN</span></div>
            <ul className="syaratList">
              {karyawan.map((item) => (
                <li key={item}><span className="syaratCheck">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="syaratCard">
            <div className="syaratTitle">Wiraswasta <span>/ Usaha Mandiri</span></div>
            <ul className="syaratList">
              {wiraswasta.map((item) => (
                <li key={item}><span className="syaratCheck">✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
