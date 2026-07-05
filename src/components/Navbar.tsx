import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { links, cta } = siteConfig.nav;

  return (
    <nav className="sticky top-0 z-50 border-b border-[rgba(180,150,120,.15)] bg-[rgba(253,249,245,.85)] backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-content items-center gap-7 px-6 py-3.5">
        <a href="#" className="no-underline">
          <Logo />
        </a>
        <div className="flex-1" />
        <div className="hidden gap-[22px] text-[13.5px] text-ink-soft md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-inherit no-underline transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={cta.href}
          className="hidden rounded-[10px] bg-accent px-5 py-2.5 text-[13px] font-semibold text-white no-underline transition-colors hover:bg-accent-hover md:block"
        >
          {cta.label}
        </a>
        <button
          type="button"
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          onClick={() => setOpen((o) => !o)}
          className="cursor-pointer border-none bg-transparent p-1 text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-1 border-t border-line px-6 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-[14px] text-ink-soft no-underline hover:bg-tint hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href={cta.href}
            onClick={() => setOpen(false)}
            className="mt-1 rounded-[10px] bg-accent px-5 py-2.5 text-center text-[13px] font-semibold text-white no-underline hover:bg-accent-hover"
          >
            {cta.label}
          </a>
        </div>
      )}
    </nav>
  );
}
