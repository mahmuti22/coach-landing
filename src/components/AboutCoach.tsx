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
      />

      <div className="mb-10 flex max-w-3xl flex-col gap-5 sm:mb-12 lg:mb-14">
        {aboutCoach.intro.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="card-grid-3d grid gap-8 md:grid-cols-2 lg:gap-10">
        {aboutCoach.coaches.map((coach) => (
          <article
            key={coach.name}
            className="metal-border card-hover-3d relative flex flex-col overflow-hidden rounded-2xl shadow-[0_24px_70px_-32px_rgba(0,0,0,0.7)]"
          >
            <div className="relative z-[1] aspect-[4/5] w-full overflow-hidden bg-black/40 sm:aspect-[4/5]">
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
            <div className="relative z-[1] flex flex-1 flex-col p-6 sm:p-7">
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
    </SectionContainer>
  );
}
