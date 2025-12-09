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
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Border with subtle shadow effect for light theme */}
      <div 
        className="absolute inset-0 rounded-2xl border border-border bg-card shadow-sm"
      />
      
      {/* Icon */}
      <div className="relative flex items-center justify-center w-full h-full text-primary">
        {children}
      </div>
    </div>
  );
}
