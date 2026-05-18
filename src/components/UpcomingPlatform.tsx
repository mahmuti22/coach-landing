import { content } from "@/data/content";
import { SectionContainer } from "./SectionContainer";

export function UpcomingPlatform() {
  const { upcomingPlatform } = content;
  const { heading, apps, releaseNote } = upcomingPlatform;

  return (
    <SectionContainer id="platform">
      <div className="mb-8 flex flex-col gap-5 lg:mb-10">
        <p className="steel-eyebrow text-[11px] font-semibold uppercase tracking-[0.28em]">
          {heading.eyebrow}
        </p>
        <h2 className="steel-heading max-w-3xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
          {heading.title}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed">
          {heading.description}
        </p>
      </div>

      <div className="card-grid-3d grid gap-6 md:grid-cols-2 md:items-stretch md:gap-5 lg:gap-8">
        {apps.map((app) => (
          <article
            key={app.name}
            className="metal-border card-hover-3d relative flex h-full flex-col overflow-hidden rounded-2xl p-7 sm:p-8 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)]"
          >
            <div className="relative z-[1] flex flex-1 flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                {app.badge}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {app.name}
              </h3>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                {app.subtitle}
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
                {app.description}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-white/[0.06] pt-6">
                {app.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-[14px] leading-snug text-zinc-400"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500 sm:mt-12 lg:mt-14">
        {releaseNote}
      </p>
    </SectionContainer>
  );
}
