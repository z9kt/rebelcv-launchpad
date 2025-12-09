import { ReactNode } from "react";

interface IconTileProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function IconTile({ children, size = "md", className = "" }: IconTileProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  return (
    <div className={`relative ${className}`}>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 blur-2xl opacity-20 scale-150">
        <div className="w-full h-full rounded-2xl bg-[#f97316]" />
      </div>
      
      {/* Icon container */}
      <div
        className={`${sizeClasses[size]} relative flex items-center justify-center rounded-2xl`}
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
        }}
      >
        <div className="text-slate-300">{children}</div>
      </div>
    </div>
  );
}