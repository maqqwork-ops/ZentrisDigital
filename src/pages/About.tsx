import { motion } from 'motion/react';
import { Target, Rocket, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-10 pb-24">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          About <span className="text-brand-red">Zentris Digital</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-brand-gray"
        >
          We are a web design agency dedicated to helping local businesses thrive in the digital world.
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Our Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
          <Target className="w-12 h-12 text-brand-red mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-brand-gray leading-relaxed">
            Zentris Digital helps businesses build powerful online presences with modern website design. We believe that a website should be more than just a digital brochure—it should be a high-performing asset that generates leads and drives revenue.
          </p>
        </motion.div>

        {/* Why We Started */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6 border border-brand-red/20">
              <Rocket className="w-6 h-6 text-brand-red" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Why We Started</h2>
            <p className="text-brand-gray text-lg mb-4">
              Many small businesses struggle with outdated websites that fail to capture their true value. They lose potential customers to competitors simply because their online presence doesn't reflect the quality of their work.
            </p>
            <p className="text-brand-gray text-lg">
              We started Zentris Digital to change that. We focus on clean design, lightning-fast performance, and proven conversion strategies to deliver results that actually matter to your bottom line.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-2 aspect-square md:aspect-auto md:h-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team working" className="w-full h-full object-cover rounded-xl opacity-80" />
          </div>
        </motion.div>

        {/* Location */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <MapPin className="w-12 h-12 text-brand-red mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Proudly Based in Elgin, Illinois</h2>
          <p className="text-xl text-brand-gray mb-8">
            While we serve clients nationwide, our roots are in Illinois. We understand the local market and love helping businesses in our community succeed.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 rounded-full text-brand-white">
            <span className="w-2 h-2 rounded-full bg-brand-red mr-3 animate-pulse"></span>
            Available for new projects
          </div>
        </motion.div>

      </section>
    </div>
  );
}
