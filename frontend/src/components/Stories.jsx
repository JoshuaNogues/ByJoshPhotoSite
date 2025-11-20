import { motion } from 'framer-motion';
import { storyHighlights } from '../content.js';
import backgroundImage from '../../photos/BJP04437.jpg';

const Stories = () => (
  <section
    id="stories"
    className="scroll-mt-32 relative overflow-hidden py-24 text-linen"
    style={{
      backgroundImage: `linear-gradient(120deg, rgba(8, 6, 5, 0.9), rgba(18, 15, 13, 0.6)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-ink/20" aria-hidden="true" />
    <div className="relative mx-auto max-w-6xl px-6">
      <div className="mb-12 flex flex-col gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
        <div>
          <p className="eyebrow text-linen/80">Signature stories</p>
          <h2 className="section-title text-white">Weekend celebrations & intimate moments, told with depth.</h2>
        </div>
        <a href="#portfolio" className="btn border-white/60 text-white hover:bg-white/90 hover:text-ink self-center text-[0.68rem]">
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
            className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/85 text-dusk shadow-soft"
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
