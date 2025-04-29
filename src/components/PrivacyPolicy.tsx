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
          En Angelita & Rita nos tomamos muy en serio tu privacidad. Esta política explica qué datos recopilamos, cómo los usamos y tus derechos.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">1. ¿Qué información recogemos?</h2>
        <p className="mb-6 leading-relaxed">
          Solo recogemos la información que tú nos proporcionas voluntariamente a través del formulario de contacto: nombre, email, teléfono y detalles del evento.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">2. ¿Cómo usamos tu información?</h2>
        <p className="mb-6 leading-relaxed">
          Utilizamos tus datos exclusivamente para responder a tus consultas y ofrecerte nuestros servicios. Nunca compartimos tu información con terceros sin tu consentimiento.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">3. ¿Dónde se almacenan tus datos?</h2>
        <p className="mb-6 leading-relaxed">
          Los datos se almacenan de forma segura en nuestra plataforma de gestión de correos y se protegen siguiendo buenas prácticas de seguridad.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">4. ¿Cuáles son tus derechos?</h2>
        <p className="mb-6 leading-relaxed">
          Puedes solicitar el acceso, modificación o eliminación de tus datos personales en cualquier momento enviándonos un correo a hola@angelitayrita.com.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">5. Actualizaciones de esta política</h2>
        <p className="mb-12 leading-relaxed">
          Esta política puede actualizarse para reflejar cambios legales o de servicio. La versión más reciente estará siempre disponible en esta página.
        </p>

        <p className="text-sm text-gray-500">
          Última actualización: 27 de abril de 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;