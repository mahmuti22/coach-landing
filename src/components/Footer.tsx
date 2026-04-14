import { content } from "@/data/content";

export function Footer() {
  const { footer } = content;

  return (
    <footer className="border-t border-white/[0.07] bg-black/20 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-zinc-300">{footer.brand}</p>
        <p>{footer.note}</p>
      </div>
    </footer>
  );
}
