import { Link } from "react-router-dom";
import { Check, Sparkle, FileText, DownloadSimple, CheckCircle, WarningCircle } from "@phosphor-icons/react";

const features = [
  { text: "AI-optimerat CV och personligt brev" },
  { text: "Smarta förslag som anpassar dina titlar till jobbet" },
  { text: "Jobbmatchning och karriäranalys" },
];

export function HeroSection() {
  return (
    <section className="section-block py-10 md:py-24 overflow-hidden">
      <div className="container-main px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <span className="label-text text-[10px] md:text-xs">AI-drivet levande CV</span>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                Ditt CV som vågar{" "}
                <span className="text-accent">sticka ut</span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground max-w-lg">
                Klistra in en jobbannons-URL. Få matchningsanalys, skräddarsytt CV och personligt brev – allt på sekunder.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link to="/logga-in" className="btn-primary text-sm md:text-base">
                Kom igång gratis
              </Link>
              <a href="#hur-det-funkar" className="btn-secondary text-sm md:text-base">
                Se hur det funkar
              </a>
            </div>

            <ul className="space-y-2 md:space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 md:gap-3 text-muted-foreground">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Check size={10} weight="bold" className="text-white" />
                  </div>
                  <span className="text-xs md:text-sm">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Premium App Mockup */}
          <div className="relative">
            {/* Browser-style app frame */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              {/* Browser top bar */}
              <div className="bg-muted border-b border-border px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-card border border-border rounded-lg px-4 py-1.5 text-xs text-muted-foreground flex items-center gap-2 max-w-xs">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    app.rebelcv.se
                  </div>
                </div>
              </div>

              {/* App content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 bg-card">
                {/* Job input section */}
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-muted/50 rounded-xl border border-border">
                  <div className="flex-1 text-xs sm:text-sm text-foreground truncate">
                    linkedin.com/jobs/senior-projektledare
                  </div>
                  <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-emerald-500 text-white text-xs font-medium rounded-lg whitespace-nowrap">
                    Analyserad
                  </div>
                </div>

                {/* Match score - prominent display */}
                <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200/50">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                        <circle cx="24" cy="24" r="20" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                        <circle cx="24" cy="24" r="20" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="126" strokeDashoffset="20" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm sm:text-lg font-bold text-foreground">84%</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm sm:text-base">Stark matchning</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Senior Projektledare</p>
                    </div>
                  </div>
                </div>

                {/* Two column layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* AI Suggestions */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2">
                      <Sparkle size={14} weight="duotone" className="text-violet-500" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">AI-förslag</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 sm:p-2.5 bg-muted/50 rounded-lg border border-border">
                        <p className="text-muted-foreground text-xs mb-1">Din titel:</p>
                        <p className="text-foreground font-medium text-xs">"Projektledare" → <span className="text-violet-600">"IT-projektledare"</span></p>
                      </div>
                      <div className="p-2 sm:p-2.5 bg-muted/50 rounded-lg border border-border hidden sm:block">
                        <p className="text-muted-foreground text-xs mb-1">Din erfarenhet:</p>
                        <p className="text-foreground font-medium text-xs">"Ledde team" → <span className="text-violet-600">"Coachade tvärfunktionella team"</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Analysis */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} weight="duotone" className="text-emerald-500" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Analys</span>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle size={12} weight="fill" className="text-emerald-500 flex-shrink-0" />
                        <span className="text-foreground">7+ års ledarerfarenhet</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle size={12} weight="fill" className="text-emerald-500 flex-shrink-0" />
                        <span className="text-foreground">Agila metoder bekräftat</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs hidden sm:flex">
                        <CheckCircle size={12} weight="fill" className="text-emerald-500 flex-shrink-0" />
                        <span className="text-foreground">Budgetansvar matchar</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <WarningCircle size={12} weight="fill" className="text-amber-500 flex-shrink-0" />
                        <span className="text-muted-foreground">Saknar: Scrum-certifiering</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cover letter preview */}
                <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <FileText size={14} weight="duotone" className="text-slate-500" />
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Personligt brev</span>
                    <span className="ml-auto text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Genererat</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground leading-relaxed italic line-clamp-2 sm:line-clamp-none">
                    "Med sju års erfarenhet av att leda komplexa IT-projekt och driva agila transformationer..."
                  </p>
                </div>

                {/* Download CV button */}
                <div className="flex items-center justify-between p-3 sm:p-4 bg-foreground rounded-xl gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText size={16} weight="duotone" className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-white truncate">CV_Senior_Projektledare.pdf</p>
                      <p className="text-xs text-white/60 truncate hidden sm:block">Optimerat för TechCorp AB</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white text-foreground text-xs sm:text-sm font-medium rounded-lg hover:bg-white/90 transition-colors flex-shrink-0">
                    <DownloadSimple size={14} weight="bold" />
                    <span className="hidden sm:inline">Ladda ner</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}