import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "cyan" | "emerald" | "mono";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-slate-100 text-slate-700 border border-slate-200",
    cyan: "bg-sky-50 text-sky-700 border border-sky-200 font-semibold",
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold",
    mono: "bg-slate-100 text-slate-800 border border-slate-200 font-mono-code text-[11px]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium tracking-wide transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
