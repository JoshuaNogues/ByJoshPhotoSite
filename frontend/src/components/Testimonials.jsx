import { motion } from 'framer-motion';
import { testimonials } from '../content.js';
import backgroundImage from '../../photos/BJP06588.jpg';

const Testimonials = () => (
  <section
    className="scroll-mt-32 relative overflow-hidden py-24 text-linen"
    id="experience"
    style={{
      backgroundImage: `linear-gradient(120deg, rgba(10, 8, 7, 0.92), rgba(18, 15, 13, 0.65)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" aria-hidden="true" />
    <div className="relative mx-auto max-w-6xl px-6">
      <div className="mb-12 text-center">
        <p className="eyebrow text-linen/80">Client words</p>
        <h2 className="section-title text-white">Stories told with trust and intention.</h2>
        <p className="section-subtitle mx-auto text-linen/80 text-center">
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
            className="flex h-full flex-col gap-6 rounded-[2.5rem] border border-white/40 bg-white/85 p-8 text-left text-dusk shadow-soft"
          >
            <p className="text-base italic">“{testimonial.quote}”</p>
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
