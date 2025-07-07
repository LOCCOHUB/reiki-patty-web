import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

const Header = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const toggleContactForm = () => {
    setIsContactFormOpen(!isContactFormOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isContactFormOpen) setIsContactFormOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <header
        className={`fixed top-6 left-6 right-6 z-50 flex justify-between items-center transition-colors duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        {/* Logo */}
        <div
          className={`text-lg md:text-2xl font-bold tracking-tight uppercase ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Link to="/" className="hover:opacity-70 transition-opacity">
            Öleo Healing
          </Link>
        </div>

        {/* Menú desktop */}
        {isHome && (
          <nav
            className={`hidden md:flex gap-8 text-xs uppercase tracking-wider ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <a href="#inicio" className="hover:opacity-70">Inicio</a>
            <a href="#reiki" className="hover:opacity-70">Qué es Öleo</a>
            <a href="#sesiones" className="hover:opacity-70">Sesiones</a>
            <a href="#tarifas" className="hover:opacity-70">Tarifas</a>
            <a href="#historia" className="hover:opacity-70">Sobre mí</a>
          </nav>
        )}

        {/* Botón y hamburguesa */}
        {isHome && (
          <div className="flex items-center gap-4">
            <button
              onClick={toggleContactForm}
              className="group bg-[#C8B8E0] text-black py-3.5 px-7 rounded-full text-sm md:text-base uppercase tracking-wider flex items-center gap-2 hover:bg-[#bcaed9] transition-colors"
            >
              Reserva cita
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <button
              onClick={toggleMenu}
              className={`text-2xl md:hidden ${scrolled ? "text-black" : "text-white"}`}
              aria-label="Abrir menú"
            >
              ☰
            </button>
          </div>
        )}
      </header>

      {/* Contact Form */}
      {isContactFormOpen && <ContactForm onClose={toggleContactForm} />}

      {/* Menú móvil */}
      {isHome && isMenuOpen && (
        <div className="fixed inset-0 bg-[#e6dcf3] text-black z-40 animate-fade-in">
          <div className="container mx-auto h-full flex flex-col py-24 px-8">
            <div className="mt-20">
              <div className="mb-4 text-sm uppercase tracking-wider">Navegación</div>
              <ul className="text-5xl space-y-6 font-medium">
                <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
                <li><a href="#reiki" onClick={toggleMenu}>Qué es Öleo</a></li>
                <li><a href="#sesiones" onClick={toggleMenu}>Sesiones</a></li>
                <li><a href="#tarifas" onClick={toggleMenu}>Tarifas</a></li>
                <li><a href="#historia" onClick={toggleMenu}>Sobre mí</a></li>
              </ul>
            </div>

            <div className="mt-auto">
              <div className="text-xl mb-2">
                <a
                  href="https://instagram.com/amarureiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  <span className="block text-sm uppercase tracking-wider mb-2">
                    Instagram
                  </span>
                  @amarureiki
                </a>
              </div>
            </div>

            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-black text-3xl"
              aria-label="Cerrar menú"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;