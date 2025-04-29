import { motion } from "framer-motion";

const FooterNav = () => {
  return (
    <section className="py-24 px-8 md:px-12 lg:px-20 bg-background border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Foto cuadrada */}
          <div className="md:col-span-5">
            <img
              src="/images/sections/footer-nav-01.png"
              alt="Detalle de boda organizada por Angelita & Rita"
              className="w-full h-auto aspect-square object-cover"
            />
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Claim grande animado */}
              <div className="md:col-span-6">
                <div className="mb-4 text-sm uppercase tracking-wider">(OS ESPERAMOS)</div>
                <div className="overflow-hidden">
                  <motion.h3
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl font-extrabold leading-tight uppercase"
                  >
                    Amor&nbsp;que<br />
                    emociona,<br />
                    historias&nbsp;<br />
                    reales.
                  </motion.h3>
                </div>
              </div>

              {/* Contacto rápido */}
              <div className="md:col-span-6">
                <div className="mb-8">
                  <div className="mb-4 text-sm uppercase tracking-wider">(CONTACTO)</div>
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>E:</strong>{" "}
                      <a
                        href="mailto:info@angelitayrita.com"
                        className="hover:opacity-70 transition-opacity"
                      >
                        info@angelitayrita.com
                      </a>
                    </p>
                    <p>
                      <strong>T:</strong> +34&nbsp;665&nbsp;377&nbsp;391
                    </p>
                    <p>
                      <strong>H:</strong> L-V&nbsp;·&nbsp;10:00 – 17:00
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  Trabajamos en toda España y destinos internacionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterNav;