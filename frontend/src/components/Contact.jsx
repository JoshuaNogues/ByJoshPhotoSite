import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="scroll-mt-32 relative overflow-hidden bg-charcoal py-24 text-ivory">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" aria-hidden="true" />
    <div className="relative mx-auto max-w-5xl px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-xs uppercase tracking-[0.4em] text-sand"
      >
        Let&apos;s Create Together
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="mt-4 font-display text-4xl leading-tight sm:text-5xl"
      >
        Ready to craft imagery that carries your story?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mx-auto mt-6 max-w-2xl text-base text-ivory/70"
      >
        Share your plans, your people, and the moments you want to remember. I&apos;ll respond within two
        business days with tailored collection details and next steps.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10 flex flex-col items-center gap-6 text-sm uppercase tracking-[0.3em]"
      >
        <a href="mailto:hello@byjoshphoto.com" className="btn btn-primary border-ivory bg-ivory text-charcoal hover:bg-sand">
          hello@byjoshphoto.com
        </a>
        <p className="text-ivory/60">Based in North Carolina • Traveling worldwide</p>
      </motion.div>
    </div>
  </section>
);

export default Contact;
