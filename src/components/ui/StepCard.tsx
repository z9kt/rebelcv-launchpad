import { ReactNode } from "react";
import { IconTile } from "./IconTile";

interface StepCardProps {
  icon: ReactNode;
  step: number;
  title: string;
  description: string;
}

export function StepCard({ icon, step, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step number */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <span className="text-xs font-bold text-primary-foreground">{step}</span>
      </div>
      
      <IconTile size="lg" className="mb-6">{icon}</IconTile>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-xs">{description}</p>
    </div>
  );
}
