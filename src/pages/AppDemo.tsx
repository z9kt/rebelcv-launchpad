import { useState } from "react";
import { LayoutDashboard, Search, FileText, TrendingUp, PenTool, Sparkles, BarChart3, CheckCircle, Clock, Target, Zap, ClipboardPaste, Download, Copy, Edit3 } from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "jobbskanning", label: "Skanna jobbannons", icon: Search },
  { id: "cv", label: "Jobbanpassat CV", icon: FileText },
  { id: "optimal", label: "Optimal för dig", icon: TrendingUp },
  { id: "brev", label: "Personligt brev", icon: PenTool },
];

const dashboardContent = (
  <div className="flex h-full">
    {/* Sidebar */}
    <div className="w-16 bg-slate-900 flex flex-col items-center py-6 gap-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
        <Zap size={20} className="text-white" />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors cursor-pointer">
        <Search size={18} />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors cursor-pointer">
        <FileText size={18} />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors cursor-pointer">
        <BarChart3 size={18} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-slate-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-800">Välkommen tillbaka!</h3>
          <p className="text-sm text-slate-500">Vad vill du göra idag?</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Clock size={14} />
          <span>Dec 2025</span>
        </div>
      </div>
      
      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all cursor-pointer group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-3">
            <Search size={22} className="text-white" />
          </div>
          <h4 className="font-semibold text-slate-800 mb-1">Skanna jobbannons</h4>
          <p className="text-sm text-slate-500">Klistra in URL och få matchning</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all cursor-pointer group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-3">
            <FileText size={22} className="text-white" />
          </div>
          <h4 className="font-semibold text-slate-800 mb-1">Skapa CV</h4>
          <p className="text-sm text-slate-500">Generera anpassat CV</p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-xl p-4 border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <TrendingUp size={18} className="text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-800">3 nya matchningar</p>
            <p className="text-xs text-slate-500">Baserat på din profil</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const jobbskanningContent = (
  <div className="flex h-full">
    {/* Sidebar */}
    <div className="w-16 bg-slate-900 flex flex-col items-center py-6 gap-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
        <Zap size={20} className="text-white" />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
        <Search size={18} />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60">
        <FileText size={18} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-slate-50 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Skanna jobbannons</h3>
      
      {/* URL Input */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 mb-4">
        <label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Jobbannons URL</label>
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5">
            <ClipboardPaste size={16} className="text-orange-500" />
            <span className="text-sm text-slate-600 truncate">https://linkedin.com/jobs/projektledare-senior...</span>
          </div>
          <button className="px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-shadow">
            Analysera
          </button>
        </div>
      </div>

      {/* Match Result */}
      <div className="bg-white rounded-xl p-4 border border-green-200 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-slate-700">Din matchning</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">78%</span>
            <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Bra match</span>
          </div>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
          <div className="h-full w-[78%] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle size={14} className="text-green-500" />
            <span className="text-slate-600">Projektledning - 5+ år erfarenhet</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle size={14} className="text-green-500" />
            <span className="text-slate-600">Agila metoder (Scrum, Kanban)</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Target size={14} className="text-amber-500" />
            <span className="text-slate-600">Scrum-certifiering (saknas, rekommenderas)</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex-1 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium rounded-lg">
          Skapa CV för detta jobb
        </button>
        <button className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg">
          Skriv personligt brev
        </button>
      </div>
    </div>
  </div>
);

const cvContent = (
  <div className="flex h-full">
    {/* Sidebar */}
    <div className="w-16 bg-slate-900 flex flex-col items-center py-6 gap-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
        <Zap size={20} className="text-white" />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60">
        <Search size={18} />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
        <FileText size={18} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-slate-50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Jobbanpassat CV</h3>
        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Anpassat för: Projektledare</span>
      </div>
      
      {/* CV Preview */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 mb-4 space-y-4">
        <div className="border-b border-slate-100 pb-4">
          <h4 className="text-lg font-semibold text-slate-800">Anna Andersson</h4>
          <p className="text-slate-600">Senior Projektledare</p>
        </div>
        
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Framhävda kompetenser</p>
          <div className="flex flex-wrap gap-2">
            {["Projektledning", "Agil utveckling", "Stakeholder management", "Budgetansvar"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-full border border-orange-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">AI-optimerad sammanfattning</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Erfaren projektledare med 7+ års erfarenhet av att leda komplexa IT-projekt. 
            Specialiserad på agila metoder och tvärfunktionella team...
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex items-center justify-center gap-2 flex-1 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium rounded-lg">
          <Download size={16} />
          Exportera PDF
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg">
          <Edit3 size={16} />
          Redigera
        </button>
      </div>
    </div>
  </div>
);

const optimalContent = (
  <div className="flex h-full">
    {/* Sidebar */}
    <div className="w-16 bg-slate-900 flex flex-col items-center py-6 gap-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
        <Zap size={20} className="text-white" />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60">
        <Search size={18} />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60">
        <FileText size={18} />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
        <TrendingUp size={18} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-slate-50 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Optimal för dig</h3>
      <p className="text-sm text-slate-500 mb-4">AI-analys av din profil och karriärmöjligheter</p>
      
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle size={16} className="text-green-600" />
            </div>
            <p className="text-sm font-semibold text-slate-800">Dina styrkor</p>
          </div>
          <div className="space-y-2 pl-10">
            {["Bred erfarenhet av projektledning", "Stark kommunikationsförmåga", "Resultatfokuserad", "Erfarenhet av budgetansvar"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <Target size={16} className="text-amber-600" />
            </div>
            <p className="text-sm font-semibold text-slate-800">Utvecklingsområden</p>
          </div>
          <div className="space-y-2 pl-10">
            {["Certifieringar inom Scrum/SAFe", "Erfarenhet av större team (+20 personer)"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const brevContent = (
  <div className="flex h-full">
    {/* Sidebar */}
    <div className="w-16 bg-slate-900 flex flex-col items-center py-6 gap-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
        <Zap size={20} className="text-white" />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60">
        <Search size={18} />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60">
        <FileText size={18} />
      </div>
      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
        <PenTool size={18} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-slate-50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Personligt brev</h3>
        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full flex items-center gap-1">
          <Sparkles size={12} />
          AI-genererat
        </span>
      </div>
      
      <div className="bg-white rounded-xl p-5 border border-slate-200 mb-4">
        <p className="text-sm text-slate-600 leading-relaxed">
          <strong>Hej!</strong>
          <br /><br />
          Jag söker tjänsten som projektledare hos er med stor entusiasm. Med min bakgrund inom agil utveckling och över sju års erfarenhet av att leda tvärfunktionella team känner jag mig väl rustad för rollen.
          <br /><br />
          Under min tid på [Nuvarande arbetsgivare] har jag framgångsrikt lett projekt värda över 15 MSEK och utvecklat processer som...
          <br /><br />
          <span className="text-slate-400 italic">[Fortsättning genereras baserat på din profil och jobbannonsen]</span>
        </p>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center justify-center gap-2 flex-1 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium rounded-lg">
          <Copy size={16} />
          Kopiera text
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg">
          <Edit3 size={16} />
          Redigera
        </button>
      </div>
    </div>
  </div>
);

const tabContent: Record<string, JSX.Element> = {
  dashboard: dashboardContent,
  jobbskanning: jobbskanningContent,
  cv: cvContent,
  optimal: optimalContent,
  brev: brevContent,
};

const AppDemo = () => {
  const [activeTab, setActiveTab] = useState("jobbskanning");

  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-text mb-4 block">Interaktiv demo</span>
            <h1 className="heading-xl mb-6">Se RebelCV i action</h1>
            <p className="text-lg text-slate-300">
              Klistra in en jobbannons-URL och få matchningsanalys, skräddarsytt CV och personligt brev – allt genererat på sekunder.
            </p>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="pb-20">
        <div className="container-main">
          <div className="card-dark p-4 md:p-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 border border-orange-500/30"
                      : "text-slate-400 hover:text-slate-50 hover:bg-white/5"
                  }`}
                >
                  <tab.icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* App Frame */}
            <div className="rounded-xl overflow-hidden border border-slate-700 min-h-[450px]">
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDemo;
