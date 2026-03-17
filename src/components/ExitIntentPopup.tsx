import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-brand-black border-2 border-brand-red rounded-2xl p-8 shadow-[0_0_50px_rgba(229,9,20,0.3)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-dark-red via-brand-red to-brand-dark-red"></div>
            
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-brand-gray hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Wait! Don't Leave Empty Handed.</h2>
              <p className="text-lg text-brand-gray mb-8">
                Get a <span className="text-brand-red font-bold">Free Website Audit</span> to see exactly why your current site isn't converting and how we can fix it.
              </p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsVisible(false); }}>
                <input
                  type="url"
                  placeholder="Enter your website URL"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors text-center"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors text-center"
                />
                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-hover-red text-white py-4 rounded-md font-bold uppercase tracking-wide transition-all shadow-[0_0_15px_rgba(229,9,20,0.4)] hover:shadow-[0_0_25px_rgba(255,42,42,0.6)] flex justify-center items-center"
                >
                  Get My Free Audit <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
              
              <p className="text-xs text-brand-gray mt-4">
                No commitment required. We'll send the audit directly to your inbox.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
