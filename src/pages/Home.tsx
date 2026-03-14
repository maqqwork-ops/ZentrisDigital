import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Layout, TrendingUp, MapPin, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Section 1 - Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
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
            <motion.div className="p-6">
              <div className="text-4xl font-bold text-brand-red mb-2">100+</div>
              <div className="text-brand-gray font-medium uppercase tracking-wider text-sm">Websites Built</div>
            </motion.div>

            <motion.div className="p-6">
              <div className="text-4xl font-bold text-brand-red mb-2">2 Weeks</div>
              <div className="text-brand-gray font-medium uppercase tracking-wider text-sm">Fast Delivery</div>
            </motion.div>

            <motion.div className="p-6">
              <div className="text-4xl font-bold text-brand-red mb-2">100%</div>
              <div className="text-brand-gray font-medium uppercase tracking-wider text-sm">Mobile Optimized</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Everything you need to establish a dominant online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

            <div className="glass-card p-8 rounded-xl">
              <Layout className="w-8 h-8 text-brand-red mb-4"/>
              <h3 className="text-xl font-bold mb-3">Website Design</h3>
              <p className="text-brand-gray">Modern responsive websites built for conversions.</p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <MapPin className="w-8 h-8 text-brand-red mb-4"/>
              <h3 className="text-xl font-bold mb-3">Local SEO Pages</h3>
              <p className="text-brand-gray">Rank your business in local Google searches.</p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <Zap className="w-8 h-8 text-brand-red mb-4"/>
              <h3 className="text-xl font-bold mb-3">Website Optimization</h3>
              <p className="text-brand-gray">Speed improvements, updates, and performance upgrades.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Section 4 - Why Zentris Digital */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Zentris Digital</h2>
          <p className="text-brand-gray max-w-2xl mx-auto mb-12">
            We don't just build websites; we build business assets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div>
              <Zap className="w-10 h-10 text-brand-red mx-auto mb-4"/>
              <h3 className="font-bold">Fast Delivery</h3>
            </div>

            <div>
              <Layout className="w-10 h-10 text-brand-red mx-auto mb-4"/>
              <h3 className="font-bold">Clean Modern Design</h3>
            </div>

            <div>
              <TrendingUp className="w-10 h-10 text-brand-red mx-auto mb-4"/>
              <h3 className="font-bold">Conversion Focused</h3>
            </div>

            <div>
              <MapPin className="w-10 h-10 text-brand-red mx-auto mb-4"/>
              <h3 className="font-bold">Local Business Expertise</h3>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready To Launch Your Website?
        </h2>

        <p className="text-xl text-white/80 mb-10">
          Get a professional website built for your business.
        </p>

        <Link
          to="/contact"
          className="bg-white text-black px-8 py-4 rounded-md font-bold uppercase"
        >
          Schedule a Call
        </Link>

        <div className="mt-6 text-2xl font-bold flex justify-center items-center">
          <Phone className="mr-3"/>
          847-650-6404
        </div>

      </section>

    </div>
  );
}

