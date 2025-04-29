import { motion } from "framer-motion";

const FeaturedWorks = () => {
  const featuredProjects = [
    {
      id: '01',
      name: 'Naturaleza & Composición',
      year: '2024',
      image: '/images/sections/boda-01.png',
      colSpan: 'md:col-span-7',
      aspectRatio: 'aspect-[16/10]',
      marginTop: 'mt-0',
    },
    {
      id: '02',
      name: 'Luz & Textura',
      year: '2023',
      image: '/images/sections/boda-02.png',
      colSpan: 'md:col-span-5',
      aspectRatio: 'aspect-[3/4]',
      marginTop: 'mt-32',
    },
    {
      id: '03',
      name: 'Mediterráno & Siempre',
      year: '2022',
      image: '/images/sections/hero-03.png',
      colSpan: 'md:col-span-6',
      aspectRatio: 'aspect-[4/3]',
      marginTop: 'mt-12',
    },
    {
      id: '04',
      name: 'Terracota & Textura',
      year: '2022',
      image: '/images/sections/boda-04.png',
      colSpan: 'md:col-span-6',
      aspectRatio: 'aspect-[16/9]',
      marginTop: 'mt-0',
    },
    {
      id: '05',
      name: 'Flores & Refugio',
      year: '2022',
      image: '/images/sections/boda-05.png',
      colSpan: 'md:col-span-8',
      aspectRatio: 'aspect-[16/9]',
      marginTop: 'mt-20',
    },
    {
      id: '06',
      name: 'Silencio & Belleza',
      year: '2020',
      image: '/images/sections/boda-6.png',
      colSpan: 'md:col-span-4',
      aspectRatio: 'aspect-[3/4]',
      marginTop: 'mt-0',
    },
  ];

  return (
    <section className="py-24 bg-background">
      {/* Desktop Layout */}
      <div className="hidden md:block w-full px-4 md:px-8 lg:px-16">
        <motion.div 
          className="grid grid-cols-12 gap-x-8 gap-y-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2, // <-- el delay entre imágenes
              },
            },
          }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`relative overflow-hidden ${project.colSpan} ${project.marginTop}`}
            >
              <div className={`${project.aspectRatio} w-full`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <span className="block text-sm text-gray-500">({project.id})</span>
                <span className="block text-lg text-black font-medium">{project.name}</span>
                <span className="block text-sm text-gray-500">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-6">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mb-12 overflow-hidden"
            >
              <div className="aspect-[3/2] w-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <span className="block text-sm text-gray-500">({project.id})</span>
                <span className="block text-base text-black font-medium">{project.name}</span>
                <span className="block text-sm text-gray-500">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorks;