import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const OurApproach = () => {
  const [open, setOpen] = useState(false);
  const toggleForm = () => setOpen(!open);

  const processSteps = [
    { id: "01", title: "Inspiración y boceto inicial" },
    { id: "02", title: "Definición del estilo y concepto" },
    { id: "03", title: "Planificación y organización" },
    { id: "04", title: "Diseño de espacios y decoración" },
    { id: "05", title: "Coordinación de proveedores" },
    { id: "06", title: "Supervisión y ejecución del gran día" },
  ];

  return (
    <section
      id="servicios"
      className="py-24 px-8 md:px-12 lg:px-20 bg-white relative"
    >
      <div className="absolute left-8 md:left-12 lg:left-20 top-24 text-sm uppercase tracking-wider text-gray-600">
        (NUESTRO PROCESO)
      </div>

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Foto + lista */}
          <div>
            <img
              src="/images/sections/proceso-2.png"
              alt="Organización de boda íntima"
              className="w-full h-auto grayscale"
            />

            <ul className="mt-8 space-y-4">
              {processSteps.map((step) => (
                <li
                  key={step.id}
                  className="border-t border-gray-200 py-4 flex gap-6"
                >
                  <span className="text-sm text-gray-600">({step.id})</span>
                  <span>{step.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Texto + CTA */}
          <div className="flex flex-col justify-center">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12 leading-tight"
              >
                Nuestro enfoque está diseñado para que disfrutes de cada momento
                en el camino hacia tu boda soñada.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-xl mb-10"
            >
              Con nuestro plan de 6 etapas, priorizamos la transparencia, la
              conexión humana y la fidelidad a tu esencia. Cada paso está
              pensado para acompañarte, inspirarte y convertir tus ideas en una
              celebración única e inolvidable.
            </motion.p>

            {/* Botón que abre el mismo formulario lateral */}
            <button
              onClick={toggleForm}
              className="group inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors"
            >
              Conversemos
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Contact form lateral */}
      {open && <ContactForm onClose={toggleForm} />}
    </section>
  );
};

export default OurApproach;