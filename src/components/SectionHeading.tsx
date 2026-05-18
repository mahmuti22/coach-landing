type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={`mb-8 flex flex-col gap-5 lg:mb-10 ${alignment}`}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="steel-heading max-w-3xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
