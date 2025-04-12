
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface VideoTestimonial {
  text: string;
  videoCode: string;
}

const VideoTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: VideoTestimonial[] = [
    {
      text: "Amo minha profissão, mas agora também amo meu extrato, a IA me permitiu viver da psicologia SEM virar escrava",
      videoCode: `
        <div id="vid_67f5d5a78da11e4709837306" style="position: relative; width: 100%; padding: 56.25% 0 0;">
          <img id="thumb_67f5d5a78da11e4709837306" src="https://images.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5d5a78da11e4709837306/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
          <div id="backdrop_67f5d5a78da11e4709837306" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>
        </div>
        <script type="text/javascript" id="scr_67f5d5a78da11e4709837306">
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5d5a78da11e4709837306/player.js",
          s.async=!0,document.head.appendChild(s);
        </script>
      `
    },
    {
      text: "Montar uma clínica parecia um quebra-cabeça. Descobri que faltava apenas uma peça, a IA como minha sócia silenciosa",
      videoCode: `
        <div id="vid_67f5d5c684b331355d01d338" style="position: relative; width: 100%; padding: 56.25% 0 0;">
          <img id="thumb_67f5d5c684b331355d01d338" src="https://images.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5d5c684b331355d01d338/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
          <div id="backdrop_67f5d5c684b331355d01d338" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>
        </div>
        <script type="text/javascript" id="scr_67f5d5c684b331355d01d338">
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5d5c684b331355d01d338/player.js",
          s.async=!0,document.head.appendChild(s);
        </script>
      `
    },
    {
      text: "Pedir demissão foi meu ato de coragem e hoje meu consultório rende 15x mais que meu antigo salário e sou dona do meu tempo",
      videoCode: `
        <div id="vid_67f5d5b88da11e4709837310" style="position: relative; width: 100%; padding: 56.25% 0 0;">
          <img id="thumb_67f5d5b88da11e4709837310" src="https://images.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5d5b88da11e4709837310/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
          <div id="backdrop_67f5d5b88da11e4709837310" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>
        </div>
        <script type="text/javascript" id="scr_67f5d5b88da11e4709837310">
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5d5b88da11e4709837310/player.js",
          s.async=!0,document.head.appendChild(s);
        </script>
      `
    },
    {
      text: "Vai levar uma década, disseram. Em 7 dias, meu consultório já pagava minhas contas e meus sonhos",
      videoCode: `
        <div id="vid_67f5d5ada611335688094a29" style="position: relative; width: 100%; padding: 56.25% 0 0;">
          <img id="thumb_67f5d5ada611335688094a29" src="https://images.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5d5ada611335688094a29/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
          <div id="backdrop_67f5d5ada611335688094a29" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>
        </div>
        <script type="text/javascript" id="scr_67f5d5ada611335688094a29">
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5d5ada611335688094a29/player.js",
          s.async=!0,document.head.appendChild(s);
        </script>
      `
    },
    {
      text: "Nunca postei um reel na vida. Mesmo assim, minha agenda vive lotada. O segredo está nos pacientes que se tornam minha propaganda",
      videoCode: `
        <div id="vid_67f5d5b2b5168d67247533cf" style="position: relative; width: 100%; padding: 56.25% 0 0;">
          <img id="thumb_67f5d5b2b5168d67247533cf" src="https://images.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5d5b2b5168d67247533cf/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
          <div id="backdrop_67f5d5b2b5168d67247533cf" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>
        </div>
        <script type="text/javascript" id="scr_67f5d5b2b5168d67247533cf">
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5d5b2b5168d67247533cf/player.js",
          s.async=!0,document.head.appendChild(s);
        </script>
      `
    },
    {
      text: "Ela decidiu rescindir seu contrato CLT para abraçar o consultório em tempo integral e essa escolha mudou sua vida para sempre.",
      videoCode: `
        <div id="vid_67f5e0e0a803bf4d059f9b1e" style="position: relative; width: 100%; padding: 56.25% 0 0;">
          <img id="thumb_67f5e0e0a803bf4d059f9b1e" src="https://images.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5e0e0a803bf4d059f9b1e/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
          <div id="backdrop_67f5e0e0a803bf4d059f9b1e" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>
        </div>
        <script type="text/javascript" id="scr_67f5e0e0a803bf4d059f9b1e">
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f5e0e0a803bf4d059f9b1e/player.js",
          s.async=!0,document.head.appendChild(s);
        </script>
      `
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 relative" id="video-testimonials">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-fuschia-500/5 to-transparent opacity-50 pointer-events-none"
        style={{ 
          backgroundSize: "20px 20px",
          backgroundImage: `radial-gradient(rgba(233, 50, 109, 0.3) 1px, transparent 1px)`
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading text-center mx-auto mb-4"
        >
          Depoimentos que Inspiram: Histórias de Superação, Sucesso e Realização Profissional!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-xl font-medium text-gray-300 mb-12"
        >
          Sem Filtros, Sem Roteiro...
        </motion.p>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 mb-8">
            <p className="text-xl font-semibold text-fuschia-500 mb-8 text-center">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div 
              dangerouslySetInnerHTML={{ 
                __html: testimonials[currentIndex].videoCode
              }}
            />
          </div>
          
          <div className="flex justify-between">
            <button 
              onClick={prevTestimonial}
              className="glass-button p-3 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-fuschia-500 scale-125' : 'bg-fuschia-500/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="glass-button p-3 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
