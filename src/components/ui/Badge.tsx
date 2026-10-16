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
    default: "bg-slate-800/80 text-slate-300 border border-slate-700/60",
    cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    mono: "bg-slate-900 text-slate-300 border border-slate-700 font-mono-code text-[11px]",
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
