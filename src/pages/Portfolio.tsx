import { motion } from 'motion/react';

export default function Portfolio() {
  const projects = [
    { 
      img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800', 
      name: 'Apex Auto Repair', 
      industry: 'Auto Repair',
      desc: 'A high-converting local website designed to drive phone calls and appointment bookings for an auto repair shop.'
    },
    { 
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800', 
      name: 'BuildRight Construction', 
      industry: 'Construction',
      desc: 'Professional portfolio website showcasing past projects and capturing leads for a local contractor.'
    },
    { 
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', 
      name: 'Swift Logistics', 
      industry: 'Logistics',
      desc: 'Modern corporate website with clear service offerings and a streamlined quote request process.'
    },
    { 
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', 
      name: 'Elgin Dental Care', 
      industry: 'Medical',
      desc: 'Trust-building website for a local dental practice featuring patient reviews and easy online scheduling.'
    },
    { 
      img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800', 
      name: 'Prime HVAC Services', 
      industry: 'Local Services',
      desc: 'Emergency service focused website with sticky click-to-call buttons and local SEO optimization.'
    },
    { 
      img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800', 
      name: 'Taste of Italy', 
      industry: 'Restaurant',
      desc: 'Appetizing restaurant website with integrated online ordering and dynamic menu displays.'
    }
  ];

  return (
    <div className="pt-10 pb-24">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Our <span className="text-brand-red">Portfolio</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-brand-gray"
        >
          Explore our recent projects and see how we help local businesses dominate online.
        </motion.p>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group hover:border-brand-red transition-colors duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-brand-red uppercase tracking-wider border border-white/10">
                  {project.industry}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-brand-gray text-sm flex-grow">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
