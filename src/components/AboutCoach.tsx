import Image from "next/image";
import { content } from "@/data/content";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";

export function AboutCoach() {
  const { aboutCoach } = content;

  return (
    <SectionContainer id="about">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30 shadow-[0_28px_90px_-32px_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/[0.05]">
          <Image
            src={aboutCoach.image.src}
            alt={aboutCoach.image.alt}
            width={900}
            height={1200}
            className="h-full min-h-[20rem] w-full object-cover sm:min-h-[24rem]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-zinc-950/80 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col gap-2">
          <SectionHeading
            eyebrow={aboutCoach.heading.eyebrow}
            title={aboutCoach.heading.title}
            description={aboutCoach.heading.description}
          />
          <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-[17px] sm:leading-relaxed">
            {aboutCoach.body}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-3 lg:gap-4">
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
        </div>
      </div>
    </SectionContainer>
  );
}
