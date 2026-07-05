import { siteConfig } from '../siteConfig';
import Logo from './Logo';

export default function Footer() {
  const f = siteConfig.footer;
  return (
    <footer className="border-t border-[rgba(180,150,120,.18)] bg-[rgba(255,253,251,.6)]">
      <div className="mx-auto flex max-w-content flex-wrap items-center gap-5 px-6 py-[26px] text-[12.5px] text-label">
        <Logo small />
        <div className="flex-1" />
        {f.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}
            {...('ltr' in l && l.ltr ? { dir: 'ltr' } : {})}
            className="text-inherit no-underline transition-colors hover:text-accent"
          >
            {l.label}
          </a>
        ))}
        <span>{f.copyright}</span>
      </div>
    </footer>
  );
}
