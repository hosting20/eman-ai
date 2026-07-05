import { siteConfig } from '../siteConfig';

export default function Hero() {
  const h = siteConfig.hero;
  return (
    <header className="mx-auto flex max-w-[820px] flex-col items-center gap-[22px] px-6 pb-[30px] pt-[84px] text-center">
      <h1 className="m-0 font-heading text-[34px] font-extrabold leading-[1.35] tracking-[-0.5px] md:text-[54px]">
        {h.titleLine1}
        <br />
        {h.titleLine2Prefix}
        <span className="text-accent">{h.titleAccent}</span>
      </h1>
      <div className="h-1 w-11 rounded-sm bg-accent" />
      <p className="m-0 max-w-[580px] text-[17px] font-light leading-[1.95] text-ink-soft">{h.subcopy}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={h.ctaPrimary.href}
          className="whitespace-nowrap rounded-[10px] bg-accent px-7 py-3.5 text-[14.5px] font-semibold text-white no-underline shadow-cta transition-colors hover:bg-accent-hover"
        >
          {h.ctaPrimary.label}
        </a>
        <a
          href={h.ctaSecondary.href}
          className="whitespace-nowrap rounded-[10px] border border-input-line bg-white px-7 py-3.5 text-[14.5px] font-medium text-ink no-underline transition-colors hover:border-accent hover:text-accent"
        >
          {h.ctaSecondary.label}
        </a>
      </div>
    </header>
  );
}
