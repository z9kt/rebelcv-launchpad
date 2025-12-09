import { Link } from "react-router-dom";

export function BottomCTASection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="card-light p-8 md:p-12 text-center">
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
