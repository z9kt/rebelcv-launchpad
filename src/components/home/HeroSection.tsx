import { Link } from "react-router-dom";
import { Check, Sparkles, FileText, Share2, Search, ClipboardPaste, Zap, ArrowRight } from "lucide-react";

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
                Klistra in en jobbannons-URL. Få matchningsanalys, skräddarsytt CV och personligt brev – allt på sekunder.
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

          {/* Right - App Mockup - Focused on core value prop */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-20 gradient-primary rounded-full scale-110" />
            <div className="relative app-frame p-1">
              {/* App header bar */}
              <div className="bg-slate-900/90 px-4 py-3 flex items-center gap-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-slate-500 ml-2">rebelcv.app</span>
              </div>
              
              {/* App content - Sidebar + Main */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-14 bg-slate-900/80 py-4 flex flex-col items-center gap-4 border-r border-white/5">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Search size={14} className="text-slate-400" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <FileText size={14} className="text-slate-400" />
                  </div>
                </div>
                
                {/* Main content - Light */}
                <div className="flex-1 bg-slate-50 p-5">
                  {/* Paste URL Section */}
                  <div className="mb-5">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Steg 1</p>
                    <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2.5 shadow-sm">
                      <ClipboardPaste size={16} className="text-orange-500" />
                      <span className="text-sm text-slate-400 flex-1">https://arbetsformedlingen.se/jobb/123...</span>
                      <button className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-medium rounded-md">
                        Analysera
                      </button>
                    </div>
                  </div>

                  {/* Results Preview */}
                  <div className="space-y-3">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Resultat</p>
                    
                    {/* Match Score */}
                    <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">Matchning</span>
                        <span className="text-lg font-bold text-green-600">84%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-[84%] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
                      </div>
                    </div>

                    {/* Generated items */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm group hover:border-orange-300 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                          <FileText size={14} className="text-orange-500" />
                          <span className="text-xs font-medium text-slate-700">CV</span>
                        </div>
                        <p className="text-xs text-slate-500">Anpassat för tjänsten</p>
                        <div className="flex items-center gap-1 mt-2 text-orange-500">
                          <span className="text-xs font-medium">Öppna</span>
                          <ArrowRight size={10} />
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm group hover:border-orange-300 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                          <Sparkles size={14} className="text-orange-500" />
                          <span className="text-xs font-medium text-slate-700">Brev</span>
                        </div>
                        <p className="text-xs text-slate-500">Personligt anpassat</p>
                        <div className="flex items-center gap-1 mt-2 text-orange-500">
                          <span className="text-xs font-medium">Öppna</span>
                          <ArrowRight size={10} />
                        </div>
                      </div>
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
