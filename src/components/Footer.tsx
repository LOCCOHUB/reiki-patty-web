import { Link } from "react-router-dom"; // <-- Esto lo añadimos arriba

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-8 md:px-12 lg:px-20 bg-white text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Copyright */}
          <div className="md:col-span-6 flex items-center">
            <div>
              <p className="text-xs text-gray-600">© {year} Angelita &amp; Rita</p>
              <p className="text-xs text-gray-600">Madrid · Worldwide</p>
            </div>
          </div>

          {/* Link legal */}
          <div className="md:col-span-2 space-y-1">
            <Link
              to="/privacidad"
              className="text-xs uppercase tracking-wider text-gray-600 hover:text-black"
            >
              Política de Privacidad
            </Link>
          </div>

          {/* Instagram */}
          <div className="md:col-span-2">
            <a
              href="https://www.instagram.com/angelitayrita/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider text-gray-600 hover:text-black"
            >
              Instagram
            </a>
          </div>

          {/* Créditos */}
          <div className="md:col-span-2 text-right">
            <p className="text-xs text-gray-600">
              Made&nbsp;by&nbsp;
              <a
                href="https://loccocommittee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                Locco Committee®
              </a>
            </p>
          </div>
        </div>

        {/* Logo grande AR */}
        <div className="mt-16 md:mt-32">
          <div className="font-bold leading-none flex items-baseline space-x-1 tracking-tighter">
            <span className="text-[200px] md:text-[240px]">A</span>
            <span className="text-[90px] md:text-[80px]">&amp;</span>
            <span className="text-[200px] md:text-[240px]">R</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;