import { ReactNode } from "react";
import { IconTile } from "./IconTile";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  glowColor?: "primary" | "violet" | "emerald";
}

export function FeatureCard({ icon, title, description, className = "", glowColor = "primary" }: FeatureCardProps) {
  return (
    <div className={`card-premium p-6 md:p-8 group relative overflow-hidden ${className}`}>
      {/* Subtle corner glow on hover */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl ${
        glowColor === "violet" ? "bg-violet-200" : 
        glowColor === "emerald" ? "bg-emerald-200" : 
        "bg-primary/20"
      }`} />
      
      <div className="relative">
        <IconTile className="mb-6" glowColor={glowColor}>{icon}</IconTile>
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
