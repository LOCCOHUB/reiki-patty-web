const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/sections/hero-05.png"
          alt="Boda en terraza"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-5 z-10" />

      {/* Título principal */}
      <div className="absolute top-0 left-0 w-full z-20 pt-32 md:pt-40 px-8 md:px-12 lg:px-20">
        <div className="max-w-5xl mb-6 md:mb-8">
          <h1 className="text-white text-5xl sm:text-6xl md:text-[90px] leading-tight font-medium mb-2 md:mb-4">
            CELEBRAMOS<br />
            AMOR CON
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-md">
            En Angelita & Rita Wedding Planners nos dedicamos a crear experiencias únicas que reflejan el alma de cada pareja. Escuchamos, soñamos, y creamos momentos llenos de emoción, belleza y sentido.
          </p>
        </div>
      </div>

      {/* Subtítulo lateral */}
      <div className="relative z-20 h-screen flex items-center">
        <div className="container mx-auto px-8 md:px-12 lg:px-20 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-12 md:mb-0" />
          <div className="w-full md:w-1/2">
            <h2 className="text-white text-5xl sm:text-6xl md:text-[90px] leading-tight font-medium">
              CORAZÓN<br />
              & ALMA
            </h2>
          </div>
        </div>
      </div>

      {/* Flecha de scroll */}
      <div className="absolute bottom-10 w-full z-20 flex justify-center items-center flex-col">
        <span className="text-white text-sm uppercase tracking-wider mb-2">Desliza hacia abajo</span>
        <span className="animate-bounce text-white text-2xl">⌄</span>
      </div>
    </section>
  );
};

export default Hero;