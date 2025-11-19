import { useState } from 'react';
import { navigation } from '../content.js';
import wordmark from '../../photos/logo-black.PNG';
import logoMark from '../../photos/Logo_Favicon.PNG';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-porcelain/80 bg-linen/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center" onClick={handleClose}>
          <img src={wordmark} alt="By Josh Photo" className="h-11 w-auto object-contain" />
        </a>
        <nav className="hidden items-center gap-8 text-[0.68rem] uppercase tracking-[0.4em] text-dusk md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary text-[0.68rem]">
            Inquire
          </a>
        </nav>
        <button
          type="button"
          className={`flex h-12 w-12 items-center justify-center rounded-full border border-ink/60 bg-porcelain/70 transition md:hidden ${
            open ? 'ring-2 ring-ink/40' : ''
          }`}
          onClick={handleToggle}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          <img src={logoMark} alt="" className="h-7 w-7 object-contain" />
        </button>
      </div>
      {open && (
        <div className="border-t border-porcelain bg-linen/98 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-6 text-[0.68rem] uppercase tracking-[0.4em] text-ink">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={handleClose} className="py-1">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={handleClose} className="btn btn-primary text-center text-[0.68rem]">
              Inquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
