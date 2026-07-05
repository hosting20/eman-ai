import { Fragment, type CSSProperties } from 'react';
import { Check } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { useInView } from '../hooks/useInView';

const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;

export default function HeroMockWindow() {
  const w = siteConfig.mockWindow;
  const { ref, inView } = useInView<HTMLDivElement>(0.55);

  return (
    <div className="mx-auto max-w-[880px] px-6 pb-[84px] pt-[26px]">
      <div
        ref={ref}
        className={
          'overflow-hidden rounded-2xl border border-line bg-surface shadow-window' + (inView ? ' mock-in' : '')
        }
      >
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-line bg-[#faf5ee] px-4 py-[11px]">
          <span className="h-[11px] w-[11px] rounded-full bg-[#f26d5b]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#f5b944]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#4fc06a]" />
          <span className="flex-1 text-center text-[11.5px] font-semibold text-label">{w.title}</span>
        </div>
        {/* flow */}
        <div className="flex flex-col gap-[18px] px-6 py-[26px]">
          <div className="flex flex-wrap items-stretch gap-2.5">
            {w.nodes.map((node, i) => (
              <Fragment key={node.title}>
                {i > 0 && (
                  <span className="reveal-item self-center text-lg font-bold text-accent" style={delay(i * 0.18 - 0.09)}>
                    ←
                  </span>
                )}
                <div
                  style={delay(i * 0.18)}
                  className={
                    'reveal-node flex min-w-[150px] flex-1 flex-col gap-1 rounded-xl px-4 py-3.5 ' +
                    (node.tagAccent ? 'border-[1.5px] border-tint-border bg-tint' : 'border-[1.5px] border-input-line bg-white')
                  }
                >
                  <span className={'text-[10.5px] font-bold ' + (node.tagAccent ? 'text-accent' : 'text-label')}>
                    {node.tag}
                  </span>
                  <span className="text-[13px] font-semibold">{node.title}</span>
                  <span className="text-[10.5px] text-label">{node.sub}</span>
                </div>
              </Fragment>
            ))}
          </div>
          <div
            className="reveal-item flex items-center gap-2 rounded-[10px] border border-success-border bg-success-bg px-4 py-2.5"
            style={delay(0.6)}
          >
            <Check size={14} className="shrink-0 text-success" />
            <span className="text-[12.5px] font-medium text-success-text">{w.successNote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
