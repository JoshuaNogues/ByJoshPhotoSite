import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Stories from './components/Stories.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <div className="bg-linen text-ink">
    <Navbar />
    <main className="space-y-0">
      <Hero />
      <About />
      <Portfolio />
      <Stories />
      <Services />
      <Testimonials />
      <Process />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
