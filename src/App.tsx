import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import PeopleAtHeart from "./components/PeopleAtHeart";
import OurApproach from "./components/OurApproach";
import FeaturedWorks from "./components/FeaturedWorks";
import InspirationBanner from "./components/InspirationBanner";
import AboutUs from "./components/AboutUs";
import FooterNav from "./components/FooterNav";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";

function HomePage() {
  return (
    <>
      <Hero />
      <PeopleAtHeart />
      <OurApproach />
      <FeaturedWorks />
      <InspirationBanner />
      <AboutUs />
      <FooterNav />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;