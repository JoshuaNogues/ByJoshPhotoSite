import { useState } from 'react';
import { navigation } from '../content.js';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-ivory/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-2xl font-semibold tracking-[0.3em] text-charcoal">
          BY JOSH
        </a>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.25em] text-stone md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-charcoal transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary text-xs tracking-[0.3em]">
            Inquire
          </a>
        </nav>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal text-charcoal md:hidden"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-sand bg-ivory/98 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-6 text-sm uppercase tracking-[0.25em] text-charcoal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={handleClose}>
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={handleClose} className="btn btn-primary text-center text-xs tracking-[0.3em]">
              Inquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
