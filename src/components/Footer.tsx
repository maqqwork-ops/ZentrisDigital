import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="text-2xl font-heading font-bold tracking-tighter block mb-4">
              ZENTRIS<span className="text-brand-red">.</span>
            </Link>
            <p className="text-brand-gray mb-6 max-w-xs">
              We design high-performance websites for businesses that want to dominate online.
            </p>
            <div className="flex items-center text-brand-gray mb-2">
              <MapPin className="w-5 h-5 mr-3 text-brand-red" />
              <span>Elgin, Illinois</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-brand-gray hover:text-brand-red transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-brand-gray hover:text-brand-red transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-brand-gray hover:text-brand-red transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-brand-gray hover:text-brand-red transition-colors">Contact</Link></li>
              <li><Link to="/local-seo/elgin" className="text-brand-gray hover:text-brand-red transition-colors">Elgin Web Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li>
                <a href="tel:847-650-6404" className="flex items-center text-brand-gray hover:text-brand-red transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-brand-red" />
                  847-650-6404
                </a>
              </li>
              <li>
                <a href="mailto:zentrisdigitall@gmail.com" className="flex items-center text-brand-gray hover:text-brand-red transition-colors">
                  <Mail className="w-5 h-5 mr-3 text-brand-red" />
                  zentrisdigitall@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-gray hover:bg-brand-red hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-gray hover:bg-brand-red hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-gray hover:bg-brand-red hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-gray hover:bg-brand-red hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-gray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Zentris Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-brand-gray">
            <Link to="#" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
