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
    {/* Sidebar - hidden on mobile */}
    <div className="hidden md:flex w-14 bg-slate-100 flex-col items-center py-5 gap-3 border-r border-border">
      <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center mb-3">
        <Zap size={18} className="text-white" />
      </div>
      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        <Search size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
        <FileText size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
        <BarChart3 size={16} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-card p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-foreground">Skanna jobbannons</h3>
          <p className="text-xs md:text-sm text-muted-foreground">Klistra in en URL för att börja</p>
        </div>
      </div>
      
      {/* URL Input */}
      <div className="bg-muted/50 rounded-xl p-3 md:p-5 border border-border">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 md:mb-3 block">Jobbannons URL</label>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:gap-3">
          <div className="flex-1 flex items-center gap-2 md:gap-3 bg-card border border-border rounded-lg px-3 md:px-4 py-2.5 md:py-3">
            <ClipboardPaste size={16} className="text-primary flex-shrink-0" />
            <span className="text-xs md:text-sm text-foreground truncate">linkedin.com/jobs/projektledare-senior...</span>
          </div>
          <button className="px-4 md:px-5 py-2.5 md:py-3 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-colors">
            Analysera
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 md:mt-3">Stöder LinkedIn, Indeed och de flesta jobbsidor</p>
      </div>

      <div className="mt-4 md:mt-6 flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
        <Sparkles size={14} className="text-primary flex-shrink-0" />
        <span>AI analyserar jobbannonsen och matchar mot din profil</span>
      </div>
    </div>
  </div>
);

const matchningContent = (
  <div className="flex h-full">
    {/* Sidebar - hidden on mobile */}
    <div className="hidden md:flex w-14 bg-slate-100 flex-col items-center py-5 gap-3 border-r border-border">
      <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center mb-3">
        <Zap size={18} className="text-white" />
      </div>
      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
        <Search size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        <Target size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
        <FileText size={16} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-card p-4 md:p-6">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-base md:text-lg font-semibold text-foreground">Matchningsanalys</h3>
          <p className="text-xs md:text-sm text-muted-foreground truncate">Senior Projektledare – TechCorp AB</p>
        </div>
        <div className="text-right ml-4">
          <div className="text-2xl md:text-3xl font-bold text-emerald-600">78%</div>
          <div className="text-xs text-emerald-600 font-medium">Bra match</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-4 md:mb-6">
        <div className="h-full w-[78%] bg-emerald-500 rounded-full" />
      </div>
      
      {/* Matches */}
      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
        <div className="flex items-start gap-2 md:gap-3 p-2.5 md:p-3 bg-emerald-50 rounded-lg border border-emerald-100">
          <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-xs md:text-sm font-medium text-foreground">Projektledning – 5+ års erfarenhet</p>
            <p className="text-xs text-muted-foreground hidden sm:block">Matchar dina 7 år som projektledare</p>
          </div>
        </div>
        <div className="flex items-start gap-2 md:gap-3 p-2.5 md:p-3 bg-emerald-50 rounded-lg border border-emerald-100">
          <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-xs md:text-sm font-medium text-foreground">Agila metoder (Scrum, Kanban)</p>
            <p className="text-xs text-muted-foreground hidden sm:block">Du har arbetat med Scrum i 4 projekt</p>
          </div>
        </div>
        <div className="flex items-start gap-2 md:gap-3 p-2.5 md:p-3 bg-amber-50 rounded-lg border border-amber-100">
          <Target size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-xs md:text-sm font-medium text-foreground">Scrum-certifiering</p>
            <p className="text-xs text-muted-foreground">Efterfrågas men saknas</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 md:gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 bg-primary hover:bg-primary/90 text-white text-xs md:text-sm font-medium rounded-lg transition-colors">
          <span>Skapa CV för detta jobb</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </div>
);

const cvContent = (
  <div className="flex h-full">
    {/* Sidebar - hidden on mobile */}
    <div className="hidden md:flex w-14 bg-slate-100 flex-col items-center py-5 gap-3 border-r border-border">
      <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center mb-3">
        <Zap size={18} className="text-white" />
      </div>
      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
        <Search size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        <FileText size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
        <PenTool size={16} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-card p-4 md:p-6">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="min-w-0">
          <h3 className="text-base md:text-lg font-semibold text-foreground">Ditt anpassade CV</h3>
          <p className="text-xs md:text-sm text-muted-foreground">Optimerat för: Senior Projektledare</p>
        </div>
        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium flex items-center gap-1 flex-shrink-0">
          <Sparkles size={10} />
          <span className="hidden sm:inline">AI-optimerat</span>
        </span>
      </div>
      
      {/* CV Preview */}
      <div className="bg-muted/50 rounded-xl p-3 md:p-5 border border-border mb-3 md:mb-4">
        <div className="border-b border-border pb-3 md:pb-4 mb-3 md:mb-4">
          <h4 className="text-lg md:text-xl font-semibold text-foreground">Anna Andersson</h4>
          <p className="text-muted-foreground text-sm">Senior Projektledare</p>
        </div>
        
        <div className="mb-3 md:mb-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Framhävda kompetenser</p>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {["Projektledning", "Agil utveckling", "Stakeholder mgmt"].map((skill) => (
              <span key={skill} className="px-2 md:px-3 py-1 md:py-1.5 bg-card text-foreground text-xs font-medium rounded-full border border-border">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="hidden sm:block">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">AI-anpassad sammanfattning</p>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            Erfaren projektledare med 7+ års erfarenhet av att leda komplexa IT-projekt...
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 md:gap-3">
        <button className="flex items-center justify-center gap-2 flex-1 py-2.5 md:py-3 bg-primary hover:bg-primary/90 text-white text-xs md:text-sm font-medium rounded-lg transition-colors">
          <Download size={14} />
          <span>Ladda ner PDF</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-3 bg-muted hover:bg-muted/80 text-foreground text-xs md:text-sm font-medium rounded-lg transition-colors">
          <Edit3 size={14} />
        </button>
      </div>
    </div>
  </div>
);

const brevContent = (
  <div className="flex h-full">
    {/* Sidebar - hidden on mobile */}
    <div className="hidden md:flex w-14 bg-slate-100 flex-col items-center py-5 gap-3 border-r border-border">
      <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center mb-3">
        <Zap size={18} className="text-white" />
      </div>
      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
        <Search size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
        <FileText size={16} />
      </div>
      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        <PenTool size={16} />
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 bg-card p-4 md:p-6">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="min-w-0">
          <h3 className="text-base md:text-lg font-semibold text-foreground">Personligt brev</h3>
          <p className="text-xs md:text-sm text-muted-foreground truncate">Anpassat för: Senior Projektledare</p>
        </div>
        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium flex items-center gap-1 flex-shrink-0">
          <Sparkles size={10} />
          <span className="hidden sm:inline">AI-genererat</span>
        </span>
      </div>
      
      <div className="bg-muted/50 rounded-xl p-3 md:p-5 border border-border mb-3 md:mb-4">
        <p className="text-xs md:text-sm text-foreground leading-relaxed">
          <strong className="text-foreground">Hej!</strong>
          <br /><br />
          Jag söker tjänsten som Senior Projektledare hos TechCorp AB med stor entusiasm. 
          Med min bakgrund inom agil utveckling och över sju års erfarenhet...
          <br /><br className="hidden sm:block" />
          <span className="hidden sm:inline">
            Under min tid på Acme AB har jag framgångsrikt lett projekt värda över 15 MSEK...
            <br /><br />
          </span>
          <span className="text-muted-foreground">Med vänliga hälsningar,</span>
          <br />
          <span className="text-foreground font-medium">Anna Andersson</span>
        </p>
      </div>

      <div className="flex gap-2 md:gap-3">
        <button className="flex items-center justify-center gap-2 flex-1 py-2.5 md:py-3 bg-primary hover:bg-primary/90 text-white text-xs md:text-sm font-medium rounded-lg transition-colors">
          <Copy size={14} />
          <span>Kopiera text</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-3 bg-muted hover:bg-muted/80 text-foreground text-xs md:text-sm font-medium rounded-lg transition-colors">
          <Edit3 size={14} />
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
      <section className="py-8 md:section-padding">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 md:mb-6">
              <span className="text-foreground">Klistra in en URL.</span>{" "}
              <span className="text-muted-foreground">Få komplett ansökan.</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Se hur RebelCV analyserar en jobbannons, räknar ut din matchning och genererar ett skräddarsytt CV och personligt brev.
            </p>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="pb-16 md:pb-24">
        <div className="container-main">
          <div className="section-block p-2 md:p-4">
            {/* Step Tabs */}
            <div className="flex gap-1 mb-3 md:mb-4 overflow-x-auto pb-2 -mx-2 px-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <tab.icon size={14} className="md:w-4 md:h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* App Frame */}
            <div className="rounded-xl overflow-hidden border border-border min-h-[320px] md:min-h-[420px] bg-muted/50">
              {tabContent[activeTab]}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-muted-foreground mb-4 text-sm">Redo att testa själv?</p>
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