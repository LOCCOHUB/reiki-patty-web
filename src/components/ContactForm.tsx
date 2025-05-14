// src/components/ContactForm.tsx
import { useState } from 'react';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    budget: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({ name: '', email: '' });

  /* ---------- handlers ---------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'name' || name === 'email')
      setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateFirstStep = () => {
    const newErrors = { name: '', email: '' };
    let ok = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, introduce tu nombre.';
      ok = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, introduce tu email.';
      ok = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Introduce un email válido.';
      ok = false;
    }

    setErrors(newErrors);
    return ok;
  };

  const handleNextStep = () => {
    if (validateFirstStep()) setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await fetch('https://formspree.io/f/xjkwkepl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (resp.ok) {
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
          onClose();
          setSuccess(false);
          setStep(1);
        }, 3000);
      } else alert('Hubo un error al enviar el formulario.');
    } catch {
      alert('Error de conexión. Intenta de nuevo.');
    }
  };

  /* ---------- render ---------- */
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="w-full md:w-[550px] h-full overflow-y-auto bg-black text-white animate-slide-in-right">
        <div className="p-8 md:p-10 flex flex-col h-full">

          {/* ---- Mensaje de éxito ---- */}
          {success ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-2xl mb-4">¡Gracias!</h2>
              <p className="text-sm">
                Tu mensaje ha sido enviado. Nos pondremos en contacto muy pronto.
              </p>
            </div>
          ) : (
            <>
              {/* ================= PASO 1 ================= */}
              {step === 1 && (
                <div className="flex flex-col h-full">
                  <header className="flex justify-between items-center mb-8">
                    <h2 className="uppercase text-sm tracking-wider">
                      Solicitud de Información
                    </h2>
                    <button onClick={onClose} className="text-sm hover:opacity-70">
                      Cerrar
                    </button>
                  </header>

                  <p className="mb-8">
                    Cuéntanos un poco sobre ti. Queremos asegurarnos de que tu día
                    sea verdaderamente inolvidable.
                  </p>

                  {/* ---- Inputs ---- */}
                  <div className="border-t border-gray-800 pt-8 space-y-8 flex-1">
                    <div>
                      <label className="block text-sm mb-2">
                        Nombre <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 focus:ring-white focus:outline-none"
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm mb-2">
                        Correo electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 focus:ring-white focus:outline-none"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Teléfono</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 focus:ring-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-auto text-right">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="rounded-full bg-white text-black py-3 px-8 text-sm uppercase tracking-wider hover:bg-opacity-90"
                    >
                      Siguiente →
                    </button>
                  </div>
                </div>
              )}

              {/* ================= PASO 2 ================= */}
              {step === 2 && (
                <div className="flex flex-col h-full">
                  <header className="flex justify-between items-center mb-8">
                    <h2 className="uppercase text-sm tracking-wider">Detalles del Evento</h2>
                    <button onClick={onClose} className="text-sm hover:opacity-70">
                      Cerrar
                    </button>
                  </header>

                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                    <div className="border-t border-gray-800 py-6 space-y-8 flex-1">
                      {/* Tipo de evento */}
                      <div>
                        <label htmlFor="eventType" className="block text-sm mb-2">
                          Tipo de Celebración
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full p-3 bg-gray-800 focus:ring-white focus:outline-none"
                        >
                          <option value="">Selecciona tipo de evento</option>
                          <option value="boda">Boda</option>
                          <option value="boda-destino">Boda de destino</option>
                          <option value="evento-privado">Evento privado</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      {/* Presupuesto */}
                      <div>
                        <label htmlFor="budget" className="block text-sm mb-2">
                          Presupuesto Estimado
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full p-3 bg-gray-800 focus:ring-white focus:outline-none"
                        >
                          <option value="">Selecciona un rango</option>
                          <option value="menos-1200">Menos de 1 200 €</option>
                          <option value="1200-2000">1 200 € – 2 000 €</option>
                          <option value="2000-3000">2 000 € – 3 000 €</option>
                          <option value="mas-3000">Más de 3 000 €</option>
                        </select>
                      </div>

                      {/* Fecha */}
                      <div>
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
                          className="w-full p-3 bg-gray-800 focus:ring-white focus:outline-none"
                        />
                      </div>

                      {/* Mensaje */}
                      <div>
                        <label htmlFor="message" className="block text-sm mb-2">
                          Cuéntanos más
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full p-3 bg-gray-800 resize-none focus:ring-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mt-auto flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="hover:underline"
                      >
                        ← Atrás
                      </button>
                      <button
                        type="submit"
                        className="rounded-full bg-white text-black py-3 px-8 text-sm uppercase tracking-wider hover:bg-opacity-90"
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

      {/* Clic en overlay = cerrar */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[-1]"
        onClick={onClose}
      />
    </div>
  );
};

export default ContactForm;