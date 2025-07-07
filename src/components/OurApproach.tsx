import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const OurApproach = () => {
  const [open, setOpen] = useState(false);
  const toggleForm = () => setOpen(!open);

  const sessionFlow = [
    { id: "01", title: "Bienvenida y aterrizaje suave" },
    { id: "02", title: "Espacio de escucha y respiración" },
    { id: "03", title: "Imposición de manos y canalización" },
    { id: "04", title: "Silencio integrador y calma profunda" },
    { id: "05", title: "Cierre intuitivo y acompañamiento" },
    { id: "06", title: "Recomendaciones y seguimiento" },
  ];

  return (
    <section
      id="sesiones"
      className="py-24 px-8 md:px-12 lg:px-20 bg-[#fef9f7] relative"
    >
      <div className="absolute left-8 md:left-12 lg:left-20 top-24 text-sm uppercase tracking-wider text-gray-600">
        (UNA SESIÓN CON PATTY)
      </div>

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Imagen + pasos */}
          <div>
            <img
              src="/images/sections/our_1.png"
              alt="Sesión de reiki en calma"
              className="w-full h-auto object-cover rounded-xl shadow-md"
            />

            <ul className="mt-8 space-y-4">
              {sessionFlow.map((step) => (
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
                Cada sesión es una invitación a habitar tu cuerpo, tu energía y tu paz.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-xl mb-10 text-gray-800"
            >
              Aunque cada persona es distinta, suelo seguir un flujo de acompañamiento que crea un espacio amoroso, sereno y sin juicio. Todo puede cambiar, pero siempre desde la presencia.
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
        </div>
      </div>

      {/* Formulario lateral */}
      {open && <ContactForm onClose={toggleForm} />}
    </section>
  );
};

export default OurApproach;