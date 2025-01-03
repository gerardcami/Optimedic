import { useState, useEffect } from "react";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-200 text-gray-800 p-4 z-50 border-t border-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          Utilizamos cookies para mejorar tu experiencia. Puedes aceptar,
          rechazar o leer más sobre nuestra política.
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className="px-4 py-2 border border-gray-800 rounded hover:bg-gray-100"
          >
            Aceptar
          </button>
          <button
            onClick={handleReject}
            className="px-4 py-2 border border-gray-800 rounded hover:bg-gray-100"
          >
            Rechazar
          </button>
          <a
            href="/docs/cookie-policy.pdf"
            target="_blank"
            className="px-4 py-2 border border-gray-800 rounded hover:bg-gray-100"
          >
            Política de Cookies
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;
