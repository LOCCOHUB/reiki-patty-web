const PeopleAtHeart = () => {
  const handleScrollToServices = () => {
    const section = document.getElementById('servicios');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-background py-24 px-8 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="/images/sections/down-hero.png"
              alt="Pareja celebrando una boda íntima"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="max-w-xl">
              <p className="text-lg mb-8">
                En Angelita & Rita diseñamos bodas con alma. Cada pareja tiene su historia, su energía y sus sueños: nosotras los escuchamos y los convertimos en experiencias únicas.
              </p>

              <p className="text-lg mb-8">
                Creamos celebraciones donde cada detalle tiene sentido y cada momento se vive con emoción. Nuestra visión es sencilla: hacer que el día más importante de tu vida sea también el más auténtico.
              </p>

              <button
                onClick={handleScrollToServices}
                className="inline-block bg-black text-white px-10 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all"
              >
                Ver nuestros servicios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleAtHeart;