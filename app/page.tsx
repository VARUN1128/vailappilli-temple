import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TempleIntro from "@/components/sections/TempleIntro";
import DeitySection from "@/components/sections/DeitySection";
import PoojaTimings from "@/components/sections/PoojaTimings";
import FestivalSection from "@/components/sections/FestivalSection";
import VazhipaduSection from "@/components/sections/VazhipaduSection";
import HistoryTimeline from "@/components/sections/HistoryTimeline";
import GallerySection from "@/components/sections/GallerySection";
import AnnouncementsSection from "@/components/sections/AnnouncementsSection";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-temple-ivory overflow-x-hidden">
      <Navbar />
      <Hero />
      <TempleIntro />
      <DeitySection />
      <PoojaTimings />
      <FestivalSection />
      <VazhipaduSection />
      <HistoryTimeline />
      <GallerySection />
      <AnnouncementsSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </main>
  );
}
