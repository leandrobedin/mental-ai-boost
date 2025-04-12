
import { motion } from 'framer-motion';

const VideoSalesLetter = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading text-center mx-auto mb-8"
        >
          CLIQUE NO VÍDEO PARA REVELAR O MÉTODO QUE ESTÁ REVOLUCIONANDO A SAÚDE MENTAL
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card p-2 overflow-hidden"
        >
          <div 
            dangerouslySetInnerHTML={{ 
              __html: `
                <div id="vid_67f4081af1a80f4c291f9225" style="position: relative; width: 100%; padding: 56.25% 0 0;">
                  <img id="thumb_67f4081af1a80f4c291f9225" src="https://images.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f4081af1a80f4c291f9225/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
                  <div id="backdrop_67f4081af1a80f4c291f9225" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div>
                </div>
                <script type="text/javascript" id="scr_67f4081af1a80f4c291f9225">
                  var s=document.createElement("script");
                  s.src="https://scripts.converteai.net/c20a50c2-baca-453d-9373-a276c8f62421/players/67f4081af1a80f4c291f9225/player.js",
                  s.async=!0,document.head.appendChild(s);
                </script>
              `
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSalesLetter;
