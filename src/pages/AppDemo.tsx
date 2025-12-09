import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, Search, FileText, TrendingUp, PenTool, 
  Sparkles, BarChart3, CheckCircle, Clock, Target, Zap, 
  ClipboardPaste, Download, Copy, Edit3, ArrowRight, Link2
} from "lucide-react";

const tabs = [
  { id: "jobbskanning", label: "1. Klistra in URL", icon: Link2 },
  { id: "matchning", label: "2. Se matchning", icon: Target },
  { id: "cv", label: "3. Få ditt CV", icon: FileText },
  { id: "brev", label: "4. Personligt brev", icon: PenTool },
];

const jobbskanningContent = (
  <div className="flex h-full">
    {/* Sidebar */}
    <div className="w-14 bg-[#0c0d12] flex flex-col items-center py-5 gap-3 border-r border-white/[0.06]">
      <div className="w-9 h-9 rounded-lg bg-[#f97316] flex items-center justify-center mb-3">
        <Zap size={18} className="text-white" />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
        <Search size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
        <FileText size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
        <BarChart3 size={16} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Skanna jobbannons</h3>
          <p className="text-sm text-slate-500">Klistra in en URL för att börja</p>
        </div>
      </div>
      
      {/* URL Input */}
      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
        <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3 block">Jobbannons URL</label>
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-4 py-3">
            <ClipboardPaste size={18} className="text-[#f97316]" />
            <span className="text-sm text-slate-700">https://linkedin.com/jobs/projektledare-senior...</span>
          </div>
          <button className="px-5 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-medium rounded-lg transition-colors">
            Analysera
          </button>
        </div>
        <p className="text-xs text-slate-400 mt-3">Stöder LinkedIn, Indeed, Arbetsförmedlingen och de flesta jobbsidor</p>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
        <Sparkles size={16} className="text-[#f97316]" />
        <span>AI analyserar jobbannonsen och matchar mot din profil</span>
      </div>
    </div>
  </div>
);

const matchningContent = (
  <div className="flex h-full">
    {/* Sidebar */}
    <div className="w-14 bg-[#0c0d12] flex flex-col items-center py-5 gap-3 border-r border-white/[0.06]">
      <div className="w-9 h-9 rounded-lg bg-[#f97316] flex items-center justify-center mb-3">
        <Zap size={18} className="text-white" />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
        <Search size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
        <Target size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
        <FileText size={16} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Matchningsanalys</h3>
          <p className="text-sm text-slate-500">Senior Projektledare – TechCorp AB</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-emerald-600">78%</div>
          <div className="text-xs text-emerald-600 font-medium">Bra match</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-6">
        <div className="h-full w-[78%] bg-emerald-500 rounded-full" />
      </div>
      
      {/* Matches */}
      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
          <CheckCircle size={18} className="text-emerald-500 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-700">Projektledning – 5+ års erfarenhet</p>
            <p className="text-xs text-slate-500">Matchar dina 7 år som projektledare</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
          <CheckCircle size={18} className="text-emerald-500 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-700">Agila metoder (Scrum, Kanban)</p>
            <p className="text-xs text-slate-500">Du har arbetat med Scrum i 4 projekt</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
          <Target size={18} className="text-amber-500 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-700">Scrum-certifiering</p>
            <p className="text-xs text-slate-500">Efterfrågas men saknas – kan förbättra din matchning</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-medium rounded-lg transition-colors">
          Skapa CV för detta jobb
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </div>
);

const cvContent = (
  <div className="flex h-full">
    {/* Sidebar */}
    <div className="w-14 bg-[#0c0d12] flex flex-col items-center py-5 gap-3 border-r border-white/[0.06]">
      <div className="w-9 h-9 rounded-lg bg-[#f97316] flex items-center justify-center mb-3">
        <Zap size={18} className="text-white" />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
        <Search size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
        <FileText size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
        <PenTool size={16} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Ditt anpassade CV</h3>
          <p className="text-sm text-slate-500">Optimerat för: Senior Projektledare</p>
        </div>
        <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
          <Sparkles size={12} />
          AI-optimerat
        </span>
      </div>
      
      {/* CV Preview */}
      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-4">
        <div className="border-b border-slate-200 pb-4 mb-4">
          <h4 className="text-xl font-semibold text-slate-800">Anna Andersson</h4>
          <p className="text-slate-600">Senior Projektledare</p>
        </div>
        
        <div className="mb-4">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Framhävda kompetenser</p>
          <div className="flex flex-wrap gap-2">
            {["Projektledning", "Agil utveckling", "Stakeholder management", "Budgetansvar"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-white text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">AI-anpassad sammanfattning</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Erfaren projektledare med 7+ års erfarenhet av att leda komplexa IT-projekt. 
            Specialiserad på agila metoder och tvärfunktionella team med dokumenterad förmåga att leverera projekt inom budget och tidsramar...
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex items-center justify-center gap-2 flex-1 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-medium rounded-lg transition-colors">
          <Download size={16} />
          Ladda ner PDF
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
          <Edit3 size={16} />
          Redigera
        </button>
      </div>
    </div>
  </div>
);

const brevContent = (
  <div className="flex h-full">
    {/* Sidebar */}
    <div className="w-14 bg-[#0c0d12] flex flex-col items-center py-5 gap-3 border-r border-white/[0.06]">
      <div className="w-9 h-9 rounded-lg bg-[#f97316] flex items-center justify-center mb-3">
        <Zap size={18} className="text-white" />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
        <Search size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
        <FileText size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
        <PenTool size={16} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Personligt brev</h3>
          <p className="text-sm text-slate-500">Anpassat för: Senior Projektledare – TechCorp AB</p>
        </div>
        <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
          <Sparkles size={12} />
          AI-genererat
        </span>
      </div>
      
      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-4">
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong className="text-slate-800">Hej!</strong>
          <br /><br />
          Jag söker tjänsten som Senior Projektledare hos TechCorp AB med stor entusiasm. 
          Med min bakgrund inom agil utveckling och över sju års erfarenhet av att leda tvärfunktionella team känner jag mig väl rustad för rollen.
          <br /><br />
          Under min tid på Acme AB har jag framgångsrikt lett projekt värda över 15 MSEK och utvecklat processer som ökade leveransprecisionen med 23%. 
          Jag brinner för att skapa effektiva team och ser fram emot att bidra till TechCorps fortsatta framgång.
          <br /><br />
          <span className="text-slate-500">Med vänliga hälsningar,</span>
          <br />
          <span className="text-slate-800 font-medium">Anna Andersson</span>
        </p>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center justify-center gap-2 flex-1 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-medium rounded-lg transition-colors">
          <Copy size={16} />
          Kopiera text
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
          <Edit3 size={16} />
          Redigera
        </button>
      </div>
    </div>
  </div>
);

const tabContent: Record<string, JSX.Element> = {
  jobbskanning: jobbskanningContent,
  matchning: matchningContent,
  cv: cvContent,
  brev: brevContent,
};

const AppDemo = () => {
  const [activeTab, setActiveTab] = useState("jobbskanning");

  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading-xl mb-6">
              <span className="text-white">Klistra in en URL.</span>{" "}
              <span className="text-slate-500">Få komplett ansökan.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Se hur RebelCV analyserar en jobbannons, räknar ut din matchning och genererar ett skräddarsytt CV och personligt brev – helt automatiskt.
            </p>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="pb-24">
        <div className="container-main">
          <div className="card-dark p-3 md:p-4">
            {/* Step Tabs */}
            <div className="flex gap-1 mb-4 overflow-x-auto pb-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-white/10 text-white"
                      : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <tab.icon size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* App Frame */}
            <div className="rounded-xl overflow-hidden border border-white/[0.06] min-h-[420px] bg-[#0c0d12]">
              {tabContent[activeTab]}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">Redo att testa själv?</p>
            <Link to="/logga-in" className="btn-primary">
              Kom igång gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDemo;