import heroImage from '../photos/front image.png';
import portraitImage from '../photos/me.png';
import imageOne from '../photos/BJP07325.jpg';
import imageTwo from '../photos/DSC02063.jpg';
import imageThree from '../photos/jovi.JPG';
import imageFour from '../photos/lizandleo.jpg';
import imageFive from '../photos/rawil and angie.jpeg';
import imageSix from '../photos/jen and ben.jpeg';

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Stories', href: '#stories' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  image: heroImage,
  eyebrow: 'By Josh Photo',
  title: 'Moments that feel like home.',
  description:
    'Documenting honest, intimate stories with a refined cinematic touch. Serving couples, families, and brands who value artfully preserved memories.',
  primaryCta: { label: 'Start your story', href: '#contact' },
  secondaryCta: { label: 'View portfolio', href: '#portfolio' },
};

export const aboutContent = {
  image: portraitImage,
  heading: 'Photography with heart and presence.',
  copy: [
    'I believe the best photographs feel like a deep breath—a quiet reflection of who you are in this season of life.',
    'From the first email to your finished gallery, I build space for connection, ease, and thoughtful direction so we can create images that feel timeless and alive.',
  ],
  stats: [
    { figure: '10+', label: 'years crafting heartfelt imagery' },
    { figure: '250', label: 'stories told across the East Coast' },
    { figure: '35mm', label: 'film + digital hybrid workflow' },
  ],
};

export const services = [
  {
    title: 'Weddings & Elopements',
    description:
      'Editorial storytelling that honors the atmosphere of your day—capturing genuine emotion, elegant details, and every in-between moment.',
    deliverables: ['Full-day coverage', 'Timeline planning support', 'Heirloom albums & prints'],
  },
  {
    title: 'Couples & Engagements',
    description:
      'From mountaintops to city streets, we craft sessions that feel personal and grounded in your shared story.',
    deliverables: ['Flexible locations', 'Wardrobe guidance', 'Film add-ons available'],
  },
  {
    title: 'Lifestyle & Brand',
    description:
      'Thoughtful imagery for creatives, makers, and boutique brands seeking a refined visual identity that still feels warm.',
    deliverables: ['Creative direction', 'Studio or on-location', 'Launch-ready galleries'],
  },
];

export const testimonials = [
  {
    quote:
      'Josh sees the quiet, sacred moments that everyone else misses. Our gallery feels like stepping back into our wedding day—calm, joyful, and so full of love.',
    author: 'Lauren & Theo',
    location: 'Hudson Valley wedding',
  },
  {
    quote:
      'His direction felt natural, never stiff. We spent the afternoon laughing, exploring, and feeling completely ourselves. The photos are pure magic.',
    author: 'Monica & James',
    location: 'Blue Ridge engagement',
  },
  {
    quote:
      'Josh translated our brand into imagery that communicates who we are—inviting, grounded, and intentional. The collection elevated every touchpoint of our launch.',
    author: 'Fieldhouse Studio',
    location: 'Creative branding session',
  },
];

export const galleryImages = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix];

export const storyHighlights = [
  {
    title: 'Liz & Leo',
    description: 'Sun-soaked vows in the mountains with an intimate celebration under the stars.',
    image: imageFour,
  },
  {
    title: 'Rawil & Angie',
    description: 'An effortless coastal elopement filled with laughter, film grain, and sea breeze.',
    image: imageFive,
  },
  {
    title: 'Jen & Ben',
    description: 'Urban rooftop engagement session with warm light and playful energy.',
    image: imageSix,
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Connect & Align',
    description:
      'We begin with a conversation about your vision, priorities, and every detail that matters most.',
  },
  {
    step: '02',
    title: 'Craft the Experience',
    description:
      'I guide you with location scouting, timeline design, and thoughtful prompts to keep things effortless.',
  },
  {
    step: '03',
    title: 'Preserve the Story',
    description:
      'Your images are delivered in a curated online gallery with optional fine-art albums and prints.',
  },
];
