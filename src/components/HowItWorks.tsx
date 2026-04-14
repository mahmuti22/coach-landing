import { content } from "@/data/content";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";

export function HowItWorks() {
  const { howItWorks } = content;

  return (
    <SectionContainer id="how-it-works">
      <SectionHeading
        eyebrow={howItWorks.heading.eyebrow}
        title={howItWorks.heading.title}
      />
      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {howItWorks.steps.map((item) => (
          <article
            key={item.step}
            className="relative flex flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-800/20 to-zinc-950/95 p-7 shadow-[0_20px_60px_-32px_rgba(0,0,0,0.65)] ring-1 ring-inset ring-white/[0.04] sm:p-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-500/80">
              {howItWorks.stepPrefix} {item.step}
            </p>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
              {item.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
