import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Kalkulator from '@/components/Kalkulator';
import Keunggulan from '@/components/Keunggulan';
import Syarat from '@/components/Syarat';
import Kontak from '@/components/Kontak';
import ArtikelSection from '@/components/ArtikelSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Kalkulator />
        <Keunggulan />
        <Syarat />
        <ArtikelSection />
        <Kontak />
      </main>
      <Footer />
    </>
  );
}
