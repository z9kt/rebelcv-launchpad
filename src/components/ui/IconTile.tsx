import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
    primary: "from-primary/30 to-primary/10",
    violet: "from-violet-500/30 to-violet-500/10",
    emerald: "from-emerald-500/30 to-emerald-500/10",
  };

  const iconColorClasses = {
    primary: "text-primary",
    violet: "text-violet-600",
    emerald: "text-emerald-600",
  };

  return (
    <div className={cn("relative inline-flex", sizeClasses[size], className)}>
      {/* Glow effect behind - enhanced */}
      <div 
        className={cn(
          "absolute inset-0 rounded-2xl blur-xl scale-150 opacity-70 bg-gradient-to-br",
          glowClasses[glowColor]
        )}
      />
      
      {/* Icon container with gradient background */}
      <div 
        className="absolute inset-0 rounded-2xl border border-border bg-gradient-to-b from-background to-muted shadow-lg"
      />
      
      {/* Icon */}
      <div className={cn(
        "relative flex items-center justify-center w-full h-full",
        iconColorClasses[glowColor]
      )}>
        {children}
      </div>
    </div>
  );
}
