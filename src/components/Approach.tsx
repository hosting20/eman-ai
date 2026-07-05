import { siteConfig } from '../siteConfig';
import SectionHeader from './SectionHeader';

type Step = (typeof siteConfig.approach.steps)[number];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="mb-9 flex flex-col gap-2.5 rounded-[14px] border border-line border-t-[3px] border-t-accent bg-surface px-7 py-[26px] shadow-card">
      <span dir="ltr" className="text-right font-mono text-xs font-bold text-accent">
        {step.n}
      </span>
      <h3 className="m-0 font-heading text-xl font-bold">{step.title}</h3>
      <p className="m-0 text-[13.5px] font-light leading-loose text-ink-soft">{step.body}</p>
      <span className="self-start rounded-full border border-tint-border bg-tint px-3.5 py-[5px] text-[11px] font-semibold text-accent-deep">
        {step.meta}
      </span>
    </div>
  );
}

function TimelineDot() {
  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="mt-[26px] flex h-4 w-4 flex-none items-center justify-center rounded-full border-[2.5px] border-accent bg-cream">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </div>
      <div className="w-0.5 flex-1 bg-gradient-to-b from-[#c9baee] to-tint-border" />
    </div>
  );
}

export default function Approach() {
  const a = siteConfig.approach;
  return (
    <section id="approach" className="mx-auto flex max-w-content flex-col gap-11 px-6 pb-20 pt-10">
      <SectionHeader eyebrow={a.eyebrow} title={a.title} />
      <div className="relative flex flex-col">
        {a.steps.map((step, i) => (
          <div key={step.n} className="grid grid-cols-[44px_1fr] items-start md:grid-cols-[1fr_44px_1fr]">
            {/* right cell (desktop, RTL start side) — even steps */}
            <div className="hidden md:block">{i % 2 === 0 && <StepCard step={step} />}</div>
            <TimelineDot />
            {/* left cell — odd steps on desktop, every step on mobile */}
            <div>
              <div className="md:hidden">
                <StepCard step={step} />
              </div>
              <div className="hidden md:block">{i % 2 === 1 && <StepCard step={step} />}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
