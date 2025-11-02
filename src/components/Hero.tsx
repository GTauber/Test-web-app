const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 animate-fade-in">
            Inspeções com Drones
            <span className="block text-primary mt-2">de Alta Precisão</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Tecnologia de ponta para inspeções detalhadas em construções, placas solares,
            telhados e muito mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition shadow-lg"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('servicos');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition"
            >
              Nossos Serviços
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Alta Precisão</h3>
              <p className="text-gray-600">
                Imagens em 4K e tecnologia de sensores avançados
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Rapidez</h3>
              <p className="text-gray-600">
                Inspeções completas em tempo reduzido
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Economia</h3>
              <p className="text-gray-600">
                Reduza custos com nossa tecnologia eficiente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
