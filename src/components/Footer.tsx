import Image from "next/image";
import { content } from "@/data/content";

export function Footer() {
  const { brand, footer } = content;

  return (
    <footer className="border-t border-white/[0.07] bg-black/20 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex max-w-xl items-center gap-3 sm:gap-4">
          <Image
            src="/logo.jpg"
            alt={brand.logoAlt}
            width={160}
            height={32}
            className="h-7 w-auto shrink-0 opacity-90 sm:h-8"
          />
          <p className="min-w-0 leading-snug text-zinc-300">{footer.primaryLine}</p>
        </div>
        <p className="shrink-0 sm:text-right">{footer.secondaryLine}</p>
      </div>
    </footer>
  );
}
