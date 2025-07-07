import { useState } from "react";
import ContactForm from "./ContactForm";

const PeopleAtHeart = () => {
  const [open, setOpen] = useState(false);
  const toggleForm = () => setOpen(!open);

  return (
    <section id="reiki" className="bg-[#fef9f7] py-24 px-8 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="/images/sections/presenta-1.png"
              alt="Sesión de sanación energética"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="max-w-xl">
              <p className="text-lg mb-8 text-gray-800">
                Öleo Healing Therapy nace como un espacio íntimo de cuidado y reconexión. 
                Utilizo diferentes técnicas como Reiki, armonización energética y escucha 
                profunda para acompañarte con presencia.
              </p>

              <p className="text-lg mb-8 text-gray-800">
                Cada sesión es distinta, como tú. Lo importante no es “sanar” algo, 
                sino permitir que tu cuerpo, tu energía y tu alma puedan descansar, 
                liberar, y recordar quién eres cuando estás en paz.
              </p>

              <button
                onClick={toggleForm}
                className="inline-block bg-[#C8B8E0] text-black px-10 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all"
              >
                Reservar una sesión
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario lateral */}
      {open && <ContactForm onClose={toggleForm} />}
    </section>
  );
};

export default PeopleAtHeart;