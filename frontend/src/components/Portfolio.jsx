import { motion } from 'framer-motion';
import { galleryImages } from '../content.js';

const Portfolio = () => (
  <section id="portfolio" className="scroll-mt-32 bg-white py-24">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 flex flex-col gap-4 text-center">
        <h2 className="section-title mx-auto text-charcoal">Portfolio Highlights</h2>
        <p className="section-subtitle mx-auto text-charcoal/80">
          A curated glimpse into wedding weekends, intimate elopements, and stories captured along the coast
          and in the mountains.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-sand/60 bg-ivory"
          >
            <img
              src={image}
              alt="Gallery highlight from By Josh Photo"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
