import Image from "next/image";
import { content } from "@/data/content";
import { PrimaryButton } from "./PrimaryButton";
import { SectionContainer } from "./SectionContainer";

export function Hero() {
  const { hero } = content;

  return (
    <SectionContainer
      id="hero"
      className="pt-28 pb-24 sm:pt-36 sm:pb-28 lg:pt-40"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-zinc-900/50 shadow-[0_32px_120px_-24px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.04] backdrop-blur-sm sm:rounded-[2.25rem]">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 0% 0%, rgba(245,158,11,0.16), transparent 55%), radial-gradient(ellipse 70% 55% at 100% 0%, rgba(113,113,122,0.35), transparent 50%), linear-gradient(180deg, rgba(24,24,27,0.2) 0%, rgba(9,9,11,0.92) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative grid gap-12 p-8 sm:gap-14 sm:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:p-14">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-10 bg-gradient-to-r from-amber-500/80 to-transparent sm:w-14"
                  aria-hidden="true"
                />
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
                  {hero.eyebrow}
                </p>
              </div>
              <h1 className="max-w-[22ch] text-4xl font-semibold tracking-[-0.03em] text-white sm:max-w-none sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
                {hero.headline}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed">
                {hero.description}
              </p>
            </div>
            <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryButton
                  href={hero.primaryCta.href}
                  label={hero.primaryCta.label}
                />
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-zinc-200 shadow-inner shadow-white/[0.03] backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.07]"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
              <div className="grid w-full grid-cols-3 gap-3 border-t border-white/[0.08] pt-8 sm:w-auto sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                {hero.stats.map((stat) => (
                  <div key={stat.label} className="text-left sm:min-w-[4.5rem]">
                    <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="group relative min-h-[17rem] overflow-hidden rounded-2xl border border-white/[0.1] bg-black/40 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)] ring-1 ring-inset ring-white/[0.06] sm:min-h-[22rem] lg:min-h-0">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={900}
              height={1200}
              className="h-full min-h-[17rem] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] sm:min-h-[22rem] lg:min-h-full"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
