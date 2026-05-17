import { buildConsultationMailto } from "@/config/contact";
import { content } from "@/data/content";
import { PrimaryButton } from "./PrimaryButton";
import { SectionContainer } from "./SectionContainer";

export function FinalCTA() {
  const { finalCta } = content;

  return (
    <SectionContainer id="final-cta" className="pb-10 lg:pb-14">
      <div className="metal-border metal-border-featured relative overflow-hidden rounded-[2rem] shadow-[0_32px_100px_-28px_rgba(0,0,0,0.85)] sm:rounded-[2.25rem]">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-80"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(161,161,170,0.1), transparent 55%), radial-gradient(ellipse 60% 45% at 100% 100%, rgba(63,63,70,0.4), transparent 55%)",
          }}
        />
        <div className="relative z-[1] px-8 py-12 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
            {finalCta.eyebrow}
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {finalCta.description}
          </p>
          <ul className="mx-auto mt-10 flex max-w-xl flex-col gap-3 text-left sm:mt-12">
            {finalCta.trustPoints.map((point) => (
              <li
                key={point}
                className="metal-border flex items-start gap-3 rounded-xl px-4 py-3 text-sm text-zinc-300"
              >
                <span
                  className="relative z-[1] mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 shadow-[0_0_12px_rgba(161,161,170,0.45)]"
                  aria-hidden="true"
                />
                <span className="relative z-[1]">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 sm:mt-12">
            <PrimaryButton
              href={buildConsultationMailto()}
              label={finalCta.button.label}
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
