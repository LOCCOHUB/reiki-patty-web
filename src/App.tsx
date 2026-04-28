import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Hero from "./components/Hero";
import PeopleAtHeart from "./components/PeopleAtHeart";
import OurApproach from "./components/OurApproach";
import ReikiMenu from "./components/ReikiMenu";
import InspirationBanner from "./components/InspirationBanner";
import AboutUs from "./components/AboutUs";
import FooterNav from "./components/FooterNav";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";

const SHOW_HOLDING_SCREEN = true;

function HoldingScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-black">
      <div
        className="h-12 w-12 animate-spin rounded-full border border-black/15 border-t-black"
        aria-label="Cargando"
        role="status"
      />
    </main>
  );
}

function App() {
  if (SHOW_HOLDING_SCREEN) {
    return <HoldingScreen />;
  }

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
              <InspirationBanner />
              <ReikiMenu />
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
