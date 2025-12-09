import { ReactNode } from "react";
import { IconTile } from "./IconTile";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <div className={`card-light p-6 md:p-8 ${className}`}>
      <IconTile className="mb-6">{icon}</IconTile>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
