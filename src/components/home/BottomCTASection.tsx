import { Link } from "react-router-dom";

export function BottomCTASection() {
  return (
    <section className="relative section-padding bg-muted/50 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="glow-blur glow-blur-primary w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      </div>

      <div className="container-main">
        <div className="card-premium p-8 md:p-12 text-center relative overflow-hidden">
          {/* Inner decorative glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-2xl" />
          </div>
          
          <h2 className="heading-md mb-4">
            Låt ditt CV bli en fördel, inte en börda
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Sluta spendera timmar på att anpassa samma dokument. RebelCV gör det tunga lyftet åt dig.
          </p>
          <Link to="/logga-in" className="btn-primary">
            Kom igång gratis
          </Link>
        </div>
      </div>
    </section>
  );
}
