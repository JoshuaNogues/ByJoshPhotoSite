import heroImage from '../photos/BJP09724.jpg';
import heroAccent from '../photos/jen and ben.jpeg';
import portraitImage from '../photos/BJP05100-2.jpg';
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
  accentImage: heroAccent,
  eyebrow: 'By Josh Photo',
  title: 'Artful imagery for the wildly in love.',
  tagline: 'Editorial wedding & lifestyle photography rooted in feeling, texture, and timeless elegance.',
  description:
    'Guiding you with intention while leaving space for the in-between. By Josh Photo delivers galleries that feel cinematic yet honest—woven together with film, digital, and a reverence for atmosphere.',
  primaryCta: { label: 'Begin your inquiry', href: '#contact' },
  secondaryCta: { label: 'Explore the work', href: '#portfolio' },
  features: ['Based in Nashville', 'Traveling worldwide', 'Film + digital workflow'],
};

export const aboutContent = {
  image: portraitImage,
  heading: 'Photography with heart and presence.',
  tagline: 'A bespoke experience shaped by trust, direction, and ease.',
  copy: [
    'I believe the best photographs feel like a deep breath—a quiet reflection of who you are in this season of life.',
    'From the first email to your finished gallery, I build space for connection, ease, and thoughtful direction so we can create images that feel timeless and alive.',
  ],
  quote: '“Josh balances editorial direction with soulful storytelling. The result is imagery that feels lived-in and endlessly chic.”',
  signature: 'Joshua — lead photographer',
  stats: [
    { figure: '10+', label: 'Years crafting heartfelt imagery' },
    { figure: '250', label: 'Stories told across the East Coast' },
    { figure: '35mm', label: 'Film + digital hybrid workflow' },
  ],
  values: [
    {
      title: 'Guided with intention',
      description: 'Thoughtful direction and customized timelines so you can be fully present.',
    },
    {
      title: 'Editorial meets organic',
      description: 'Romantic portraits balanced with documentary candids to tell the whole story.',
    },
    {
      title: 'Heirloom delivery',
      description: 'Fine-art albums, handcrafted boxes, and online galleries ready to share.',
    },
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
