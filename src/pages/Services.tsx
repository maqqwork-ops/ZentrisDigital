import { motion } from 'motion/react';
import { Layout, MapPin, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-10 pb-24">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Our <span className="text-brand-red">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-brand-gray"
        >
          Comprehensive digital solutions to help your business grow and dominate your local market.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          
          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-6 border border-brand-red/20">
                <Layout className="w-8 h-8 text-brand-red" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Website Design</h2>
              <p className="text-brand-gray text-lg mb-6">
                Modern responsive websites designed to convert visitors into leads. We build digital storefronts that represent your brand perfectly.
              </p>
              <ul className="space-y-3 mb-8">
                {['Mobile optimization', 'Clean UI/UX design', 'Fast loading speeds', 'Conversion-focused layouts'].map((item, i) => (
                  <li key={i} className="flex items-center text-brand-gray">
                    <CheckCircle2 className="w-5 h-5 text-brand-red mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center text-brand-red font-bold hover:text-brand-hover-red transition-colors">
                Get a Quote
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 glass-card rounded-2xl p-2 aspect-[4/3] overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000" alt="Web Design" className="w-full h-full object-cover rounded-xl opacity-80" />
            </motion.div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-2 aspect-[4/3] overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000" alt="SEO" className="w-full h-full object-cover rounded-xl opacity-80" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-6 border border-brand-red/20">
                <MapPin className="w-8 h-8 text-brand-red" />
              </div>
              <h2 className="text-3xl font-bold mb-4">SEO Landing Pages</h2>
              <p className="text-brand-gray text-lg mb-6">
                Location-based pages to help your business rank on Google and capture local search traffic.
              </p>
              <div className="mb-8">
                <h4 className="font-bold mb-3">Example Target Cities:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Elgin', 'Naperville', 'Schaumburg', 'Aurora'].map((city) => (
                    <span key={city} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-brand-gray">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center text-brand-red font-bold hover:text-brand-hover-red transition-colors">
                Start Ranking
              </Link>
            </motion.div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-6 border border-brand-red/20">
                <Wrench className="w-8 h-8 text-brand-red" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Website Maintenance</h2>
              <p className="text-brand-gray text-lg mb-6">
                Ongoing updates, bug fixes, edits, and performance improvements to keep your site running smoothly.
              </p>
              <ul className="space-y-3 mb-8">
                {['Security updates', 'Content edits', 'Performance monitoring', 'Monthly reporting'].map((item, i) => (
                  <li key={i} className="flex items-center text-brand-gray">
                    <CheckCircle2 className="w-5 h-5 text-brand-red mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/pricing" className="inline-flex items-center text-brand-red font-bold hover:text-brand-hover-red transition-colors">
                View Maintenance Plans
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 glass-card rounded-2xl p-2 aspect-[4/3] overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Maintenance" className="w-full h-full object-cover rounded-xl opacity-80" />
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
