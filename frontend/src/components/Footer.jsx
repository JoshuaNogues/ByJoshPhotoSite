const Footer = () => (
  <footer className="bg-ivory py-12">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.3em] text-stone md:flex-row">
      <span>&copy; {new Date().getFullYear()} By Josh Photo</span>
      <div className="flex gap-6">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-charcoal">
          Instagram
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="hover:text-charcoal">
          Pinterest
        </a>
        <a href="mailto:hello@byjoshphoto.com" className="hover:text-charcoal">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
