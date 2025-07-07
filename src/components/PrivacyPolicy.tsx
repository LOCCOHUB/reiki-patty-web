import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen py-24 px-6 md:px-12 lg:px-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Política de Privacidad</h1>

        <p className="mb-8 text-lg leading-relaxed">
          En Öleo Healing Therapy respetamos profundamente tu privacidad. Esta política explica qué datos recogemos, cómo los utilizamos y cuáles son tus derechos.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">1. ¿Qué información recogemos?</h2>
        <p className="mb-6 leading-relaxed">
          Solo recogemos la información que tú nos proporcionas de forma voluntaria a través del formulario de contacto o el sistema de reservas: nombre, correo electrónico, teléfono y cualquier otro dato que decidas compartir.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">2. ¿Cómo utilizamos tus datos?</h2>
        <p className="mb-6 leading-relaxed">
          Usamos tus datos únicamente para responder a tus consultas, gestionar tus reservas y ofrecerte un acompañamiento personalizado. No compartimos tu información con terceros ni enviamos comunicaciones comerciales no solicitadas.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">3. ¿Dónde se almacenan tus datos?</h2>
        <p className="mb-6 leading-relaxed">
          Los datos se almacenan de forma segura en herramientas de uso profesional como Calendly y nuestra plataforma de correo. Cumplimos con medidas de seguridad adecuadas para proteger tu información.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">4. ¿Cuáles son tus derechos?</h2>
        <p className="mb-6 leading-relaxed">
          Puedes solicitar el acceso, rectificación o eliminación de tus datos personales en cualquier momento escribiendo a&nbsp;
          <a href="mailto:reiki@loccocommittee.com" className="underline hover:opacity-70">reiki@loccocommittee.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">5. Cambios en esta política</h2>
        <p className="mb-12 leading-relaxed">
          Esta política puede actualizarse si cambian nuestras prácticas o la legislación vigente. La versión más reciente estará siempre disponible en esta página.
        </p>

        <p className="text-sm text-gray-500">
          Última actualización: 6 de julio de 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;