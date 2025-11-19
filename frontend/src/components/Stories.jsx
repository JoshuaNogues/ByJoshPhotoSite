import { motion } from 'framer-motion';
import { storyHighlights } from '../content.js';

const Stories = () => (
  <section id="stories" className="scroll-mt-32 bg-linen py-24">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 flex flex-col gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
        <div>
          <p className="eyebrow">Signature stories</p>
          <h2 className="section-title">Weekend celebrations & intimate moments, told with depth.</h2>
        </div>
        <a href="#portfolio" className="btn btn-outline self-center text-[0.68rem]">
          View full portfolio
        </a>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {storyHighlights.map((story, index) => (
          <motion.article
            key={story.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-porcelain/70 bg-white/90 shadow-soft"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
              <span className="pointer-events-none absolute left-6 top-6 rounded-full bg-white/80 px-4 py-2 text-[0.62rem] uppercase tracking-[0.35em] text-dusk">
                0{index + 1}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-8">
              <h3 className="font-display text-3xl text-ink">{story.title}</h3>
              <p className="text-sm text-dusk">{story.description}</p>
              <a href="#portfolio" className="mt-auto text-[0.65rem] uppercase tracking-[0.4em] text-dusk/80 transition hover:text-ink">
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
