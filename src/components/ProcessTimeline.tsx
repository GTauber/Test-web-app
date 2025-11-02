import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProcessTimeline = () => {
  const steps = [
    {
      number: '01',
      title: 'Contato Inicial',
      description: 'Entre em contato conosco e descreva suas necessidades de inspeção.',
      icon: '📞',
    },
    {
      number: '02',
      title: 'Planejamento',
      description: 'Nossa equipe analisa o projeto e cria um plano de voo personalizado.',
      icon: '📋',
    },
    {
      number: '03',
      title: 'Inspeção',
      description: 'Realizamos o voo com drones equipados com tecnologia de ponta.',
      icon: '🚁',
    },
    {
      number: '04',
      title: 'Processamento',
      description: 'Analisamos as imagens e dados coletados com precisão profissional.',
      icon: '⚙️',
    },
    {
      number: '05',
      title: 'Relatório',
      description: 'Entregamos relatório completo com análises, fotos e recomendações.',
      icon: '📊',
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nosso processo simples e eficiente em 5 etapas
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-primary"></div>

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{step.icon}</div>
                    <div className="text-4xl font-bold text-primary/20">{step.number}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="relative z-10 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex-shrink-0"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-primary rounded-full"
                  ></motion.div>
                </motion.div>

                {/* Empty space for layout balance */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
