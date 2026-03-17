import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-10 pb-24">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Let's Build Your <span className="text-brand-red">Website</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-brand-gray"
        >
          Ready to dominate your local market? Get in touch for a free consultation and quote.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-10"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-brand-gray">
                  Thanks for contacting Zentris Digital. We will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-gray mb-2">Name</label>
                    <input type="text" id="name" required className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-gray mb-2">Email</label>
                    <input type="email" id="email" required className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-brand-gray mb-2">Business Name</label>
                    <input type="text" id="business" required className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors" placeholder="Your Company LLC" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-gray mb-2">Phone</label>
                    <input type="tel" id="phone" required className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors" placeholder="(847) 555-0123" />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-brand-gray mb-2">Project Type</label>
                  <select id="project" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors appearance-none">
                    <option value="new" className="bg-brand-black">New Website</option>
                    <option value="redesign" className="bg-brand-black">Website Redesign</option>
                    <option value="seo" className="bg-brand-black">Local SEO</option>
                    <option value="other" className="bg-brand-black">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-gray mb-2">Message</label>
                  <textarea id="message" rows={4} required className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-red hover:bg-brand-hover-red text-white py-4 rounded-md font-bold uppercase tracking-wide transition-all shadow-[0_0_15px_rgba(229,9,20,0.4)] hover:shadow-[0_0_25px_rgba(255,42,42,0.6)] flex justify-center items-center">
                  Request Quote <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col space-y-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="tel:847-650-6404" className="flex items-center text-lg hover:text-brand-red transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-red/20 transition-colors">
                    <Phone className="w-6 h-6 text-brand-red" />
                  </div>
                  847-650-6404
                </a>
<<<<<<< HEAD
                <a href="mailto:hello@zentrisdigital.com" className="flex items-center text-lg hover:text-brand-red transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-red/20 transition-colors">
                    <Mail className="w-6 h-6 text-brand-red" />
                  </div>
                  hello@zentrisdigital.com
=======
                <a href="mailto:zentrisdigitall@gmail.com" className="flex items-center text-lg hover:text-brand-red transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-red/20 transition-colors">
                    <Mail className="w-6 h-6 text-brand-red" />
                  </div>
                  zentrisdigitall@gmail.com
>>>>>>> 21dc265e48442e582ed12dd6d208eff33329ca38
                </a>
                <div className="flex items-center text-lg text-brand-gray">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  Elgin, Illinois
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-2 flex-grow min-h-[300px] overflow-hidden">
              {/* Placeholder for Map Embed */}
              <div className="w-full h-full bg-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] opacity-30 bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-brand-black/60"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="w-12 h-12 text-brand-red mx-auto mb-4" />
                  <h4 className="text-xl font-bold">Elgin, IL</h4>
                  <p className="text-brand-gray">Serving the Chicagoland Area</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
