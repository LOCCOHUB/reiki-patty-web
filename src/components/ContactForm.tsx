import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative w-full max-w-3xl mx-4 md:mx-auto bg-white rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex justify-between items-start p-6 border-b border-gray-200">
            <div>
              <h2 className="text-lg font-semibold uppercase tracking-wide">
                Reserva tu sesión
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Puedes elegir fecha y hora desde el calendarioss.<br />
                Si tienes dudas, escríbenos por WhatsApp.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Calendario Calendly */}
          <div className="flex-1 overflow-y-auto p-4">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/pattytherapy/30min?hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>

          {/* Instrucciones de pago */}
          <div className="p-6 border-t border-gray-200 text-sm text-gray-700 bg-gray-50">
            <p className="mb-2">
              💸 El pago se realiza por <strong>Zelle</strong> antes de la sesión:
            </p>
            <div className="bg-white p-4 rounded shadow-sm text-sm">
              <p><strong>Nombre:</strong> Patty Sena</p>
              <p><strong>Teléfono:</strong> (786) 707-6843</p>
              <p className="mt-2 text-xs text-gray-500">
                *Si necesitas otro método de pago, contáctanos por WhatsApp después de reservar.
              </p>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp flotante */}
        <a
          href="https://wa.me/17867076843"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.968 7.968 0 008 .001 7.968 7.968 0 002.399 2.326a7.942 7.942 0 00-1.95 5.252 7.94 7.94 0 001.11 4.08L.001 16l4.36-1.145a7.94 7.94 0 003.64.927 7.968 7.968 0 005.601-2.326 7.942 7.942 0 002.326-5.601 7.942 7.942 0 00-2.326-5.529zM8 14.616c-1.17 0-2.305-.307-3.29-.888l-.235-.138-2.59.68.69-2.526-.152-.248A6.6 6.6 0 011.375 8a6.625 6.625 0 1113.25 0A6.625 6.625 0 018 14.616zm3.342-4.671l-1.011-.496c-.137-.067-.238-.12-.34.12-.098.238-.39.496-.48.596-.087.099-.173.112-.31.037-.138-.068-.583-.215-1.11-.687a4.2 4.2 0 01-.79-.937c-.08-.138-.008-.212.06-.28.061-.06.138-.157.206-.235.07-.078.093-.136.138-.22.046-.085.022-.162-.008-.23l-.496-1.2c-.13-.308-.26-.265-.382-.27h-.326c-.12 0-.23.03-.34.138-.11.11-.45.438-.45 1.07s.462 1.242.526 1.328c.068.085.91 1.389 2.21 1.949.309.133.55.213.737.272.31.099.592.085.816.051.25-.037.76-.31.867-.61.106-.298.106-.555.075-.61-.03-.055-.11-.085-.23-.14z" />
          </svg>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;