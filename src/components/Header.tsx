import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

const Header = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const isHome = pathname === "/";

  /* ---------- handlers ---------- */
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
            Angelita &amp; Rita
          </Link>
        </div>

        {/* Menú desktop (solo home) */}
        {isHome && (
          <nav
            className={`hidden md:flex gap-8 text-xs uppercase tracking-wider ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <a href="#inicio"     className="hover:opacity-70">Inicio</a>
            <a href="#servicios"  className="hover:opacity-70">Servicios</a>
            <a href="#historia"   className="hover:opacity-70">Nuestra Historia</a>
          </nav>
        )}

        {/* Botón + hamburguesa (solo home) */}
        {isHome && (
          <div className="flex items-center gap-4">
            {/* === BOTÓN “Hablemos” con desplazamiento de flecha === */}
            <button
              onClick={toggleContactForm}
              className="group bg-black text-white py-3 px-6 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-opacity-90 transition-colors"
            >
              Hablemos
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            {/* Menú móvil */}
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

      {/* Contact form */}
      {isContactFormOpen && <ContactForm onClose={toggleContactForm} />}

      {/* Menú lateral móvil */}
      {isHome && isMenuOpen && (
        <div className="fixed inset-0 bg-black text-white z-40 animate-fade-in">
          <div className="container mx-auto h-full flex flex-col py-24 px-8">
            <div className="mt-20">
              <div className="mb-4 text-sm uppercase tracking-wider">Navegación</div>
              <ul className="text-5xl space-y-6 font-medium">
                <li><a href="#inicio"     onClick={toggleMenu}>Inicio</a></li>
                <li><a href="#servicios"  onClick={toggleMenu}>Servicios</a></li>
                <li><a href="#historia"   onClick={toggleMenu}>Nuestra Historia</a></li>
              </ul>
            </div>

            <div className="mt-auto">
              <div className="text-xl mb-2">
                <a
                  href="https://instagram.com/angelita.rita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  <span className="block text-sm uppercase tracking-wider mb-2">
                    Instagram
                  </span>
                  @angelitayrita
                </a>
              </div>
            </div>

            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white text-3xl"
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