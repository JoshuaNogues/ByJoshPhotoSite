import { motion } from 'framer-motion';
import { services } from '../content.js';

const Services = () => (
  <section id="services" className="scroll-mt-32 bg-white py-24">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 text-center">
        <h2 className="section-title mx-auto text-charcoal">Intentional Offerings</h2>
        <p className="section-subtitle mx-auto text-charcoal/80">
          Collections designed around connection, thoughtful preparation, and art that lasts well beyond the
          moment.
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
            className="flex flex-col rounded-[2.5rem] border border-sand/70 bg-ivory/70 p-8 shadow-sm"
          >
            <h3 className="font-display text-2xl text-charcoal">{service.title}</h3>
            <p className="mt-4 flex-1 text-sm text-charcoal/75">{service.description}</p>
            <ul className="mt-6 space-y-2 text-xs uppercase tracking-[0.25em] text-stone">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-block h-1 w-6 rounded-full bg-charcoal" aria-hidden="true" />
                  {item}
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
