import { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import logo from "../assets/logo-Avengers.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/50 backdrop-blur-md z-50">
      <div className="flex justify-between items-center px-4 py-1 sm:px-6 sm:py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-[40px] sm:w-[50px]" />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-sm">
          {["Inicio", "Nosotros", "Contacto"].map((item, i) => (
            <a
              key={i}
              href="/"
              className="text-white hover:text-sky-100 hover:scale-105 transition-transform"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Redes sociales (desktop) */}
        <div className="hidden md:flex space-x-3">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram text-white hover:text-sky-100 text-lg"></i>
          </a>
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            <i className="bi bi-github text-white hover:text-sky-100 text-lg"></i>
          </a>
        </div>

        {/* Botón hamburguesa (solo en móvil) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <BiX /> : <BiMenuAltRight />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-red-900/60 backdrop-blur-sm">
          {["Inicio", "Nosotros", "Contacto"].map((item, i) => (
            <a
              key={i}
              href="/"
              className="block text-white hover:text-sky-100 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}

          <div className="flex space-x-4 pt-2">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram text-white text-lg"></i>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              <i className="bi bi-github text-white text-lg"></i>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
