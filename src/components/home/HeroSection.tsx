import { Link } from "react-router-dom";
import { Check, Sparkles, FileText, Search, Zap, Lightbulb, CheckCircle, Target, TrendingUp, ArrowRight } from "lucide-react";

const features = [
  { text: "AI-optimerat CV och personligt brev" },
  { text: "Smarta förslag som anpassar dina titlar till jobbet" },
  { text: "Jobbmatchning och karriäranalys" },
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
                Ditt CV som vågar{" "}
                <span className="text-accent">sticka ut</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-lg">
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
                  <div className="w-5 h-5 rounded-full bg-[#f97316] flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Premium App Mockup */}
          <div className="relative">
            {/* Main container with bento grid layout */}
            <div className="grid grid-cols-2 gap-3">
              
              {/* Top Left - Job Match Score */}
              <div className="bg-[#0d0f14] rounded-2xl p-5 border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Target size={16} className="text-emerald-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Matchning</span>
                </div>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-4xl font-bold text-white">84</span>
                  <span className="text-xl font-bold text-emerald-400 mb-1">%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-3">
                  <div className="h-full w-[84%] bg-emerald-500 rounded-full" />
                </div>
                <p className="text-xs text-slate-500">Senior Projektledare – TechCorp AB</p>
              </div>

              {/* Top Right - AI Suggestions */}
              <div className="bg-[#0d0f14] rounded-2xl p-5 border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Lightbulb size={16} className="text-amber-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">AI-tips</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 line-through">Kundtjänst</span>
                    <ArrowRight size={10} className="text-amber-400" />
                    <span className="text-xs text-white font-medium">Kundframgångsspecialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 line-through">Hjälpte kollegor</span>
                    <ArrowRight size={10} className="text-amber-400" />
                    <span className="text-xs text-white font-medium">Coachade nya medarbetare</span>
                  </div>
                  <div className="text-xs text-amber-400 flex items-center gap-1 mt-2">
                    <Sparkles size={10} />
                    <span>+4 förslag till</span>
                  </div>
                </div>
              </div>

              {/* Bottom Left - Analysis */}
              <div className="bg-[#0d0f14] rounded-2xl p-5 border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <TrendingUp size={16} className="text-blue-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Analys</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={12} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-300">Ledarerfarenhet matchar</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={12} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-300">Agila metoder ✓</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target size={12} className="text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-400">Scrum-cert. saknas</span>
                  </div>
                </div>
              </div>

              {/* Bottom Right - Generated Letter Preview */}
              <div className="bg-[#0d0f14] rounded-2xl p-5 border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <FileText size={16} className="text-purple-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Personligt brev</span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    "Med 7 års erfarenhet av att leda agila team och leverera projekt värda 15+ MSEK, ser jag fram emot att..."
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-xs text-purple-400 flex items-center gap-1">
                      <Sparkles size={10} />
                      AI-genererat
                    </span>
                  </div>
                </div>
              </div>

              {/* Full width bottom - CV Preview */}
              <div className="col-span-2 bg-[#0d0f14] rounded-2xl p-5 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f97316] flex items-center justify-center">
                      <Zap size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Ditt anpassade CV är klart</p>
                      <p className="text-xs text-slate-500">Optimerat för: Senior Projektledare</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-[#f97316] text-white text-xs font-medium rounded-lg flex items-center gap-2">
                    Ladda ner
                    <ArrowRight size={12} />
                  </button>
                </div>
                <div className="flex gap-2">
                  {["Projektledning", "Agil utveckling", "Stakeholder mgmt", "Budgetansvar"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-white/5 text-slate-400 text-xs rounded-full border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}