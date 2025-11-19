import { motion } from 'framer-motion';
import { testimonials } from '../content.js';

const Testimonials = () => (
  <section className="scroll-mt-32 bg-ivory py-24" id="experience">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-12 text-center">
        <h2 className="section-title mx-auto text-charcoal">Words from Kind Humans</h2>
        <p className="section-subtitle mx-auto text-charcoal/80">
          The experience is rooted in ease, intention, and care—here&apos;s how that felt for the people I&apos;ve
          had the honor to photograph.
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
            className="flex flex-col gap-6 rounded-[2.5rem] border border-sand/70 bg-white/80 p-8 shadow-sm"
          >
            <p className="text-base italic text-charcoal/80 leading-relaxed">“{testimonial.quote}”</p>
            <footer className="text-xs uppercase tracking-[0.3em] text-stone">
              {testimonial.author}
              <span className="ml-3 text-stone/70">{testimonial.location}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
