import { motion } from 'framer-motion';
import { galleryImages } from '../content.js';

const Portfolio = () => (
  <section id="portfolio" className="scroll-mt-32 bg-white py-24">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 grid gap-6 text-center lg:grid-cols-[0.9fr,1.1fr] lg:text-left">
        <div>
          <p className="eyebrow">Featured work</p>
          <h2 className="section-title">Curated galleries that feel cinematic yet effortless.</h2>
        </div>
        <p className="section-subtitle">
          Weddings unfolding over full weekends, windswept elopements, and quiet in-home sessions—each gallery
          is layered with environment, story, and honest connection.
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
            className={`group relative overflow-hidden rounded-[2.5rem] border border-porcelain/80 bg-porcelain/40 shadow-soft ${
              index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/5]'
            }`}
          >
            <img
              src={image}
              alt="Gallery highlight from By Josh Photo"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-6 left-6 text-[0.62rem] uppercase tracking-[0.4em] text-white opacity-0 transition duration-300 group-hover:opacity-100">
              View story
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex flex-col gap-4 rounded-[2.5rem] border border-porcelain/80 bg-porcelain/40 px-8 py-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p className="font-display text-2xl text-ink">Custom collections for multi-day celebrations & destination events.</p>
        <a href="#contact" className="btn btn-outline text-[0.68rem]">
          Reserve your date
        </a>
      </div>
    </div>
  </section>
);

export default Portfolio;
