import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              🚁 DroneServ
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
