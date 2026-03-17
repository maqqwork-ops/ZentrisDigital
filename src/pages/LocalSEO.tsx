import { motion } from 'motion/react';
import { CheckCircle2, Phone, TrendingUp, MonitorSmartphone, Search, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LocalSEO() {
  return (
    <div className="pt-10 pb-24">
      {/* Hero */}
      <section className="relative py-20 mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-red/20 to-brand-black -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-bold text-sm mb-6 uppercase tracking-wider">
                Local Web Design
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Web Design Services in <span className="text-brand-red">Elgin Illinois</span>
              </h1>
              <p className="text-xl text-brand-gray mb-8 max-w-lg">
                We build high-performance, mobile-optimized websites that help Elgin businesses rank higher on Google and generate more leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-red hover:bg-brand-hover-red text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide text-center transition-all shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:shadow-[0_0_30px_rgba(255,42,42,0.6)]"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:847-650-6404"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide text-center transition-all flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  847-650-6404
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="glass-card rounded-2xl p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" alt="Elgin Business" className="w-full h-auto rounded-xl opacity-80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Businesses Need Modern Websites */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Elgin Businesses Need Modern Websites</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">Your website is your digital storefront. If it's slow, outdated, or hard to use, you're losing customers to your competitors.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Search className="w-10 h-10 text-brand-red" />, title: 'Local Search Dominance', desc: 'Most customers search Google before visiting a local business. We ensure you show up when they search.' },
            { icon: <MonitorSmartphone className="w-10 h-10 text-brand-red" />, title: 'Mobile First Design', desc: 'Over 60% of local searches happen on mobile devices. Our sites look perfect on every screen size.' },
            { icon: <TrendingUp className="w-10 h-10 text-brand-red" />, title: 'Lead Generation', desc: 'We design websites specifically to convert casual visitors into paying customers and qualified leads.' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-xl text-center hover:border-brand-red transition-colors duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-brand-gray">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Web Design Process */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Web Design Process</h2>
              <p className="text-brand-gray text-lg mb-8">We've streamlined our process to deliver high-quality websites quickly and efficiently, without sacrificing performance.</p>
              
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Discovery & Strategy', desc: 'We learn about your business, target audience, and goals to create a custom strategy.' },
                  { step: '02', title: 'Design & Development', desc: 'We build a modern, responsive website optimized for speed and conversions.' },
                  { step: '03', title: 'SEO Optimization', desc: 'We optimize your content and structure to rank high in local Elgin search results.' },
                  { step: '04', title: 'Launch & Support', desc: 'We launch your site and provide ongoing maintenance to keep it secure and updated.' }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="mr-6 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-brand-red text-white font-bold flex items-center justify-center text-lg shadow-[0_0_15px_rgba(229,9,20,0.4)]">
                        {item.step}
                      </div>
                      {i !== 3 && <div className="w-0.5 h-full bg-white/10 my-2"></div>}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-brand-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-2 aspect-[4/3] overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000" alt="Process" className="w-full h-full object-cover rounded-xl opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Local Industries We Serve</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">We build specialized websites for various local service businesses in Elgin and surrounding areas.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Auto Repair', 'Contractors', 'Restaurants', 'Medical Offices', 'Landscaping', 'Plumbing', 'HVAC', 'Legal Services'].map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
            >
              <Award className="w-8 h-8 text-brand-red mx-auto mb-3" />
              <h3 className="font-bold">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-dark-red to-brand-red rounded-3xl p-10 md:p-16 text-center shadow-[0_0_40px_rgba(229,9,20,0.3)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Get a Website for Your Business</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Stop losing customers to outdated design. Let's build a digital asset that drives real growth for your Elgin business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                to="/contact"
                className="bg-brand-black text-white hover:bg-gray-900 px-8 py-4 rounded-md font-bold uppercase tracking-wide text-center transition-all w-full sm:w-auto border border-white/10"
              >
                Request a Quote
              </Link>
              <a href="tel:847-650-6404" className="text-2xl font-bold text-white flex items-center hover:text-brand-black transition-colors">
                <Phone className="w-6 h-6 mr-3" />
                847-650-6404
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
