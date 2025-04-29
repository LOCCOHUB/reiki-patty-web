import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => (
  <div className="min-h-screen bg-background text-foreground font-sans">
    <Header />
    <main>
      <Outlet /> {/* Aquí se pinta cada página “normal” */}
    </main>
    <Footer />
  </div>
);

export default Layout;