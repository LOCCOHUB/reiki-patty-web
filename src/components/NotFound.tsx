import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-background text-black">
      
      {/* COLUMNA IZQUIERDA */}
      <div className="flex flex-col justify-center md:w-7/12 px-8 md:px-14 py-10">
        
        <div className="mb-10">
          <p className="max-w-xs md:max-w-sm mb-8 leading-snug text-lg md:text-xl">
            Esta energía se ha desviado…<br />
            Volvamos al camino.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full
                       uppercase text-xs tracking-wider hover:bg-opacity-90 transition-all"
          >
            <span>Volver al inicio</span><span>→</span>
          </Link>
        </div>

        <h1 className="text-[24vw] md:text-[15vw] font-bold leading-none tracking-tighter">
          404
        </h1>
      </div>

      {/* COLUMNA DERECHA */}
      <div className="md:w-5/12 flex items-center justify-center p-4">
        <img
          src="/images/sections/pareja-404.png"
          alt="Camino perdido"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>

    </section>
  );
};

export default NotFound;