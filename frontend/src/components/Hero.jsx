import { motion } from 'framer-motion';
import { heroContent } from '../content.js';

const fadeVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero = () => (
  <section id="hero" className="relative min-h-screen bg-ivory pt-32 pb-16">
    <div className="absolute inset-x-0 top-0 h-[480px] bg-sand/30" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
      <motion.div variants={fadeVariants} initial="initial" animate="animate" className="space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-stone/80">{heroContent.eyebrow}</p>
        <h1 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
          {heroContent.title}
        </h1>
        <p className="max-w-xl text-lg text-charcoal/80">{heroContent.description}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href={heroContent.primaryCta.href} className="btn btn-primary">
            {heroContent.primaryCta.label}
          </a>
          <a href={heroContent.secondaryCta.href} className="btn btn-outline">
            {heroContent.secondaryCta.label}
          </a>
        </div>
        <div className="mt-10 flex items-center gap-8 text-xs uppercase tracking-[0.3em] text-stone">
          <span>Weddings</span>
          <span>Elopements</span>
          <span>Lifestyle</span>
        </div>
      </motion.div>
      <motion.div
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3, duration: 0.9 }}
        className="relative"
      >
        <div className="absolute -inset-6 rounded-[3rem] border border-sand/70" aria-hidden="true" />
        <img
          src={heroContent.image}
          alt="Intimate couple moment captured by Josh"
          className="relative rounded-[3rem] object-cover shadow-2xl"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
