import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ProcessTimeline from './components/ProcessTimeline';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <ScrollProgress />
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Services />
        <Gallery />
        <ProcessTimeline />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
