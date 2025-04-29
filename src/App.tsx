import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Hero from "./components/Hero";
import PeopleAtHeart from "./components/PeopleAtHeart";
import OurApproach from "./components/OurApproach";
import FeaturedWorks from "./components/FeaturedWorks";
import InspirationBanner from "./components/InspirationBanner";
import AboutUs from "./components/AboutUs";
import FooterNav from "./components/FooterNav";

import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      {/* Rutas que SÍ llevan Header + Footer */}
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PeopleAtHeart />
              <OurApproach />
              <FeaturedWorks />
              <InspirationBanner />
              <AboutUs />
              <FooterNav />
            </>
          }
        />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
      </Route>

      {/* Ruta 404 SIN Layout (sin Header ni Footer) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;