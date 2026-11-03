import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div>
      {/* Outside the hero <section>, so screen readers treat it as the site header (banner).
          It is fixed, so it still sits on top of the hero photo. */}
      <Header />
      <main>
        <Hero />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
