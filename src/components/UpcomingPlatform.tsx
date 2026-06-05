import { content } from "@/data/content";
import { SectionContainer } from "./SectionContainer";

export function UpcomingPlatform() {
  const { whatYouGet } = content;
  const { heading, cards } = whatYouGet;

  return (
    <SectionContainer id="coaching">
      <div className="mb-8 flex flex-col gap-5 lg:mb-10">
        <p className="steel-eyebrow text-[11px] font-semibold uppercase tracking-[0.28em]">
          {heading.eyebrow}
        </p>
        <h2 className="steel-heading max-w-3xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12] xl:max-w-4xl 2xl:max-w-5xl">
          {heading.title}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed xl:max-w-3xl 2xl:max-w-4xl">
          {heading.description}
        </p>
      </div>

      <div className="card-grid-3d grid gap-6 md:grid-cols-2 md:items-stretch md:gap-5 lg:gap-8">
        {cards.map((card) => (
          <article
            key={card.name}
            className="metal-border card-hover-3d relative flex h-full flex-col overflow-hidden rounded-2xl p-7 sm:p-8 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)]"
          >
            <div className="relative z-[1] flex flex-1 flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                {card.badge}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {card.name}
              </h3>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                {card.subtitle}
              </p>
              {card.description ? (
                <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
                  {card.description}
                </p>
              ) : null}
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-white/[0.06] pt-6">
                {card.features.map((feature) => (
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
    </SectionContainer>
  );
}
