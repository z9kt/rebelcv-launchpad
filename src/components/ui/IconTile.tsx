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
      {/* Glow effect */}
      <div className="absolute inset-0 blur-2xl opacity-40 scale-150">
        <div className="w-full h-full rounded-2xl bg-gradient-radial from-primary-mid/50 to-transparent" />
      </div>
      
      {/* Icon container */}
      <div
        className={`${sizeClasses[size]} relative flex items-center justify-center rounded-2xl`}
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0))',
        }}
      >
        <div className="text-slate-200">{children}</div>
      </div>
    </div>
  );
}
