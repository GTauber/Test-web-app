import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Engenheiro Civil',
      company: 'Construtora Horizonte',
      text: 'O serviço de inspeção com drones revolucionou nossa forma de monitorar obras. A precisão e rapidez são incomparáveis!',
      rating: 5,
    },
    {
      name: 'Ana Paula Santos',
      role: 'Gerente de Operações',
      company: 'SolarTech Brasil',
      text: 'A análise termográfica dos nossos painéis solares detectou problemas que não conseguíamos identificar. Excelente trabalho!',
      rating: 5,
    },
    {
      name: 'Roberto Mendes',
      role: 'Proprietário',
      company: 'Condomínio Residencial',
      text: 'Contratamos para inspeção de telhados e ficamos impressionados com o nível de detalhamento do relatório. Muito profissional!',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            O que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600">
            Depoimentos de quem já confiou em nossos serviços
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>

              <p className="text-gray-700 text-lg md:text-xl mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div>
                <p className="font-bold text-secondary text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
