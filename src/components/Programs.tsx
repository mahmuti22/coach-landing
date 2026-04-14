import { content } from "@/data/content";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";

export function Programs() {
  const { programs } = content;

  return (
    <SectionContainer id="programs">
      <SectionHeading
        eyebrow={programs.heading.eyebrow}
        title={programs.heading.title}
        description={programs.heading.description}
      />
      <div className="grid gap-6 md:grid-cols-3 md:items-stretch md:gap-5 lg:gap-8">
        {programs.items.map((program) => {
          const featured = program.highlight === "Most popular";
          return (
            <article
              key={program.name}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b p-7 transition duration-300 sm:p-8 ${
                featured
                  ? "border-amber-500/35 from-zinc-800/50 via-zinc-950/90 to-black shadow-[0_28px_80px_-24px_rgba(245,158,11,0.18),0_0_0_1px_rgba(245,158,11,0.12)_inset] md:-translate-y-1 md:scale-[1.02] md:shadow-[0_36px_100px_-28px_rgba(245,158,11,0.22)]"
                  : "border-white/[0.08] from-zinc-800/30 to-zinc-950/95 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] hover:border-amber-500/20 hover:shadow-[0_28px_70px_-26px_rgba(0,0,0,0.75)]"
              }`}
            >
              {featured ? (
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
                  aria-hidden="true"
                />
              ) : (
                <div
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex flex-1 flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-500/85">
                  {program.highlight}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  {program.name}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {program.length}
                </p>
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-zinc-400">
                  {program.description}
                </p>
                <a
                  href={programs.cardCta.href}
                  className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-amber-200/95 transition group-hover:gap-3 group-hover:text-amber-100"
                >
                  {programs.cardCta.label}
                  <span aria-hidden="true" className="text-amber-400/90">
                    →
                  </span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </SectionContainer>
  );
}
