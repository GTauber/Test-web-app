const Services = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Inspeção de Obras',
      description:
        'Acompanhamento completo de obras e construções com imagens detalhadas e relatórios precisos.',
      features: [
        'Monitoramento de progresso',
        'Análise de estruturas',
        'Documentação visual',
        'Relatórios técnicos',
      ],
    },
    {
      icon: '☀️',
      title: 'Inspeção de Placas Solares',
      description:
        'Detecção de falhas e problemas em painéis fotovoltaicos através de termografia e análise visual.',
      features: [
        'Análise termográfica',
        'Detecção de hot spots',
        'Mapeamento de eficiência',
        'Identificação de danos',
      ],
    },
    {
      icon: '🏠',
      title: 'Inspeção de Telhados',
      description:
        'Avaliação completa de telhados e coberturas sem necessidade de acesso físico perigoso.',
      features: [
        'Análise de infiltrações',
        'Avaliação de telhas',
        'Inspeção de calhas',
        'Detecção de danos',
      ],
    },
    {
      icon: '🌉',
      title: 'Inspeção de Infraestrutura',
      description:
        'Análise de pontes, viadutos, torres e outras estruturas de difícil acesso.',
      features: [
        'Inspeção de pontes',
        'Análise de torres',
        'Avaliação de viadutos',
        'Mapeamento estrutural',
      ],
    },
    {
      icon: '🏢',
      title: 'Inspeção de Fachadas',
      description:
        'Análise detalhada de fachadas prediais, identificando trincas, infiltrações e problemas estruturais.',
      features: [
        'Análise de revestimentos',
        'Detecção de trincas',
        'Avaliação de vidros',
        'Inspeção de elementos',
      ],
    },
    {
      icon: '🌾',
      title: 'Mapeamento Topográfico',
      description:
        'Levantamento topográfico preciso e modelagem 3D de terrenos e áreas extensas.',
      features: [
        'Modelos 3D precisos',
        'Cálculo de volumes',
        'Curvas de nível',
        'Ortomosaicos',
      ],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas de inspeção com drones para diversos
            segmentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/10 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-gray-700 mb-6">
            Entre em contato conosco para solicitar um serviço personalizado
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
