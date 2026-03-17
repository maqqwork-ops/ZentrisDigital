/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
<<<<<<< HEAD
import Portfolio from './pages/Portfolio';
=======
>>>>>>> 21dc265e48442e582ed12dd6d208eff33329ca38
import About from './pages/About';
import Contact from './pages/Contact';
import LocalSEO from './pages/LocalSEO';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="pricing" element={<Pricing />} />
<<<<<<< HEAD
          <Route path="portfolio" element={<Portfolio />} />
=======
>>>>>>> 21dc265e48442e582ed12dd6d208eff33329ca38
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="local-seo/elgin" element={<LocalSEO />} />
        </Route>
      </Routes>
    </Router>
  );
}
