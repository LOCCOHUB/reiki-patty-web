import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="historia" className="py-32 px-6 md:px-12 lg:px-20 bg-background">
      {/* Usamos width completa para que la foto pueda crecer */}
      <div className="w-full mx-auto grid grid-cols-12 gap-y-16 gap-x-8">
        {/* Retrato vertical pequeño */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-4 md:col-span-3 lg:col-span-2 md:col-start-10"
        >
          <img
            src="/images/sections/angelita-about-1.jpeg"
            alt="Retrato de Angelita"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="col-span-12 md:col-span-4 flex flex-col justify-center"
        >
          <h3 className="text-xl uppercase tracking-wider mb-4 text-gray-500">
            (NUESTRA HISTORIA)
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Angelita &amp; Rita nació como un juego de nombres en familia y
            acabó convirtiéndose en una firma que diseña bodas con carácter
            propio. Hoy&nbsp;Angela lidera el estudio creativo diseñando
            experiencias que combinan emoción, estilo y ejecución impecable,
            mientras “Rita” simboliza la parte soñadora que nos recuerda por qué
            cada detalle importa. Nuestro objetivo: que vuestra celebración
            hable de vosotros y permanezca viva en la memoria de todos.
          </p>
        </motion.div>

        {/* Foto horizontal grande – ahora 10/12 cols para ocupar más a la derecha */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="col-span-12 md:col-span-10 md:col-start-3"
        >
          <img
            src="/images/sections/nosotros-03.png"
            alt="Instantánea de una boda organizada por Angelita & Rita"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;