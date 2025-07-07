import { motion } from "framer-motion";

const FooterNav = () => {
  return (
    <section className="py-24 px-8 md:px-12 lg:px-20 bg-background border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Foto cuadrada */}
          <div className="md:col-span-5">
            <img
              src="/images/sections/diploma-reiki-patty.jpg"
              alt="Detalle de espacio Öleo Healing"
              className="w-full h-auto aspect-square object-cover rounded-xl"
            />
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Claim espiritual animado */}
              <div className="md:col-span-6">
                <div className="mb-4 text-sm uppercase tracking-wider">(TE ESPERO)</div>
                <div className="overflow-hidden">
                  <motion.h3
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-extrabold leading-tight"
                  >
                    Un espacio<br />
                    para sanar<br />
                    desde dentro.
                  </motion.h3>
                </div>
              </div>

              {/* Contacto rápido */}
              <div className="md:col-span-6">
                <div className="mb-8">
                  <div className="mb-4 text-sm uppercase tracking-wider">(CONTACTO)</div>
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>T:</strong> +1&nbsp;(786)&nbsp;707&nbsp;6843
                    </p>
                    <p>
                      <strong>H:</strong> Consulta disponibilidad en el calendario
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  Sesiones presenciales en Miami · Terapias online disponibles en todo el mundo.
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