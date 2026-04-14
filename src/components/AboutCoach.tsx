import Image from "next/image";
import { content } from "@/data/content";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";

export function AboutCoach() {
  const { aboutCoach } = content;

  return (
    <SectionContainer id="about">
      <SectionHeading
        eyebrow={aboutCoach.heading.eyebrow}
        title={aboutCoach.heading.title}
        description={aboutCoach.heading.description}
      />

      <p className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-500/85 sm:mb-12 lg:mb-14">
        {aboutCoach.tagline}
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
        {aboutCoach.coaches.map((coach) => (
          <article
            key={coach.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-800/25 to-zinc-950/95 shadow-[0_24px_70px_-32px_rgba(0,0,0,0.7)] ring-1 ring-inset ring-white/[0.04]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/40 sm:aspect-[4/5]">
              <Image
                src={coach.image.src}
                alt={coach.image.alt}
                width={800}
                height={1000}
                className="h-full w-full object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {coach.name}
              </h3>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {coach.role}
              </p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-400">
                {coach.bio}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-3 lg:mt-16 lg:gap-4">
        {aboutCoach.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-white/[0.06] bg-zinc-900/40 p-5 shadow-inner shadow-white/[0.02] ring-1 ring-inset ring-white/[0.04]"
          >
            <p className="text-2xl font-semibold tracking-tight text-white">
              {metric.value}
            </p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
