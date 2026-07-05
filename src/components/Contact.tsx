import { useState, type FormEvent } from 'react';
import { Check } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import SectionHeader from './SectionHeader';

function Chip({ label, selected, onToggle }: { label: string; selected: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={
        'cursor-pointer rounded-full px-[18px] py-2.5 font-body text-[12.5px] transition-all ' +
        (selected
          ? 'border-[1.5px] border-accent bg-tint font-semibold text-accent-deep'
          : 'border-[1.5px] border-input-line bg-white font-medium text-[#554e45]')
      }
    >
      {label}
    </button>
  );
}

export default function Contact() {
  const c = siteConfig.contact;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('');
  const [sent, setSent] = useState(false);

  const filled = [name.trim(), email.trim(), msg.trim(), services.length ? 'x' : '', timeline].filter(Boolean).length;

  const toggleService = (label: string) =>
    setServices((prev) => (prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire to a form service / API route that forwards to siteConfig.email
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto flex w-full max-w-content flex-col gap-10 px-6 pb-[90px] pt-10">
      <SectionHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
      <div className="grid items-start gap-7 lg:grid-cols-[380px_minmax(0,1fr)]">
        {/* side column */}
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-2.5 rounded-2xl border border-line bg-surface px-[22px] py-5">
            <div className="flex items-center justify-between">
              <span className="text-[13.5px] font-semibold">{c.progressLabel}</span>
              <span dir="ltr" className="font-mono text-[13px] font-bold text-accent">
                {filled}/5
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded bg-line">
              <div
                className="h-2 rounded bg-gradient-to-l from-[#8b6fd4] to-accent transition-[width] duration-300"
                style={{ width: `${(filled / 5) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[13px] rounded-2xl border border-line bg-surface p-[22px]">
            <span className="text-sm font-bold">{c.expectTitle}</span>
            {c.expectations.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[13px] text-[#554e45]">
                <Check size={14} className="shrink-0 text-accent" />
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-line bg-[#faf5ee] px-[22px] py-5">
            <span className="text-[13px] text-ink-soft">{c.emailCardLabel}</span>
            <a
              href={`mailto:${siteConfig.email}`}
              dir="ltr"
              className="text-right text-[13.5px] font-semibold text-accent no-underline hover:underline"
            >
              {siteConfig.email} ←
            </a>
          </div>
        </div>

        {/* form card */}
        <div className="min-w-0 rounded-[20px] border border-line bg-surface p-8 shadow-form">
          {!sent ? (
            <form onSubmit={submit} className="flex flex-col gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-[7px]">
                  <label htmlFor="contact-name" className="text-[13px] font-semibold">
                    {c.form.nameLabel} <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={c.form.namePlaceholder}
                    className="rounded-[10px] border-[1.5px] border-input-line bg-white px-4 py-3 text-[13.5px] text-ink outline-none focus:border-accent"
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label htmlFor="contact-email" className="text-[13px] font-semibold">
                    {c.form.emailLabel} <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    dir="ltr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={c.form.emailPlaceholder}
                    className="rounded-[10px] border-[1.5px] border-input-line bg-white px-4 py-3 text-left text-[13.5px] text-ink outline-none focus:border-accent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[9px]">
                <span className="text-[13px] font-semibold">
                  {c.form.servicesLabel} <span className="text-accent">*</span>
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {c.form.serviceOptions.map((label) => (
                    <Chip
                      key={label}
                      label={label}
                      selected={services.includes(label)}
                      onToggle={() => toggleService(label)}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[9px]">
                <span className="text-[13px] font-semibold">
                  {c.form.timelineLabel} <span className="text-accent">*</span>
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {c.form.timelineOptions.map((label) => (
                    <Chip
                      key={label}
                      label={label}
                      selected={timeline === label}
                      onToggle={() => setTimeline(timeline === label ? '' : label)}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[7px]">
                <label htmlFor="contact-msg" className="text-[13px] font-semibold">
                  {c.form.messageLabel} <span className="text-accent">*</span>
                </label>
                <textarea
                  id="contact-msg"
                  required
                  rows={4}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder={c.form.messagePlaceholder}
                  className="resize-y rounded-[10px] border-[1.5px] border-input-line bg-white px-4 py-3 text-[13.5px] text-ink outline-none focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer rounded-[10px] border-none bg-accent p-3.5 font-body text-[15px] font-semibold text-white shadow-cta transition-colors hover:bg-accent-hover"
              >
                {c.form.submitLabel}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-2.5 px-5 py-[60px] text-center">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-tint text-accent">
                <Check size={24} />
              </div>
              <div className="font-heading text-[19px] font-bold">{c.success.title}</div>
              <div className="text-[13.5px] text-ink-soft">{c.success.body}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
