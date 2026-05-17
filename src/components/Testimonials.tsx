import { content } from "@/data/content";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";

function StarRow() {
  return (
    <p
      className="text-[11px] tracking-[0.35em] text-zinc-400"
      aria-label="5 star rating"
    >
      ★★★★★
    </p>
  );
}

export function Testimonials() {
  const { testimonials } = content;

  return (
    <SectionContainer id="testimonials">
      <SectionHeading
        eyebrow={testimonials.heading.eyebrow}
        title={testimonials.heading.title}
        description={testimonials.heading.description}
      />
      <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
        {testimonials.items.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="metal-border relative flex h-full flex-col overflow-hidden rounded-2xl p-7 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.7)] sm:p-8"
          >
            <div
              className="pointer-events-none absolute right-0 top-0 z-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-zinc-400/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-[1] flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zinc-400/25 bg-zinc-900/80 text-sm font-semibold tracking-tight text-zinc-100 shadow-inner shadow-white/[0.04]"
                aria-hidden="true"
              >
                {testimonial.initials}
              </div>
              <div className="min-w-0 flex-1 space-y-2">
                <StarRow />
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                  {testimonial.outcome}
                </p>
              </div>
            </div>
            <blockquote className="relative z-[1] mt-6 flex-1 border-l-2 border-zinc-400/25 pl-5 text-[15px] leading-relaxed text-zinc-200">
              {testimonial.quote}
            </blockquote>
            <figcaption className="relative z-[1] mt-8 border-t border-white/[0.08] pt-6">
              <p className="font-semibold tracking-tight text-white">
                {testimonial.name}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{testimonial.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionContainer>
  );
}
