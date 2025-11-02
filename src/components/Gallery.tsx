import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';

const Gallery = () => {
  // Placeholder images - replace with real inspection photos
  const placeholderBefore = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800";
  const placeholderAfter = "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800";

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Resultados Visíveis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare a diferença que nossas inspeções podem fazer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-4">Inspeção de Obras</h3>
            <BeforeAfterSlider
              beforeImage={placeholderBefore}
              afterImage={placeholderAfter}
              beforeLabel="Vista Tradicional"
              afterLabel="Inspeção com Drone"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-4">Placas Solares</h3>
            <BeforeAfterSlider
              beforeImage={placeholderBefore}
              afterImage={placeholderAfter}
              beforeLabel="Imagem Normal"
              afterLabel="Análise Termográfica"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
