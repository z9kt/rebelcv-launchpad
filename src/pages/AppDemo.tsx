import { useState } from "react";
import { LayoutDashboard, Search, FileText, TrendingUp, PenTool, Sparkles, BarChart3, CheckCircle, Clock, Target } from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "jobbskanning", label: "Jobbskanning", icon: Search },
  { id: "cv", label: "Jobbanpassat CV", icon: FileText },
  { id: "optimal", label: "Optimal för dig", icon: TrendingUp },
  { id: "brev", label: "Personligt brev", icon: PenTool },
];

const dashboardContent = (
  <div className="space-y-4">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-slate-800">Vad vill du göra idag?</h3>
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Clock size={14} />
        <span>Senast aktiv: idag</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {[
        { icon: Search, label: "Skanna nytt jobb" },
        { icon: FileText, label: "Skapa CV" },
        { icon: PenTool, label: "Skriv brev" },
        { icon: BarChart3, label: "Se statistik" },
      ].map((item) => (
        <div key={item.label} className="bg-white rounded-lg p-4 border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer">
          <item.icon size={20} className="text-blue-600 mb-2" />
          <span className="text-sm font-medium text-slate-700">{item.label}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <Sparkles size={18} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-800">3 nya matchningar</p>
          <p className="text-xs text-slate-500">Baserat på din profil</p>
        </div>
      </div>
    </div>
  </div>
);

const jobbskanningContent = (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-slate-800 mb-4">Skanna jobbannons</h3>
    <div className="bg-white rounded-lg p-4 border border-slate-200">
      <textarea
        className="w-full h-24 text-sm text-slate-600 resize-none border-0 focus:outline-none"
        placeholder="Klistra in jobbannons här..."
        defaultValue="Vi söker en driven projektledare med erfarenhet av agila metoder..."
      />
    </div>
    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl font-bold text-green-600">78%</div>
        <span className="text-sm text-green-700">Matchning</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <CheckCircle size={14} className="text-green-500" />
          <span>Projektledning</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <CheckCircle size={14} className="text-green-500" />
          <span>Agila metoder</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Target size={14} className="text-amber-500" />
          <span>Scrum-certifiering (rekommenderas)</span>
        </div>
      </div>
    </div>
  </div>
);

const cvContent = (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-slate-800 mb-4">Jobbanpassat CV</h3>
    <div className="bg-white rounded-lg p-4 border border-slate-200 space-y-3">
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">Namn</p>
        <p className="text-slate-800 font-medium">Anna Andersson</p>
      </div>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">Titel</p>
        <p className="text-slate-800">Senior Projektledare</p>
      </div>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">Framhävda kompetenser</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {["Projektledning", "Agil utveckling", "Stakeholder management"].map((skill) => (
            <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
    <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg">
      Exportera CV
    </button>
  </div>
);

const optimalContent = (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-slate-800 mb-4">Optimal för dig</h3>
    <div className="space-y-3">
      <div className="bg-white rounded-lg p-4 border border-slate-200">
        <p className="text-sm font-medium text-slate-800 mb-2">Styrkor</p>
        <div className="space-y-1">
          {["Bred erfarenhet av projektledning", "Stark kommunikationsförmåga", "Resultatfokuserad"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-slate-200">
        <p className="text-sm font-medium text-slate-800 mb-2">Utvecklingsområden</p>
        <div className="space-y-1">
          {["Certifieringar inom Scrum/SAFe", "Erfarenhet av större team"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const brevContent = (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-slate-800 mb-4">Personligt brev</h3>
    <div className="bg-white rounded-lg p-4 border border-slate-200">
      <p className="text-sm text-slate-600 leading-relaxed">
        Hej!
        <br /><br />
        Jag söker tjänsten som projektledare med stor entusiasm. Med min bakgrund inom agil utveckling och erfarenhet av att leda tvärfunktionella team känner jag mig väl rustad för rollen.
        <br /><br />
        Under min tid på [Företag] har jag...
      </p>
    </div>
    <div className="flex gap-2">
      <button className="flex-1 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg">
        Redigera
      </button>
      <button className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg">
        Kopiera
      </button>
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
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-text mb-4 block">Interaktiv demo</span>
            <h1 className="heading-xl mb-6">App-demo</h1>
            <p className="text-lg text-slate-300">
              Här kan du se hur RebelCV fungerar på insidan. Klicka mellan flikarna för att utforska de olika vyerna.
            </p>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="pb-20">
        <div className="container-main">
          <div className="card-dark p-4 md:p-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-white/10 text-slate-50"
                      : "text-slate-400 hover:text-slate-50 hover:bg-white/5"
                  }`}
                >
                  <tab.icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* App Frame */}
            <div className="bg-slate-100 rounded-2xl p-6 min-h-[400px]">
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDemo;
