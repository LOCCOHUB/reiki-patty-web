import { motion } from "framer-motion";

const InspirationBanner = () => {
  return (
    <section className="py-36 px-8 md:px-12 lg:px-20 bg-background relative">
      <div className="container mx-auto">
        {/* Título grande alineado a la derecha */}
        <div className="flex justify-end overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-9xl font-medium max-w-7xl text-right leading-tight"
          >
            ES TODO TEMPORAL<br />
            PERO YA VOY<br />
            AVANZANDO
          </motion.h2>
        </div>

        {/* Párrafo inspirador alineado a la derecha */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-12 text-right text-gray-700 text-base md:text-lg max-w-2xl ml-auto"
        >
          Reiki es una invitación a volver al cuerpo, a la presencia y a la verdad interior.
          <br />
          Un encuentro sutil donde lo invisible también importa.
        </motion.p>
      </div>
    </section>
  );
};

export default InspirationBanner;