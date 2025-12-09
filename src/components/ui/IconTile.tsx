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
      {/* Border that fades from top to bottom - more prominent */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 40%, transparent 100%)',
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      
      {/* Background - also fades */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
        }}
      />
      
      {/* Icon */}
      <div className="relative flex items-center justify-center w-full h-full text-slate-400">
        {children}
      </div>
    </div>
  );
}