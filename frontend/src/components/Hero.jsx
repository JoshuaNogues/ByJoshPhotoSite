import { motion } from 'framer-motion';
import { heroContent } from '../content.js';

const Hero = () => (
  <section
    id="hero"
    className="relative overflow-hidden bg-ink pt-32 pb-24 text-linen"
    style={{
      backgroundImage: `linear-gradient(120deg, rgba(8, 6, 5, 0.3), rgba(15, 12, 10, 0.65)), url(${heroContent.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-ink/20" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr,0.8fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-linen" />
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-linen/80">{heroContent.eyebrow}</span>
        </div>
        <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] leading-tight text-white">{heroContent.title}</h1>
        <p className="text-base text-linen/85">{heroContent.tagline}</p>
        <p className="max-w-2xl text-lg text-linen/90">{heroContent.description}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href={heroContent.primaryCta.href} className="btn border-white/80 bg-white/90 text-ink hover:bg-linen">
            {heroContent.primaryCta.label}
          </a>
          <a href={heroContent.secondaryCta.href} className="btn border-white/60 text-white hover:bg-white/90 hover:text-ink">
            {heroContent.secondaryCta.label}
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {heroContent.features.map((feature) => (
            <div key={feature} className="rounded-2xl border border-white/30 bg-white/10 px-4 py-5 backdrop-blur">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/80">{feature}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] border border-white/20 bg-white/5 p-3 shadow-soft backdrop-blur"
        >
          <div className="overflow-hidden rounded-[2.5rem]">
            <img src={heroContent.accentImage} alt="Editorial portrait captured by Josh" className="h-full w-full object-cover" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute -left-4 -bottom-10 w-52 rounded-[2rem] border border-white/30 bg-white/15 p-4 text-white shadow-soft backdrop-blur"
        >
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/80">Now booking</p>
          <p className="mt-2 font-display text-2xl">2025 dates</p>
          <p className="text-xs text-white/70">Limited weekends + custom collections</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
