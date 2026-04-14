import { buildConsultationMailto } from "@/config/contact";
import { content } from "@/data/content";
import { PrimaryButton } from "./PrimaryButton";
import { SectionContainer } from "./SectionContainer";

export function FinalCTA() {
  const { finalCta } = content;

  return (
    <SectionContainer id="final-cta" className="pb-10 lg:pb-14">
      <div className="relative rounded-[2rem] p-[1px] shadow-[0_32px_100px_-28px_rgba(0,0,0,0.85)] sm:rounded-[2.25rem]">
        <div
          className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-amber-500/35 via-white/10 to-zinc-700/30 sm:rounded-[2.25rem]"
          aria-hidden="true"
        />
        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950/95 sm:rounded-[2.25rem]">
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.12), transparent 55%), radial-gradient(ellipse 60% 45% at 100% 100%, rgba(63,63,70,0.4), transparent 55%)",
            }}
          />
          <div className="relative px-8 py-12 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-500/85">
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
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                >
                  <span
                    className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/90 shadow-[0_0_12px_rgba(245,158,11,0.55)]"
                    aria-hidden="true"
                  />
                  {point}
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
      </div>
    </SectionContainer>
  );
}
