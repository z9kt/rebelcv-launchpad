import { Link } from "react-router-dom";
import { Check, Sparkles, FileText, Download, CheckCircle2, AlertCircle } from "lucide-react";

const features = [
  { text: "AI-optimerat CV och personligt brev" },
  { text: "Smarta förslag som anpassar dina titlar till jobbet" },
  { text: "Jobbmatchning och karriäranalys" },
];

export function HeroSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="glow-blur glow-blur-violet w-96 h-96 -top-20 -left-20" />
        <div className="glow-blur glow-blur-emerald w-80 h-80 top-1/2 -right-20" />
        <div className="glow-blur glow-blur-primary w-64 h-64 bottom-20 left-1/3" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="label-text">AI-drivet levande CV</span>
              <h1 className="heading-xl">
                Ditt CV som vågar{" "}
                <span className="text-accent">sticka ut</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
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
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Premium App Mockup */}
          <div className="relative">
            {/* Browser-style app frame */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-background">
              {/* Browser top bar */}
              <div className="bg-muted border-b border-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-background border border-border rounded-lg px-4 py-1.5 text-xs text-muted-foreground flex items-center gap-2 max-w-xs">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    app.rebelcv.se
                  </div>
                </div>
              </div>

              {/* App content */}
              <div className="p-6 space-y-5">
                {/* Job input section */}
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl border border-border">
                  <div className="flex-1 text-sm text-foreground truncate">
                    linkedin.com/jobs/senior-projektledare-techcorp
                  </div>
                  <div className="px-3 py-1.5 bg-emerald-500 text-white text-xs font-medium rounded-lg">
                    Analyserad
                  </div>
                </div>

                {/* Match score - prominent display */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200/50">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <svg className="w-16 h-16 -rotate-90">
                        <circle cx="32" cy="32" r="28" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                        <circle cx="32" cy="32" r="28" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="176" strokeDashoffset="28" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-foreground">84%</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Stark matchning</p>
                      <p className="text-sm text-muted-foreground">Senior Projektledare</p>
                    </div>
                  </div>
                </div>

                {/* Two column layout */}
                <div className="grid grid-cols-2 gap-4">
                  {/* AI Suggestions */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-violet-500" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">AI-förslag</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="p-2.5 bg-muted/50 rounded-lg border border-border">
                        <p className="text-muted-foreground text-xs mb-1">Din titel:</p>
                        <p className="text-foreground font-medium text-xs">"Projektledare" → <span className="text-violet-600">"IT-projektledare med agil expertis"</span></p>
                      </div>
                      <div className="p-2.5 bg-muted/50 rounded-lg border border-border">
                        <p className="text-muted-foreground text-xs mb-1">Din erfarenhet:</p>
                        <p className="text-foreground font-medium text-xs">"Ledde team" → <span className="text-violet-600">"Coachade tvärfunktionella team"</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Analysis */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Analys</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        <span className="text-foreground">7+ års ledarerfarenhet</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        <span className="text-foreground">Agila metoder bekräftat</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        <span className="text-foreground">Budgetansvar matchar</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <AlertCircle size={12} className="text-amber-500" />
                        <span className="text-muted-foreground">Saknar: Scrum-certifiering</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cover letter preview */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText size={14} className="text-slate-500" />
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Personligt brev</span>
                    <span className="ml-auto text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Genererat</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed italic">
                    "Med sju års erfarenhet av att leda komplexa IT-projekt och driva agila transformationer, ser jag tjänsten som Senior Projektledare hos TechCorp som ett naturligt nästa steg..."
                  </p>
                </div>

                {/* Download CV button */}
                <div className="flex items-center justify-between p-4 bg-foreground rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <FileText size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">CV_Senior_Projektledare.pdf</p>
                      <p className="text-xs text-white/60">Optimerat för TechCorp AB</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white text-foreground text-sm font-medium rounded-lg hover:bg-white/90 transition-colors">
                    <Download size={14} />
                    Ladda ner
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative elements behind mockup */}
            <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-gradient-to-br from-violet-200/60 to-transparent rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-gradient-to-tr from-emerald-200/60 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>
      
      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
