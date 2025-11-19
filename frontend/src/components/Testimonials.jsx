import { motion } from 'framer-motion';
import { testimonials } from '../content.js';

const Testimonials = () => (
  <section className="scroll-mt-32 bg-porcelain/60 py-24" id="experience">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 text-center">
        <p className="eyebrow">Client words</p>
        <h2 className="section-title">Stories told with trust and intention.</h2>
        <p className="section-subtitle">
          Seamless communication, thoughtful guidance, and imagery that instantly transports you back to the
          feeling of the day.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.12 }}
            className="flex h-full flex-col gap-6 rounded-[2.5rem] border border-porcelain/80 bg-white/80 p-8 text-left shadow-soft"
          >
            <p className="text-base italic text-dusk">“{testimonial.quote}”</p>
            <footer className="text-[0.65rem] uppercase tracking-[0.35em] text-dusk/70">
              {testimonial.author}
              <span className="ml-3 text-dusk/50">{testimonial.location}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
