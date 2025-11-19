import { motion } from 'framer-motion';
import { processSteps } from '../content.js';

const Process = () => (
  <section className="scroll-mt-32 bg-white py-24">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 text-center">
        <h2 className="section-title mx-auto text-charcoal">A Seamless Process</h2>
        <p className="section-subtitle mx-auto text-charcoal/80">
          A thoughtful, guided experience from our first conversation to the moment you hold your photographs.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col gap-4 rounded-3xl border border-sand/70 bg-ivory/70 p-8 text-left"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-stone">{step.step}</span>
            <h3 className="font-display text-2xl text-charcoal">{step.title}</h3>
            <p className="text-sm text-charcoal/75">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
