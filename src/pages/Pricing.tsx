import { motion } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="pt-10 pb-24">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Simple Transparent <span className="text-brand-red">Pricing</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-brand-gray"
        >
          No hidden fees. Just high-quality web design that delivers results.
        </motion.p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Standard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8 flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
            <div className="text-4xl font-bold text-brand-red mb-1">$999</div>
            <div className="text-sm text-brand-gray mb-6">+ $149/month</div>
            
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-brand-black border-2 border-brand-red rounded-2xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(229,9,20,0.2)] md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
            <div className="text-4xl font-bold text-brand-red mb-1">$1,499</div>
            <div className="text-lg text-brand-gray mb-6">+ $299/month</div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {['Everything in Standard', 'Hosting included', 'Ongoing maintenance', 'Monthly edits', 'Google calender booking'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-red mr-3 shrink-0" />
                  <span className="text-brand-white">{item}</span>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-8 flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-2">Elite Package</h3>
            <div className="text-4xl font-bold text-brand-red mb-1">$2,999</div>
            <div className="text-lg text-brand-gray mb-6">+ $499/month</div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {['Everything in Premium', 'Local SEO pages', 'Google Business profile help', 'Review funnel setup', 'Advanced analytics', 'Monthly strategy call', 'AI Employee'].map((item, i) => (
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
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Compare Features</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 font-bold text-lg">Features</th>
                <th className="py-4 px-6 font-bold text-lg text-center">Standard</th>
                <th className="py-4 px-6 font-bold text-lg text-center text-brand-red">Premium</th>
                <th className="py-4 px-6 font-bold text-lg text-center">Elite</th>
              </tr>
            </thead>
            <tbody className="text-brand-gray">
              {[
                { name: 'Custom Design', s: true, p: true, e: true },
                { name: 'Mobile Responsive', s: true, p: true, e: true },
                { name: 'Pages Included', s: '5-8', p: '5-8', e: '10-15' },
                { name: 'Hosting Included', s: false, p: true, e: true },
                { name: 'Monthly Maintenance', s: false, p: true, e: true },
                { name: 'Content Edits', s: false, p: 'Basic', e: 'Unlimited' },
                { name: 'Local SEO Pages', s: false, p: false, e: true },
                { name: 'Google Business Setup', s: false, p: false, e: true },
                { name: 'Review Funnel', s: false, p: false, e: true },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6">{row.name}</td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.s === 'boolean' ? (row.s ? <CheckCircle2 className="w-5 h-5 text-brand-red mx-auto" /> : <X className="w-5 h-5 text-brand-gray/50 mx-auto" />) : row.s}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.p === 'boolean' ? (row.p ? <CheckCircle2 className="w-5 h-5 text-brand-red mx-auto" /> : <X className="w-5 h-5 text-brand-gray/50 mx-auto" />) : row.p}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.e === 'boolean' ? (row.e ? <CheckCircle2 className="w-5 h-5 text-brand-red mx-auto" /> : <X className="w-5 h-5 text-brand-gray/50 mx-auto" />) : row.e}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
