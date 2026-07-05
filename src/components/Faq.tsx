import { useState } from 'react';
import { siteConfig } from '../siteConfig';
import SectionHeader from './SectionHeader';

export default function Faq() {
  const f = siteConfig.faq;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="mx-auto flex w-full max-w-[760px] flex-col gap-8 px-6 pb-20 pt-10">
      <SectionHeader eyebrow={f.eyebrow} title={f.title} />
      <div className="flex flex-col gap-3">
        {f.items.map((item, i) => (
          <div key={item.q} className="overflow-hidden rounded-[14px] border border-line bg-surface">
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-3.5 border-none bg-transparent px-[22px] py-[18px] text-right font-body text-[15px] font-medium text-ink"
            >
              <span>{item.q}</span>
              <span className="flex-none text-lg text-accent">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <p className="m-0 px-[22px] pb-5 pt-0 text-[13.5px] font-light leading-loose text-ink-soft">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
