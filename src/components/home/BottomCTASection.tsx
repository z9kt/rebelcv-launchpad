import { Link } from "react-router-dom";

export function BottomCTASection() {
  return (
    <section className="section-block py-12 md:py-24 text-center">
      <div className="container-main px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4">
          Låt ditt CV bli en fördel, inte en börda
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto">
          Sluta spendera timmar på att anpassa samma dokument. RebelCV gör det tunga lyftet åt dig.
        </p>
        <Link to="/logga-in" className="btn-primary">
          Kom igång gratis
        </Link>
      </div>
    </section>
  );
}
