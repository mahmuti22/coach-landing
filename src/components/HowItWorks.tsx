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
            className="metal-border relative flex flex-col overflow-hidden rounded-2xl p-7 shadow-[0_20px_60px_-32px_rgba(0,0,0,0.65)] sm:p-8"
          >
            <p className="relative z-[1] text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              {howItWorks.stepPrefix} {item.step}
            </p>
            <h3 className="relative z-[1] mt-4 text-xl font-semibold tracking-tight text-white">
              {item.title}
            </h3>
            <p className="relative z-[1] mt-4 text-[15px] leading-relaxed text-zinc-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
