import type { ComponentProps } from "react";

export const PRIMARY_BUTTON_CLASS =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-amber-200 via-amber-400 to-amber-800 px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-zinc-950 shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_18px_44px_-8px_rgba(217,119,6,0.55),0_8px_20px_-6px_rgba(0,0,0,0.55)] transition duration-200 hover:brightness-[1.06] active:scale-[0.98] active:brightness-100 disabled:pointer-events-none disabled:opacity-50";

type PrimaryButtonProps = {
  href: string;
  label: string;
};

export function PrimaryButton({ href, label }: PrimaryButtonProps) {
  return (
    <a href={href} className={PRIMARY_BUTTON_CLASS}>
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 42%)",
        }}
      />
      <span className="relative">{label}</span>
    </a>
  );
}

type PrimarySubmitButtonProps = Omit<
  ComponentProps<"button">,
  "className" | "type" | "children"
> & {
  label: string;
};

export function PrimarySubmitButton({
  label,
  disabled,
  ...props
}: PrimarySubmitButtonProps) {
  return (
    <button
      type="submit"
      className={PRIMARY_BUTTON_CLASS}
      disabled={disabled}
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100 group-disabled:opacity-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 42%)",
        }}
      />
      <span className="relative">{label}</span>
    </button>
  );
}
