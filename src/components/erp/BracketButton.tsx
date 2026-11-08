import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

/**
 * Empat kurung siku tombol — salinan verbatim dari `Footer.tsx` dan
 * `ErpOverview.tsx` supaya bahasa bentuknya sama persis. viewBox 0 0 17 17.
 */
const CORNERS = [
  { className: "top-[-0.25rem] left-[-0.25rem]", d: "M1 16C1 8 8 1 16 1" },
  { className: "top-[-0.25rem] right-[-0.25rem]", d: "M16 16C16 8 9 1 1 1" },
  { className: "bottom-[-0.25rem] left-[-0.25rem]", d: "M1 1C1 9 8 16 16 16" },
  { className: "bottom-[-0.25rem] right-[-0.25rem]", d: "M16 1C16 9 9 16 1 16" },
];

type Tone = "navy" | "light" | "accent";

const TONE: Record<Tone, { base: string; corner: string; ring: string }> = {
  navy: {
    base: "bg-primary text-white hover:bg-navy-light",
    corner: "text-accent",
    ring: "focus-visible:ring-secondary/60 focus-visible:ring-offset-gray-50",
  },
  light: {
    base: "border border-gray-300 bg-white text-gray-900 hover:border-gray-400 hover:bg-gray-50",
    corner: "text-secondary",
    ring: "focus-visible:ring-secondary/50 focus-visible:ring-offset-gray-50",
  },
  accent: {
    base: "bg-accent text-primary hover:bg-[#22a8dd]",
    corner: "text-primary",
    ring: "focus-visible:ring-white/70 focus-visible:ring-offset-primary",
  },
};

/**
 * Tombol dengan kurung siku yang mekar saat hover.
 *
 * `accent` dipakai di atas latar navy: kurungnya digambar putih di sana karena
 * `text-primary` di atas navy tidak terlihat. Kurung siku sengaja dipasang di
 * dalam elemen absolut yang di-`scale` 110% saat hover — persis perilaku
 * tombol di Footer — sehingga tidak menggeser layout.
 */
export function BracketButton({
  href,
  children,
  tone = "navy",
  external = false,
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  external?: boolean;
}) {
  const theme = TONE[tone];

  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(.28,1.78,.16,.93)] group-hover:scale-110"
      >
        {CORNERS.map((corner) => (
          <span
            key={corner.d}
            className={`absolute flex h-4 w-4 items-center justify-center ${theme.corner} ${corner.className}`}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 17 17"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d={corner.d} stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </span>
        ))}
      </span>
    </>
  );

  const className = `group relative inline-flex shrink-0 items-center gap-3 rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:px-8 sm:py-4 sm:text-base ${theme.base} ${theme.ring}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
