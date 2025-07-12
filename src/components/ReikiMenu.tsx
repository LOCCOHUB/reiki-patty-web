import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const ReikiMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleForm = () => setOpen(!open);

  const services = [
    {
      title: "Sesión individual en tu espacio",
      description: "Terapia Reiki + espacio para hablar antes/después.",
      duration: "2h aprox.",
      price: "$110 USD",
    },
    {
      title: "Paquete de 3 sesiones",
      description: "Tres sesiones de 2h con continuidad terapéutica.",
      duration: "6h aprox. total",
      price: "$295 USD (equivale a 11% de descuento)",
    },
    {
      title: "Terapia en casa del cliente (a domicilio)",
      description: "Incluye traslado + adaptación al entorno.",
      duration: "2h aprox.",
      price: "$130 USD",
    },
    {
      title: "Armonización energética",
      description: "Limpieza energética profunda con símbolos, sonidos y herramientas.",
      duration: "1.5 - 2h",
      price: "$140 USD (según tamaño del espacio)",
    },
    {
      title: "Especial: Reiki + armonización de ty espacio",
      description: "Terapia en el lugar + limpieza del hogar.",
      duration: "3 - 4h total",
      price: "$230 USD",
    },
    {
      title: "Terapia a distancia",
      description: "Sesión de Reiki a distancia, con preparación previa y cierre personalizado.",
      duration: "A consultar",
      price: "-",
    },
  ];

  return (
    <section id="tarifas" className="py-24 px-8 md:px-12 lg:px-20 bg-[#fef9f7] relative">
      <div className="absolute left-8 md:left-12 lg:left-20 top-24 text-sm uppercase tracking-wider text-gray-600">
        (TARIFAS Y SERVICIOS)
      </div>

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12 leading-tight"
            >
              Öleo Healing Therapy es un acto de cuidado. Aquí tienes mis propuestas.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-xl mb-10 text-gray-800"
            >
              Las sesiones pueden adaptarse según tu situación.<br />
              Escríbeme si tienes dudas o necesitas algo especial.
            </motion.p>

            <button
              onClick={toggleForm}
              className="group inline-flex items-center gap-2 bg-[#C8B8E0] text-black px-10 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors"
            >
              Reservar sesión
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <div>
            <ul className="space-y-8">
              {services.map((service, index) => (
                <li key={index} className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                  <p className="text-gray-700 mb-1">{service.description}</p>
                  <p className="text-sm text-gray-600 italic">{service.duration}</p>
                  <p className="text-lg font-medium mt-1">{service.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {open && <ContactForm onClose={toggleForm} />}
    </section>
  );
};

export default ReikiMenu;