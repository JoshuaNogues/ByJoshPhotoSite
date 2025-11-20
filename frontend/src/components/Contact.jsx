import { motion } from 'framer-motion';
import logo from '../../photos/logo.PNG';
import contactBackground from '../../photos/DSC03316.jpg';

const Contact = () => (
  <section
    id="contact"
    className="scroll-mt-32 relative overflow-hidden bg-ink py-24 text-linen"
    style={{
      backgroundImage: `linear-gradient(120deg, rgba(5, 4, 4, 0.92), rgba(10, 8, 7, 0.65)), url(${contactBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 opacity-40" aria-hidden="true">
      <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_55%)]" />
    </div>
    <div className="relative mx-auto max-w-4xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="mb-6 flex justify-center"
      >
        <img src={logo} alt="By Josh Photo" className="h-16 w-auto" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-[0.65rem] uppercase tracking-[0.5em] text-porcelain"
      >
        Let&apos;s create together
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="mt-4 font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-tight"
      >
        Ready to craft imagery that carries your story?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mx-auto mt-6 max-w-2xl text-base text-porcelain"
      >
        Share your plans, your people, and the moments you want to remember. I&apos;ll respond within two business
        days with tailored collection details and next steps.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10 flex flex-col items-center gap-6 text-[0.68rem] uppercase tracking-[0.4em]"
      >
        <a href="mailto:hello@byjoshphoto.com" className="btn btn-soft bg-linen text-ink hover:bg-porcelain">
          hello@byjoshphoto.com
        </a>
        <p className="text-sm text-porcelain/70">Based in Nashville • Traveling worldwide</p>
      </motion.div>
    </div>
  </section>
);

export default Contact;
