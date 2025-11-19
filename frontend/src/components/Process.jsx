import { motion } from 'framer-motion';
import { processSteps } from '../content.js';

const Process = () => (
  <section className="scroll-mt-32 bg-white py-24">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 text-center">
        <p className="eyebrow">Process</p>
        <h2 className="section-title">Guided from inquiry to delivery.</h2>
        <p className="section-subtitle">
          A collaborative, concierge-style workflow ensuring you feel supported at every milestone.
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
            className="flex flex-col gap-4 rounded-[2.5rem] border border-porcelain/70 bg-porcelain/30 p-8"
          >
            <span className="text-[0.65rem] uppercase tracking-[0.45em] text-dusk/70">{step.step}</span>
            <h3 className="font-display text-3xl text-ink">{step.title}</h3>
            <p className="text-sm text-dusk">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
