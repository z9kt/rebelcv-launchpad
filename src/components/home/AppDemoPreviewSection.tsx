import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export function AppDemoPreviewSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="card-light p-8 md:p-12 text-center">
          <span className="label-text mb-4 block">Demo</span>
          <h2 className="heading-md mb-4">Se RebelCV in action</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Utforska hur gränssnittet fungerar och se hur enkelt det är att skapa CV, skanna jobb och få personliga rekommendationer.
          </p>
          
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden mb-8 bg-muted border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          <Link to="/app-demo" className="btn-primary">
            Öppna demo
          </Link>
        </div>
      </div>
    </section>
  );
}
