import AnimatedCounter from './AnimatedCounter';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Sobre Nós
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Especialistas em inspeções aéreas com tecnologia de ponta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-6">
              Tecnologia e Experiência
            </h3>
            <p className="text-gray-700 mb-4 text-lg">
              Somos uma empresa especializada em inspeções com drones,
              oferecendo soluções inovadoras e precisas para diversos setores.
              Nossa equipe é composta por pilotos certificados pela ANAC e
              profissionais experientes.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Utilizamos equipamentos de última geração, incluindo drones com
              câmeras 4K, sensores termográficos e tecnologia de mapeamento 3D,
              garantindo resultados de altíssima qualidade.
            </p>
            <p className="text-gray-700 text-lg">
              Nosso compromisso é fornecer relatórios detalhados e precisos que
              auxiliam na tomada de decisões estratégicas, reduzindo custos e
              aumentando a segurança das operações.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🎓</div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">
                    Pilotos Certificados
                  </h4>
                  <p className="text-gray-600">
                    Todos os nossos pilotos possuem certificação ANAC e treinamento
                    especializado em inspeções técnicas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🔧</div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">
                    Equipamentos Avançados
                  </h4>
                  <p className="text-gray-600">
                    Frota moderna com drones DJI Enterprise, câmeras termográficas
                    e sensores de alta precisão.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📊</div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">
                    Relatórios Completos
                  </h4>
                  <p className="text-gray-600">
                    Entregamos relatórios técnicos detalhados com análises,
                    imagens e recomendações personalizadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-3xl mr-4">🛡️</div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">
                    Segurança e Conformidade
                  </h4>
                  <p className="text-gray-600">
                    Operações em total conformidade com regulamentações da ANAC e
                    seguros de responsabilidade civil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className="text-gray-600">Inspeções Realizadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              <AnimatedCounter end={100} suffix="+" />
            </div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              <AnimatedCounter end={5} />
            </div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Suporte Disponível</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
