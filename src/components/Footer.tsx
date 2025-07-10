import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-8 md:px-12 lg:px-20 bg-background text-black border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Copyright */}
          <div className="md:col-span-6 flex items-center">
            <div>
              <p className="text-xs text-gray-600">© {year} Öleo Healing Therapy</p>
              <p className="text-xs text-gray-600">Miami · Online · Presencial</p>
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
              href="https://www.instagram.com/patty_sena/"
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
      </div>
    </footer>
  );
};

export default Footer;