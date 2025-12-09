import { ReactNode } from "react";

interface IconTileProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  glowColor?: "primary" | "violet" | "emerald";
}

export function IconTile({ children, size = "md", className = "", glowColor = "primary" }: IconTileProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const glowClasses = {
    primary: "bg-primary/10",
    violet: "bg-violet-500/10",
    emerald: "bg-emerald-500/10",
  };

  const iconColorClasses = {
    primary: "text-primary",
    violet: "text-violet-600",
    emerald: "text-emerald-600",
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Subtle glow effect behind */}
      <div 
        className={`absolute inset-0 rounded-2xl blur-xl scale-150 opacity-60 ${glowClasses[glowColor]}`}
      />
      
      {/* Border with shadow effect */}
      <div 
        className="absolute inset-0 rounded-2xl border border-border bg-card shadow-md"
      />
      
      {/* Icon */}
      <div className={`relative flex items-center justify-center w-full h-full ${iconColorClasses[glowColor]}`}>
        {children}
      </div>
    </div>
  );
}
