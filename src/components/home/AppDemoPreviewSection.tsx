import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export function AppDemoPreviewSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="glow-blur glow-blur-violet w-80 h-80 top-0 left-1/4 opacity-30" />
        <div className="glow-blur glow-blur-emerald w-64 h-64 bottom-0 right-1/4 opacity-30" />
      </div>

      <div className="container-main">
        <div className="card-premium p-8 md:p-12 text-center relative overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-primary/5 to-transparent" />
          </div>
          
          <span className="label-text mb-4 block">Demo</span>
          <h2 className="heading-md mb-4">Se RebelCV in action</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Utforska hur gränssnittet fungerar och se hur enkelt det är att skapa CV, skanna jobb och få personliga rekommendationer.
          </p>
          
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-muted to-muted/50 border border-border shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-violet-500/5 to-emerald-500/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl shadow-primary/30">
                <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          <Link to="/app-demo" className="btn-primary">
            Öppna demo
          </Link>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
