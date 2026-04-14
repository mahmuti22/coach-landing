import { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function SectionContainer({
  children,
  id,
  className = "",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
