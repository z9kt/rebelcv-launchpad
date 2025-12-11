const features = [
  {
    title: "Levande CV",
    description: "CV:t uppdateras automatiskt när du ändrar din profil eller skapar nya ansökningar.",
    visual: (
      <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-2">
            <div className="w-16 h-20 bg-white rounded-lg shadow-lg transform -rotate-6 flex flex-col p-2">
              <div className="w-full h-1.5 bg-slate-200 rounded mb-1.5"></div>
              <div className="w-3/4 h-1 bg-slate-100 rounded mb-1"></div>
              <div className="w-full h-1 bg-slate-100 rounded mb-1"></div>
              <div className="w-2/3 h-1 bg-slate-100 rounded"></div>
            </div>
            <div className="w-16 h-20 bg-white rounded-lg shadow-xl transform rotate-3 translate-y-2 flex flex-col p-2 border-2 border-emerald-400">
              <div className="w-full h-1.5 bg-emerald-400 rounded mb-1.5"></div>
              <div className="w-3/4 h-1 bg-emerald-200 rounded mb-1"></div>
              <div className="w-full h-1 bg-emerald-100 rounded mb-1"></div>
              <div className="w-2/3 h-1 bg-emerald-100 rounded"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      </div>
    ),
  },
  {
    title: "AI som tolkar kraven",
    description: "Systemet läser jobbannonsen, räknar ut matchningsprocent och lyfter fram dina styrkor.",
    visual: (
      <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
              <span className="text-3xl font-bold text-violet-600">84%</span>
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center">
              <span className="text-white text-xs">★</span>
            </div>
          </div>
        </div>
        <div className="absolute top-3 left-3 px-2 py-1 bg-white/80 rounded-full text-xs text-violet-600 font-medium shadow-sm">
          Matchning
        </div>
      </div>
    ),
  },
  {
    title: "Allt samlat",
    description: "Ansökningar, CV-versioner, personliga brev och analyser samlade i samma vy.",
    visual: (
      <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex -space-x-3">
            <div className="w-12 h-16 bg-white rounded-lg shadow-md flex flex-col items-center justify-center transform -rotate-6">
              <div className="w-6 h-1 bg-blue-400 rounded mb-1"></div>
              <div className="w-5 h-1 bg-slate-200 rounded"></div>
            </div>
            <div className="w-12 h-16 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center z-10">
              <div className="w-6 h-1 bg-emerald-400 rounded mb-1"></div>
              <div className="w-5 h-1 bg-slate-200 rounded"></div>
            </div>
            <div className="w-12 h-16 bg-white rounded-lg shadow-md flex flex-col items-center justify-center transform rotate-6">
              <div className="w-6 h-1 bg-amber-400 rounded mb-1"></div>
              <div className="w-5 h-1 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 rounded-full text-xs text-white font-medium shadow-sm">
          3 dokument
        </div>
      </div>
    ),
  },
];

export function WhySection() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="section-block p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
          <div className="mb-5 group-hover:scale-[1.02] transition-transform duration-300">
            {feature.visual}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}