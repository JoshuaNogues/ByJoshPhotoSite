import { motion } from 'framer-motion';
import { services } from '../content.js';

const Services = () => (
  <section id="services" className="scroll-mt-32 bg-white py-24">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 text-center">
        <p className="eyebrow">Offerings</p>
        <h2 className="section-title">Tailored collections for every chapter.</h2>
        <p className="section-subtitle">
          Each experience is crafted with timelines, art direction, and intentional communication so you can
          settle in and savor the day.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col rounded-[2.5rem] border border-porcelain/70 bg-porcelain/40 p-8 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <span className="text-[0.65rem] uppercase tracking-[0.35em] text-dusk/70">Collection</span>
              <span className="font-display text-3xl text-ink">0{index + 1}</span>
            </div>
            <h3 className="mt-6 font-display text-3xl text-ink">{service.title}</h3>
            <p className="mt-4 flex-1 text-sm text-dusk">{service.description}</p>
            <ul className="mt-6 space-y-3 text-[0.7rem] uppercase tracking-[0.35em] text-dusk/70">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-block h-px w-8 bg-dusk/40" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
