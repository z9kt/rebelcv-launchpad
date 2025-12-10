import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export function AppDemoPreviewSection() {
  return (
    <section className="section-block block-gradient-dark py-16 md:py-24 text-center overflow-hidden">
      <div className="container-main">
        <span className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4 block">Demo</span>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Se RebelCV i action</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Utforska hur gränssnittet fungerar och se hur enkelt det är att skapa CV, skanna jobb och få personliga rekommendationer.
        </p>
        
        <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden mb-8 bg-white/5 border border-white/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
              <Play size={32} className="text-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        </div>

        <Link to="/app-demo" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-foreground rounded-full bg-white hover:bg-white/90 transition-colors">
          Öppna demo
        </Link>
      </div>
    </section>
  );
}
