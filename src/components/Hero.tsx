const Hero = () => {
  const useVideoBackground = true;
  const videoSrc = "/images/videos/hero-1.mp4";
  const desktopImage = "/images/sections/hero_prov-2.png";
  const mobileImage = "/images/sections/hero_prov-2.png";

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo dinámico */}
      <div className="absolute inset-0 z-0">
        {useVideoBackground ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta vídeos.
          </video>
        ) : (
          <>
            <img
              src={desktopImage}
              alt="Sesión de terapia energética"
              className="w-full h-full object-cover hidden md:block"
            />
            <img
              src={mobileImage}
              alt="Sesión de terapia energética móvil"
              className="w-full h-full object-cover md:hidden"
            />
          </>
        )}
      </div>

      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />

      {/* Texto principal */}
      <div className="absolute top-0 left-0 w-full z-20 pt-32 md:pt-40 px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-5xl mb-6 md:mb-8 animate-fade-in-up">
          <h1 className="text-white text-4xl sm:text-5xl md:text-[80px] leading-tight font-medium mb-4">
            CONECTA<br />
            CON TU ESENCIA
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-md opacity-90">
            Öleo Healing Therapy es un espacio terapéutico en donde convergen Reiki, energía, palabra y presencia. Aquí te acompañamos a recuperar tu centro y tu paz interior.
          </p>
        </div>
      </div>

      {/* Flecha scroll */}
      <div className="absolute bottom-10 w-full z-20 flex justify-center items-center flex-col">
        <span className="text-white text-sm uppercase tracking-wider mb-2">
          Desliza hacia abajo
        </span>
        <span className="animate-bounce text-white text-2xl">⌄</span>
      </div>
    </section>
  );
};

export default Hero;