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
    <div className={`card-premium p-6 md:p-8 ${className}`}>
      <IconTile className="mb-6" glowColor={glowColor}>{icon}</IconTile>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
