import { content } from "@/data/content";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";

export function WhyItWorks() {
  const { whyItWorks } = content;

  return (
    <SectionContainer id="why">
      <SectionHeading
        eyebrow={whyItWorks.heading.eyebrow}
        title={whyItWorks.heading.title}
      />

      <div className="flex max-w-3xl flex-col gap-5">
        {whyItWorks.body.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SectionContainer>
  );
}
