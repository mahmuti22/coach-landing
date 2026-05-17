import { content } from "@/data/content";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const { faq } = content;

  return (
    <SectionContainer id="faq">
      <SectionHeading eyebrow={faq.heading.eyebrow} title={faq.heading.title} />
      <div className="space-y-3 sm:space-y-4">
        {faq.items.map((item) => (
          <details
            key={item.question}
            className="metal-border group relative overflow-hidden rounded-2xl transition"
          >
            <summary className="relative z-[1] cursor-pointer list-none px-6 py-5 text-base font-semibold leading-snug text-white sm:px-7 sm:py-5">
              <span className="flex items-start justify-between gap-4">
                <span className="pt-0.5">{item.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="relative z-[1] border-t border-white/[0.06] px-6 pb-6 pt-4 text-[15px] leading-relaxed text-zinc-400 sm:px-7">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </SectionContainer>
  );
}
