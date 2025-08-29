import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

const Header = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const isHome = pathname === "/";

  /* ---------- helpers ---------- */
  const toggleContactForm = () => {
    setIsContactFormOpen(!isContactFormOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isContactFormOpen) setIsContactFormOpen(false);
  };

  /* ---------- efecto scroll ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ---------- HEADER ---------- */}
      <header
        className={`
          fixed top-6 left-6 right-6 flex justify-between items-center
          transition-colors duration-300
          ${scrolled ? "text-black" : "text-white"}
          ${isMenuOpen ? "z-20" : "z-50"}   /* ↓ baja un nivel si el menú está abierto */
        `}
      >
        {/* Logo */}
        <div
          className={`
            text-lg md:text-2xl font-bold tracking-tight uppercase
            ${scrolled ? "text-black" : "text-white"}
          `}
        >
          <Link to="/" className="hover:opacity-70 transition-opacity">
            ÖLEO HEALING
            </Link>
        </div>

        {/* Menú desktop */}
        {isHome && (
          <nav
            className={`
              hidden md:flex gap-8 text-xs uppercase tracking-wider
              ${scrolled ? "text-black" : "text-white"}
            `}
          >
            <a href="#inicio"  className="hover:opacity-70">Inicio</a>
            <a href="#reiki"   className="hover:opacity-70">Reiki</a>
            <a href="#tarifas" className="hover:opacity-70">Tarifas</a>
            <a href="#contacto"className="hover:opacity-70">Contacto</a>
          </nav>
        )}

        {/* CTA + hamburguesa */}
        {isHome && (
          <div className="flex items-center gap-4">
            <button
              onClick={toggleContactForm}
              className="group bg-[#c7b8e0] text-black py-3.5 px-7 rounded-full text-sm md:text-base uppercase tracking-wider flex items-center gap-2 hover:bg-[#bcaed9] transition-colors"
            >
              Reserva
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            {/* ☰ solo si el menú está cerrado */}
            {!isMenuOpen && (
              <button
                onClick={toggleMenu}
                className={`text-2xl md:hidden ${scrolled ? "text-black" : "text-white"}`}
                aria-label="Abrir menú"
              >
                ☰
              </button>
            )}
          </div>
        )}
      </header>

      {/* ---------- FORM LATERAL ---------- */}
      {isContactFormOpen && <ContactForm onClose={toggleContactForm} />}

      {/* ---------- MENÚ MÓVIL ---------- */}
      {isHome && isMenuOpen && (
        <div className="fixed inset-0 bg-[#e6dcf3] text-black z-40 animate-fade-in">
          {/* ✕ – flota siempre arriba del todo */}
          <button
            onClick={toggleMenu}
            className="fixed top-6 right-6 text-black text-3xl z-50"
            aria-label="Cerrar menú"
          >
            ✕
          </button>

          <div className="container mx-auto h-full flex flex-col py-24 px-8">
            <div className="mt-20">
              <div className="mb-4 text-sm uppercase tracking-wider">Navegación</div>
              <ul className="text-5xl space-y-6 font-medium">
                <li><a href="#inicio"  onClick={toggleMenu}>Inicio</a></li>
                <li><a href="#reiki"   onClick={toggleMenu}>Reiki</a></li>
                <li><a href="#tarifas" onClick={toggleMenu}>Tarifas</a></li>
                <li><a href="#contacto"onClick={toggleMenu}>Contacto</a></li>
              </ul>
            </div>

            <div className="mt-auto">
              <div className="text-xl mb-2">
                <a
                  href="https://www.instagram.com/patty_sena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  <span className="block text-sm uppercase tracking-wider mb-2">
                    Instagram
                  </span>
                  @pattysenareiki
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;