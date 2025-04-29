import { useState } from 'react';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    budget: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  const [success, setSuccess] = useState(false); // 👈 Nuevo: para mensaje de éxito

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'name' || name === 'email') {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateFirstStep = () => {
    let isValid = true;
    const newErrors = { name: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, introduce tu nombre.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, introduce tu email.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Introduce un email válido.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNextStep = () => {
    if (validateFirstStep()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xjkwkepl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          budget: '',
          date: '',
          message: ''
        });
        setTimeout(() => {
          onClose(); // Cierra el formulario a los 3 segundos
          setSuccess(false);
        }, 3000);
      } else {
        alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión. Por favor, prueba más tarde.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="w-full sm:w-full md:w-[550px] h-full overflow-y-auto bg-black text-white animate-slide-in-right">
        <div className="p-8 md:p-10 flex flex-col h-full">

          {/* Si envío exitoso */}
          {success ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-2xl mb-4">¡Gracias!</h2>
              <p className="text-sm">Tu mensaje ha sido enviado. Nos pondremos en contacto contigo muy pronto.</p>
            </div>
          ) : (
            <>
              {step === 1 && (
                // PRIMERA PANTALLA
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="uppercase text-sm tracking-wider">Solicitud de Información</h2>
                    <button onClick={onClose} className="text-white uppercase text-sm hover:opacity-70 transition-opacity">
                      Cerrar
                    </button>
                  </div>

                  <div className="mb-8">
                    <p className="mb-4">
                      Cuéntanos un poco sobre ti. Queremos asegurarnos de que tu día sea verdaderamente inolvidable.
                    </p>
                  </div>

                  <div className="mt-8 border-t border-gray-800 pt-8 pb-4">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="uppercase text-sm">Tus datos personales</h3>
                      <span className="text-sm">({step}/2)</span>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="name" className="block text-sm mb-2">
                        Nombre <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border-none focus:outline-none focus:ring-1 focus:ring-white"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div className="mb-8">
                      <label htmlFor="email" className="block text-sm mb-2">
                        Correo electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border-none focus:outline-none focus:ring-1 focus:ring-white"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="mb-8">
                      <label htmlFor="phone" className="block text-sm mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border-none focus:outline-none focus:ring-1 focus:ring-white"
                      />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="rounded-full bg-white text-black py-3 px-8 uppercase text-sm tracking-wider hover:bg-opacity-90 transition-all float-right"
                    >
                      Siguiente →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                // SEGUNDA PANTALLA
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="uppercase text-sm tracking-wider">Detalles del Evento</h2>
                    <button onClick={onClose} className="text-white uppercase text-sm hover:opacity-70 transition-opacity">
                      Cerrar
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                    <div className="border-t border-gray-800 py-6 mb-4">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="uppercase text-sm">Detalles</h3>
                        <span className="text-sm">({step}/2)</span>
                      </div>

                      <div className="mb-8">
                        <label htmlFor="eventType" className="block text-sm mb-2">
                          Tipo de Celebración
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full p-3 bg-gray-800 border-none focus:outline-none focus:ring-1 focus:ring-white"
                        >
                          <option value="">Selecciona tipo de evento</option>
                          <option value="boda">Boda</option>
                          <option value="boda-destino">Boda de destino</option>
                          <option value="evento-privado">Evento privado</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      <div className="mb-8">
                        <label htmlFor="budget" className="block text-sm mb-2">
                          Presupuesto Estimado
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full p-3 bg-gray-800 border-none focus:outline-none focus:ring-1 focus:ring-white"
                        >
                          <option value="">Selecciona un rango</option>
                          <option value="menos-30k">Menos de 30.000€</option>
                          <option value="30k-60k">30.000€ - 60.000€</option>
                          <option value="60k-100k">60.000€ - 100.000€</option>
                          <option value="mas-100k">Más de 100.000€</option>
                        </select>
                      </div>

                      <div className="mb-8">
                        <label htmlFor="date" className="block text-sm mb-2">
                          Fecha Estimada del Evento
                        </label>
                        <input
                          type="text"
                          id="date"
                          name="date"
                          placeholder="Mes / Año"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full p-3 bg-gray-800 border-none focus:outline-none focus:ring-1 focus:ring-white"
                        />
                      </div>

                      <div className="mb-8">
                        <label htmlFor="message" className="block text-sm mb-2">
                          Cuéntanos más
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full p-3 bg-gray-800 border-none focus:outline-none focus:ring-1 focus:ring-white resize-none"
                        />
                      </div>
                    </div>

                    <div className="mt-auto flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-white hover:underline transition-all"
                      >
                        ← Atrás
                      </button>
                      <button
                        type="submit"
                        className="rounded-full bg-white text-black py-3 px-8 uppercase text-sm tracking-wider hover:bg-opacity-90 transition-all"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Overlay oscuro al fondo */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[-1]"
        onClick={onClose}
      />
    </div>
  );
};

export default ContactForm;