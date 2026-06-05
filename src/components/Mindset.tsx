import { content } from "@/data/content";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";

export function Mindset() {
  const { mindset } = content;

  return (
    <SectionContainer id="mindset">
      <SectionHeading
        eyebrow={mindset.heading.eyebrow}
        title={mindset.heading.title}
      />

      <div className="flex max-w-3xl flex-col gap-5 xl:max-w-4xl 2xl:max-w-5xl">
        <p className="text-lg font-semibold text-zinc-200 sm:text-xl">
          {mindset.lead}
        </p>

        {mindset.body.map((paragraph) => (
          <p
            key={paragraph.text.slice(0, 24)}
            className={
              paragraph.emphasis
                ? "steel-heading-bright text-xl font-semibold tracking-tight sm:text-2xl"
                : "text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed"
            }
          >
            {paragraph.text}
          </p>
        ))}

        <p className="steel-heading-bright mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
          {mindset.closing}
        </p>
      </div>
    </SectionContainer>
  );
}
