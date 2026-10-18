import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TempleHistorySection from "@/components/sections/TempleHistorySection";
import CommitteeSection from "@/components/sections/CommitteeSection";
import PoojaTimings from "@/components/sections/PoojaTimings";
import VazhipaduSection from "@/components/sections/VazhipaduSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-temple-ivory" style={{ overflowX: "clip" }}>
      <Navbar />
      <Hero />
      <TempleHistorySection />
      <CommitteeSection />
      <PoojaTimings />
      <VazhipaduSection />
      <GallerySection />
      <ContactSection />
      <MapSection />
      <Footer />
    </main>
  );
}
