import { Link } from "react-router-dom";
import { Check, Sparkles, FileText, Share2 } from "lucide-react";

const features = [
  { icon: Sparkles, text: "AI-optimerat CV och personligt brev" },
  { icon: FileText, text: "Jobbmatchning och karriäranalys" },
  { icon: Share2, text: "Export till PDF, Word och delbar länk" },
];

export function HeroSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="label-text">AI-drivet levande CV</span>
              <h1 className="heading-xl">
                Ditt CV som vågar <span className="gradient-text">sticka ut</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-lg">
                RebelCV analyserar din profil och varje jobbannons för att bygga ett levande CV som anpassar sig automatiskt.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/logga-in" className="btn-primary">
                Kom igång gratis
              </Link>
              <a href="#hur-det-funkar" className="btn-secondary">
                Se hur det funkar
              </a>
            </div>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-400">
                  <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - App Mockup */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-30 gradient-primary rounded-full" />
            <div className="relative app-frame p-4 md:p-6">
              <div className="bg-slate-100 rounded-xl p-6">
                <h3 className="text-slate-800 font-semibold mb-4">Vad vill du göra idag?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Skapa CV", "Skanna jobb", "Personligt brev", "Se statistik"].map((item) => (
                    <div
                      key={item}
                      className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:border-primary/50 transition-colors"
                    >
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary-mid/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Sparkles size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">AI-tips</p>
                      <p className="text-xs text-slate-500">3 nya jobbmatchningar hittade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
