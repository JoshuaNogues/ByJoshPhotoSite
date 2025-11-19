import { motion } from 'framer-motion';
import { storyHighlights } from '../content.js';

const Stories = () => (
  <section id="stories" className="scroll-mt-32 bg-ivory py-24">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 text-center">
        <h2 className="section-title mx-auto text-charcoal">Featured Stories</h2>
        <p className="section-subtitle mx-auto text-charcoal/80">
          Each gallery is crafted with intention—layered with atmosphere, connection, and a sense of place.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {storyHighlights.map((story, index) => (
          <motion.article
            key={story.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col overflow-hidden rounded-3xl border border-sand/70 bg-white shadow-sm"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={story.image} alt={story.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-8">
              <h3 className="font-display text-2xl text-charcoal">{story.title}</h3>
              <p className="text-sm text-charcoal/75">{story.description}</p>
              <a href="#portfolio" className="mt-auto text-xs uppercase tracking-[0.3em] text-stone hover:text-charcoal">
                View story
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Stories;
