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
              className={`metal-border group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition duration-300 sm:p-8 ${
                featured
                  ? "metal-border-featured md:-translate-y-1 md:scale-[1.02] shadow-[0_36px_100px_-28px_rgba(161,161,170,0.2)]"
                  : "shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)]"
              }`}
            >
              <div className="relative z-[1] flex flex-1 flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
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
                  className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-zinc-200 transition group-hover:gap-3 group-hover:text-zinc-100"
                >
                  {programs.cardCta.label}
                  <span aria-hidden="true" className="text-zinc-400">
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
