import { navigation } from '../content.js';
import logo from '../../photos/logo-black.PNG';

const Footer = () => (
  <footer className="bg-linen py-12">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
        <img src={logo} alt="By Josh Photo" className="h-12 w-auto" />
        <p className="text-sm text-dusk">Refined, heartfelt imagery rooted in connection.</p>
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-dusk/70">
          &copy; {new Date().getFullYear()} By Josh Photo
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 text-[0.68rem] uppercase tracking-[0.35em] text-dusk/80 lg:flex-row">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-ink">
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6 text-sm text-dusk">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-ink">
          Instagram
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="transition hover:text-ink">
          Pinterest
        </a>
        <a href="mailto:hello@byjoshphoto.com" className="transition hover:text-ink">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
