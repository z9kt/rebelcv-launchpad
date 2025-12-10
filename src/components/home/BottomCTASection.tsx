import { Link } from "react-router-dom";

export function BottomCTASection() {
  return (
    <section className="section-block py-16 md:py-24 text-center">
      <div className="container-main">
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
    </section>
  );
}
