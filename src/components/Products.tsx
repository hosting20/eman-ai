import { Boxes, Sprout, Workflow, type LucideIcon } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import SectionHeader from './SectionHeader';

const productIcons: Record<string, LucideIcon> = {
  shumul: Boxes,
  nabta: Sprout,
  consulting: Workflow,
};

const ctaClasses = {
  dark: 'block rounded-[10px] bg-ink p-3 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-accent',
  accent:
    'block rounded-[10px] bg-accent p-3 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover',
  outline:
    'block rounded-[10px] border-[1.5px] border-ink p-[11px] text-center text-sm font-semibold text-ink no-underline transition-colors hover:bg-ink hover:text-white',
};

export default function Products() {
  const p = siteConfig.products;
  return (
    <section id="products" className="mx-auto flex w-full max-w-content flex-col gap-9 px-6 pb-20 pt-10">
      <SectionHeader eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />
      <div className="grid items-stretch gap-6 md:grid-cols-3">
        {p.items.map((item) => {
          const Icon = productIcons[item.id];
          return (
            <div
              key={item.id}
              className={
                'flex flex-col gap-3.5 rounded-[20px] bg-surface px-7 py-8 ' +
                (item.featured ? 'relative border-2 border-accent shadow-featured' : 'border border-line')
              }
            >
              {item.featured && (
                <div className="absolute -top-[13px] right-7 whitespace-nowrap rounded-full bg-accent px-3.5 py-1 text-[11.5px] font-semibold text-white">
                  {p.featuredBadge}
                </div>
              )}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-accent">
                <Icon size={22} />
              </div>
              <div className="font-heading text-[21px] font-bold">{item.name}</div>
              <div className="text-[13px] font-semibold text-accent">{item.tagline}</div>
              <p className="m-0 flex-1 text-[13.5px] font-light leading-loose text-ink-soft">{item.description}</p>
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading text-xl font-extrabold">{item.price}</span>
                {item.priceNote && <span className="text-[12.5px] text-muted">{item.priceNote}</span>}
              </div>
              <a
                href={item.cta.href}
                {...(item.cta.external ? { target: '_blank', rel: 'noopener' } : {})}
                className={ctaClasses[item.ctaVariant]}
              >
                {item.cta.label}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
