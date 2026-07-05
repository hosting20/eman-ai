export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-2.5 text-center">
      <div className="text-[13px] font-bold tracking-[1px] text-accent">{eyebrow}</div>
      <h2 className="m-0 font-heading text-[28px] font-extrabold md:text-[38px]">{title}</h2>
      {subtitle && <p className="m-0 text-[15px] font-light text-ink-soft">{subtitle}</p>}
    </div>
  );
}
