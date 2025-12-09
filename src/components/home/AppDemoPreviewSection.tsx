import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export function AppDemoPreviewSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="card-dark p-8 md:p-12 text-center">
          <span className="label-text mb-4 block">Demo</span>
          <h2 className="heading-md mb-4">Se RebelCV in action</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Utforska hur gränssnittet fungerar och se hur enkelt det är att skapa CV, skanna jobb och få personliga rekommendationer.
          </p>
          
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-end/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform glow-primary">
                <Play size={32} className="text-white ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute inset-0 bg-[#050816]/50 backdrop-blur-sm" />
          </div>

          <Link to="/app-demo" className="btn-primary">
            Öppna demo
          </Link>
        </div>
      </div>
    </section>
  );
}
