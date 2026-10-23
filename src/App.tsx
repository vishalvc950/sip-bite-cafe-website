import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileActionBar from "./components/MobileActionBar";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-espresso">
      <a
        href="#menu"
        className="sr-only z-[80] rounded-full bg-espresso px-5 py-3 text-sm font-bold text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to menu
      </a>

      <Navbar />

      <main>
        <Hero />
        <MenuSection />
        <Gallery />
        <About />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
