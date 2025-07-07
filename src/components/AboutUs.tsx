import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="historia" className="py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="w-full mx-auto grid grid-cols-12 gap-y-16 gap-x-8">

        {/* Retrato vertical de Patty */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-4 md:col-span-3 lg:col-span-2 md:col-start-10"
        >
          <img
            src="/images/sections/entrada_oleo_1.jpg"
            alt="Retrato de Patty Sena"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Texto emocional */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="col-span-12 md:col-span-4 flex flex-col justify-center"
        >
          <h3 className="text-xl uppercase tracking-wider mb-4 text-gray-500">
            (UN CAMINO DE LUZ)
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 space-y-6">
            <span>
              Öleo Healing Therapy nace como una forma de honrar el cuerpo, la energía y el alma.
            </span>
            <br />
            <span>
              Acompaño a mujeres y hombres en procesos de sanación emocional, energética y espiritual,
              integrando Reiki con otras técnicas de luz y conexión profunda.
            </span>
            <br />
            <span>
              Cada sesión es un espacio íntimo, seguro y amoroso donde puedes soltar, armonizar y volver
              a escucharte con claridad.
            </span>
            <br />
            <span className="italic text-gray-600">
              “No vengo a enseñarte nada nuevo, sino a recordarte quién eres.”
            </span>
          </p>
        </motion.div>

        {/* Imagen amplia horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="col-span-12 md:col-span-10 md:col-start-3"
        >
          <img
            src="/images/sections/about-1.png"
            alt="Espacio de Reiki en calma"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;