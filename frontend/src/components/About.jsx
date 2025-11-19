import { motion } from 'framer-motion';
import { aboutContent } from '../content.js';

const About = () => (
  <section id="about" className="scroll-mt-32 bg-ivory pb-20 pt-12 lg:pt-24">
    <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr,1.1fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -inset-5 rounded-3xl bg-sand/30" aria-hidden="true" />
        <img
          src={aboutContent.image}
          alt="Josh photographing on location"
          className="relative rounded-3xl object-cover shadow-xl"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="section-title uppercase text-charcoal">{aboutContent.heading}</h2>
        {aboutContent.copy.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-charcoal/80">
            {paragraph}
          </p>
        ))}
        <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {aboutContent.stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-sand bg-white/60 px-6 py-6 text-center">
              <p className="font-display text-3xl text-charcoal">{item.figure}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-stone">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
