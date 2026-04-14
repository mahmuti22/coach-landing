import Image from "next/image";
import { content } from "@/data/content";

const links = [
  { href: "#hero", label: "Hero" },
  { href: "#programs", label: "Programs" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Apply" },
] as const;

export function SiteNav() {
  const { brand, footer } = content;

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-zinc-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/55">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <a
          href="#hero"
          className="relative flex shrink-0 items-center py-0.5 transition-opacity hover:opacity-90"
          title={`${brand.full} · ${footer.secondaryLine}`}
        >
          <Image
            src="/logo.jpg"
            alt={brand.logoAlt}
            width={240}
            height={48}
            className="h-9 w-auto max-w-[min(220px,58vw)] sm:h-10 lg:h-11"
            priority
          />
        </a>
        <ul className="flex min-w-0 flex-1 items-center justify-end gap-4 overflow-x-auto py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-7 lg:gap-9 [&::-webkit-scrollbar]:hidden">
          {links.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 transition hover:text-zinc-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
