import { ReactNode } from "react";
import { IconTile } from "./IconTile";

interface StepCardProps {
  icon: ReactNode;
  step: number;
  title: string;
  description: string;
  glowColor?: "primary" | "violet" | "emerald";
}

export function StepCard({ icon, step, title, description, glowColor = "primary" }: StepCardProps) {
  return (
    <div className="card-premium p-6 md:p-8 relative group overflow-hidden">
      {/* Subtle background glow on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        glowColor === "violet" ? "bg-gradient-to-br from-violet-50 to-transparent" : 
        glowColor === "emerald" ? "bg-gradient-to-br from-emerald-50 to-transparent" : 
        "bg-gradient-to-br from-primary/5 to-transparent"
      }`} />
      
      <div className="relative flex flex-col items-center text-center">
        {/* Step number badge */}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg z-10">
          {step}
        </div>
        
        <IconTile size="lg" className="mb-6" glowColor={glowColor}>{icon}</IconTile>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-xs">{description}</p>
      </div>
    </div>
  );
}
