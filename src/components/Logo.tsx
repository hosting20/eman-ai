import { siteConfig } from '../siteConfig';

export default function Logo({ small = false }: { small?: boolean }) {
  const { initials, wordmark } = siteConfig.brand;
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={
        small
          ? 'flex h-6 w-6 items-center justify-center rounded-[7px] bg-accent font-heading text-[10px] font-extrabold text-white'
          : 'flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-accent font-heading text-[13px] font-extrabold text-white'
        }
      >
        {initials}
      </div>
      <div
        className={
        small
          ? 'font-heading text-[13px] font-semibold text-ink'
          : 'font-heading text-[15px] font-bold text-ink'
        }
      >
        {wordmark}
      </div>
    </div>
  );
}
