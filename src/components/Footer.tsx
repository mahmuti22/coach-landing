import Image from "next/image";
import { content } from "@/data/content";

export function Footer() {
  const { brand, footer } = content;

  return (
    <footer className="border-t border-white/[0.07] bg-black/20 px-5 py-10 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between xl:max-w-7xl 2xl:max-w-[92rem]">
        <div className="flex max-w-xl items-center gap-3 sm:gap-4">
          <Image
            src="/logo.png"
            alt={brand.logoAlt}
            width={280}
            height={194}
            className="h-14 w-auto shrink-0 opacity-90 sm:h-16"
          />
          <p className="min-w-0 leading-snug text-zinc-300">{footer.primaryLine}</p>
        </div>
        <p className="shrink-0 sm:text-right">{footer.secondaryLine}</p>
      </div>
      <div className="mx-auto mt-8 w-full max-w-6xl border-t border-white/[0.05] pt-6 text-center xl:max-w-7xl 2xl:max-w-[92rem]">
        <a
          href={footer.credit.href}
          className="text-[11px] text-zinc-600 transition hover:text-zinc-400"
        >
          {footer.credit.label}
        </a>
      </div>
    </footer>
  );
}
