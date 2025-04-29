import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 min-h-screen bg-background text-black">
      
      {/* COLUMNA IZQUIERDA (texto + 404) */}
      <div className="md:col-span-7 flex flex-col justify-between px-8 md:px-14 py-10">
        
        {/* Mensaje + botón */}
        <div>
          <p className="max-w-xs md:max-w-sm mb-8 leading-snug">
            Por aquí vamos mal...<br />
            Te llevamos al lugar correcto.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full
                       uppercase text-xs tracking-wider hover:bg-opacity-90 transition"
          >
            <span>Volver al inicio</span><span>→</span>
          </Link>
        </div>

        {/* 404 gigantesco */}
        <h1 className="text-[24vw] md:text-[15vw] font-bold leading-none tracking-tighter">
          404
        </h1>
      </div>

      {/* COLUMNA DERECHA (foto) */}
      <div className="md:col-span-5 overflow-hidden p-4 flex items-center justify-center">
        <img
          src="/images/sections/404-image.jpg"
          alt="Foto rota de pareja"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>

    </section>
  );
};

export default NotFound;