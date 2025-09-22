import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sky-900">
            <span className="text-amber-400">Web</span>Cursos
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li>
              <a href="#home" className="hover:text-sky-700">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-sky-700">
                Sobre
              </a>
            </li>
            <li>
              <a href="#cursos" className="hover:text-sky-700">
                Cursos
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-sky-700">
                Contato
              </a>
            </li>
          </ul>

          {/* Desktop CTA Button */}
          <a
            href="#contato"
            className="hidden md:block bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-800 transition"
          >
            Inscreva-se
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 my-1 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="pt-4 pb-2 space-y-2">
            <li>
              <a
                href="#home"
                className="block py-2 text-gray-700 hover:text-sky-700 transition"
                onClick={closeMenu}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="block py-2 text-gray-700 hover:text-sky-700 transition"
                onClick={closeMenu}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#cursos"
                className="block py-2 text-gray-700 hover:text-sky-700 transition"
                onClick={closeMenu}
              >
                Cursos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="block py-2 text-gray-700 hover:text-sky-700 transition"
                onClick={closeMenu}
              >
                Contato
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#contato"
                className="block w-full text-center bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-800 transition"
                onClick={closeMenu}
              >
                Inscreva-se
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
