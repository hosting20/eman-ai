import { siteConfig } from '../siteConfig';
import SectionHeader from './SectionHeader';

function ChatDemo() {
  const { chat } = siteConfig.services.agents;
  return (
    <div className="flex flex-col gap-2.5 rounded-[14px] border border-tint-border bg-tint p-[18px]">
      {chat.map((m, i) =>
        m.from === 'user' ? (
          <div key={i} className="flex items-start gap-2">
            <span className="h-6 w-6 flex-none rounded-full bg-[#c0aeea]" />
            <div className="rounded-[10px] bg-white px-3.5 py-2 text-xs leading-[1.8] shadow-bubble">{m.text}</div>
          </div>
        ) : (
          <div key={i} className="self-end rounded-[10px] bg-accent px-4 py-2 text-xs font-semibold text-white">
            {m.text}
          </div>
        ),
      )}
    </div>
  );
}

function WorkflowDemo() {
  const { nodes } = siteConfig.services.workflows;
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 rounded-[14px] border border-[#e6def5] bg-[#f7f4fd] p-[22px]">
      <div className="flex flex-col items-center gap-[5px] rounded-[10px] border border-input-line bg-white px-3.5 py-2.5 shadow-node">
        <span className="h-3.5 w-3.5 rounded" style={{ background: nodes.input.color }} />
        <span className="text-[10.5px] font-semibold">{nodes.input.label}</span>
      </div>
      <span className="text-muted">←</span>
      <div className="flex flex-col items-center gap-[5px] rounded-[10px] border border-input-line bg-white px-3.5 py-2.5 shadow-node">
        <span className="h-3.5 w-3.5 rounded" style={{ background: nodes.process.color }} />
        <span className="text-[10.5px] font-semibold">{nodes.process.label}</span>
      </div>
      <span className="text-muted">←</span>
      <div className="flex flex-col gap-2">
        {nodes.outputs.map((o) => (
          <div key={o.label} className="flex items-center gap-1.5 rounded-[10px] border border-input-line bg-white px-3 py-2 shadow-node">
            <span className="h-3 w-3 rounded" style={{ background: o.color }} />
            <span className="text-[10px] font-semibold">{o.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoadmapDemo() {
  const { roadmapLabel, roadmap } = siteConfig.services.noCode;
  return (
    <div className="flex flex-col gap-3 rounded-[14px] border border-success-border bg-[#f2faf4] p-[22px]">
      <span className="text-[10.5px] font-bold tracking-[1px] text-success">{roadmapLabel}</span>
      {roadmap.map((r) => (
        <div key={r.label} className="flex flex-col gap-1">
          <div className="flex justify-between text-[11px]">
            <b>{r.label}</b>
            <span className="text-label">{r.weeks}</span>
          </div>
          <div className="h-[7px] rounded bg-[#dcefe0]">
            <div className="h-[7px] rounded" style={{ background: r.color, width: `${r.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  const s = siteConfig.services;
  return (
    <section id="services" className="mx-auto flex max-w-content flex-col gap-9 px-6 pb-20 pt-10">
      <SectionHeader eyebrow={s.eyebrow} title={s.title} />

      {/* wide card: AI agents + chat demo */}
      <div className="grid items-center gap-9 rounded-[20px] border border-line bg-[rgba(255,253,251,.8)] p-9 md:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-3">
          <h3 className="m-0 font-heading text-2xl font-bold">{s.agents.title}</h3>
          <p className="m-0 text-[14.5px] font-light leading-loose text-ink-soft">{s.agents.body}</p>
        </div>
        <ChatDemo />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-5 rounded-[20px] border border-line bg-[rgba(255,253,251,.8)] p-[30px]">
          <WorkflowDemo />
          <div className="flex flex-col gap-2.5">
            <h3 className="m-0 font-heading text-[21px] font-bold">{s.workflows.title}</h3>
            <p className="m-0 text-[13.5px] font-light leading-loose text-ink-soft">{s.workflows.body}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 rounded-[20px] border border-line bg-[rgba(255,253,251,.8)] p-[30px]">
          <RoadmapDemo />
          <div className="flex flex-col gap-2.5">
            <h3 className="m-0 font-heading text-[21px] font-bold">{s.noCode.title}</h3>
            <p className="m-0 text-[13.5px] font-light leading-loose text-ink-soft">{s.noCode.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
