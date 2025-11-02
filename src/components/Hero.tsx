import { motion } from 'framer-motion';
import DroneCanvas from './DroneCanvas';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-secondary mb-6"
            >
              Inspeções com Drones
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block text-primary mt-2"
              >
                de Alta Precisão
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 mb-8"
            >
              Tecnologia de ponta para inspeções detalhadas em construções, placas solares,
              telhados e muito mais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Solicitar Orçamento
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToServices}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all"
              >
                Nossos Serviços
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Drone Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <DroneCanvas />
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(14, 165, 233, 0.3)',
                  '0 0 60px rgba(14, 165, 233, 0.5)',
                  '0 0 20px rgba(14, 165, 233, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-lg pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            {
              icon: '🎯',
              title: 'Alta Precisão',
              description: 'Imagens em 4K e tecnologia de sensores avançados',
              delay: 0,
            },
            {
              icon: '⚡',
              title: 'Rapidez',
              description: 'Inspeções completas em tempo reduzido',
              delay: 0.2,
            },
            {
              icon: '💰',
              title: 'Economia',
              description: 'Reduza custos com nossa tecnologia eficiente',
              delay: 0.4,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + feature.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-4xl mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;
