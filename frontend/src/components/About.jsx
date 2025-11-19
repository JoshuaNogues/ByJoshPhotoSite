import { motion } from 'framer-motion';
import { aboutContent } from '../content.js';

const About = () => (
  <section id="about" className="scroll-mt-32 bg-porcelain/40 py-24">
    <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr,1.05fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <p className="eyebrow">{aboutContent.tagline}</p>
        <h2 className="section-title">{aboutContent.heading}</h2>
        {aboutContent.copy.map((paragraph) => (
          <p key={paragraph} className="text-base text-dusk">
            {paragraph}
          </p>
        ))}
        <div className="mt-6 rounded-3xl border border-porcelain/70 bg-white/80 p-6">
          <p className="text-sm italic text-dusk">{aboutContent.quote}</p>
          <p className="mt-4 font-display text-xl text-ink">{aboutContent.signature}</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {aboutContent.stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-porcelain/80 bg-white/70 px-6 py-6 text-center">
              <p className="font-display text-3xl text-ink">{item.figure}</p>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.35em] text-dusk/70">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -left-6 top-10 hidden h-20 w-20 rounded-full border border-porcelain/70 bg-linen/80 lg:block" aria-hidden="true" />
        <div className="relative rounded-[3rem] border border-porcelain/70 bg-white/60 p-3">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img src={aboutContent.image} alt="Josh photographing on location" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 right-6 rounded-3xl border border-porcelain/80 bg-linen px-4 py-3 shadow-soft">
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-dusk/70">Nashville & Beyond</p>
          </div>
        </div>
      </motion.div>
    </div>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className="mx-auto mt-16 max-w-6xl rounded-[3rem] bg-white/80 p-8 sm:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {aboutContent.values.map((value) => (
          <div key={value.title} className="flex flex-col gap-3 border-t border-porcelain/80 pt-4">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-dusk/60">Pillar</p>
            <h3 className="font-display text-2xl text-ink">{value.title}</h3>
            <p className="text-sm text-dusk">{value.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
