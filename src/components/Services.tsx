import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      gradient: 'from-blue-50 to-cyan-50',
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
      gradient: 'from-amber-50 to-orange-50',
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
      gradient: 'from-slate-50 to-gray-50',
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
      gradient: 'from-indigo-50 to-purple-50',
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
      gradient: 'from-emerald-50 to-teal-50',
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
      gradient: 'from-lime-50 to-green-50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="servicos" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-400/5 rounded-full blur-xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Oferecemos soluções completas de inspeção com drones para diversos
            segmentos
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 },
              }}
              className={`bg-gradient-to-br ${service.gradient} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden group`}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300"
              />

              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-4 relative z-10"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-secondary mb-3 relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4 relative z-10">{service.description}</p>
              <ul className="space-y-2 relative z-10">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-xl text-center relative overflow-hidden"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          />

          <h3 className="text-2xl font-bold text-secondary mb-4 relative z-10">
            Não encontrou o que procura?
          </h3>
          <p className="text-gray-700 mb-6 relative z-10">
            Entre em contato conosco para solicitar um serviço personalizado
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all relative z-10"
          >
            Fale Conosco
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
