import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Layout, TrendingUp, MapPin, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Section 1 - Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-dark-red/20 via-brand-black to-brand-black -z-10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-dark-red/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Modern Websites That Turn Visitors Into <span className="text-brand-red">Customers</span>
              </h1>
              <p className="text-xl text-brand-gray mb-10 max-w-lg">
                We design high-performance websites for businesses that want to dominate online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-red hover:bg-brand-hover-red text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide text-center transition-all shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:shadow-[0_0_30px_rgba(255,42,42,0.6)]"
                >
                  Get A Website
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide text-center transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-brand-black/50 backdrop-blur-sm p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 left-0 right-0 h-6 bg-white/5 border-b border-white/10 flex items-center px-3 space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Website UI Mockup" 
                  className="w-full h-auto rounded mt-6 opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Trust Section */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xl font-medium text-brand-gray">Helping businesses launch powerful digital experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-brand-red mb-2">100+</div>
              <div className="text-brand-gray font-medium uppercase tracking-wider text-sm">Websites Built</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-brand-red mb-2">2 Weeks</div>
              <div className="text-brand-gray font-medium uppercase tracking-wider text-sm">Fast Delivery</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-brand-red mb-2">100%</div>
              <div className="text-brand-gray font-medium uppercase tracking-wider text-sm">Mobile Optimized</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Services Overview */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">Everything you need to establish a dominant online presence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Layout className="w-8 h-8 text-brand-red mb-4" />,
                title: 'Website Design',
                desc: 'Modern responsive websites built for conversions.'
              },
              {
                icon: <MapPin className="w-8 h-8 text-brand-red mb-4" />,
                title: 'Local SEO Pages',
                desc: 'Rank your business in local Google searches.'
              },
              {
                icon: <Zap className="w-8 h-8 text-brand-red mb-4" />,
                title: 'Website Optimization',
                desc: 'Speed improvements, updates, and performance upgrades.'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 red-glow-hover group"
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-red transition-colors">{service.title}</h3>
                <p className="text-brand-gray">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services" className="inline-flex items-center text-brand-white font-bold hover:text-brand-red transition-colors">
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 - Why Zentris Digital */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Zentris Digital</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">We don't just build websites; we build business assets.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="w-10 h-10 text-brand-red" />, title: 'Fast Delivery' },
              { icon: <Layout className="w-10 h-10 text-brand-red" />, title: 'Clean Modern Design' },
              { icon: <TrendingUp className="w-10 h-10 text-brand-red" />, title: 'Conversion Focused' },
              { icon: <MapPin className="w-10 h-10 text-brand-red" />, title: 'Local Business Expertise' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_15px_rgba(229,9,20,0.1)]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Pricing Preview */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple Transparent Pricing</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">No hidden fees. Just high-quality web design that delivers results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Standard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
              <div className="text-3xl font-bold text-brand-red mb-1">$999 <span className="text-lg text-brand-gray font-normal">+ $149/mo</span></div>
              <div className="text-sm text-brand-gray mb-6">One-time build</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {['5–8 page website', 'Mobile optimization', 'Hosting setup', 'Basic SEO setup'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red mr-3 shrink-0" />
                    <span className="text-brand-gray">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="block w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-center rounded-md font-bold uppercase tracking-wide transition-colors">
                Get Started
              </Link>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-black border-2 border-brand-red rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(229,9,20,0.2)]"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
              <div className="text-3xl font-bold text-brand-red mb-1">$1,499 <span className="text-lg text-brand-gray font-normal">+ $299/mo</span></div>
              <div className="text-sm text-brand-gray mb-6">Build + Maintenance</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {['Website build', 'Hosting included', 'Ongoing maintenance', 'Monthly edits', 'Google calender booking'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red mr-3 shrink-0" />
                    <span className="text-brand-gray">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="block w-full py-3 px-4 bg-brand-red hover:bg-brand-hover-red text-center rounded-md font-bold uppercase tracking-wide transition-colors shadow-[0_0_15px_rgba(229,9,20,0.4)]">
                Get Started
              </Link>
            </motion.div>

            {/* Elite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2">Elite Package</h3>
              <div className="text-3xl font-bold text-brand-red mb-1">$2,999 <span className="text-lg text-brand-gray font-normal">+ $499/mo</span></div>
              <div className="text-sm text-brand-gray mb-6">Build + SEO + Maintenance</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {['Website build', 'SEO pages', 'Google Business profile help', 'Review funnel', 'Analytics', 'AI Employee', 'Monthly updates'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red mr-3 shrink-0" />
                    <span className="text-brand-gray">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="block w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-center rounded-md font-bold uppercase tracking-wide transition-colors">
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-red to-brand-black -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready To Launch Your Website?</h2>
            <p className="text-xl text-white/80 mb-10">
              Get a professional website built for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                to="/contact"
                className="bg-white text-brand-black hover:bg-gray-200 px-8 py-4 rounded-md font-bold uppercase tracking-wide text-center transition-all w-full sm:w-auto"
              >
                Schedule a Call
              </Link>
              <a href="tel:847-650-6404" className="text-2xl font-bold text-white flex items-center hover:text-brand-red transition-colors">
                <Phone className="w-6 h-6 mr-3" />
                847-650-6404
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
