import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {
  About,
  Contact,
  Events,
  FocusAreas,
  Hero,
  Subunits,
  Team,
  Testimonials,
} from "@/app/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <FocusAreas />
        <Subunits />
        <Team />
        <Events />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
