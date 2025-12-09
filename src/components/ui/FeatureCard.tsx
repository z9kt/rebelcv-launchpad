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
    <div className={`card-dark p-6 md:p-8 ${className}`}>
      <IconTile className="mb-6">{icon}</IconTile>
      <h3 className="text-xl font-semibold text-slate-50 mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
