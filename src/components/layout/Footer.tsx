import { Link } from "react-router-dom";

const footerLinks = {
  produkt: [
    { to: "/funktioner", label: "Funktioner" },
    { to: "/hur-det-funkar", label: "Hur det funkar" },
    { to: "/priser", label: "Priser" },
    { to: "/app-demo", label: "App-demo" },
  ],
  support: [
    { to: "/faq", label: "FAQ" },
    { to: "/om", label: "Kontakt" },
  ],
  om: [
    { to: "/om", label: "Om RebelCV" },
    { to: "#", label: "Blogg" },
    { to: "#", label: "Karriär" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="gradient-primary">
        <div className="container-main py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Redo att göra upp med ditt gamla CV?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Sluta anpassa samma dokument om och om igen. Låt RebelCV göra jobbet åt dig.
          </p>
          <Link to="/logga-in" className="btn-secondary bg-white/10 border-white/30 hover:bg-white/20">
            Starta RebelCV
          </Link>
        </div>
      </div>

      {/* Links Section */}
      <div className="bg-black/60 border-t border-white/5">
        <div className="container-main py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="inline-block">
                <span className="text-xl font-semibold tracking-tight text-slate-50">rebelcv</span>
              </Link>
              <p className="mt-4 text-sm text-slate-400">
                AI-drivet levande CV för den moderna jobbsökaren.
              </p>
            </div>

            {/* Produkt */}
            <div>
              <h3 className="text-sm font-semibold text-slate-50 mb-4">Produkt</h3>
              <ul className="space-y-3">
                {footerLinks.produkt.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-slate-50 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold text-slate-50 mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-slate-50 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Om */}
            <div>
              <h3 className="text-sm font-semibold text-slate-50 mb-4">Om</h3>
              <ul className="space-y-3">
                {footerLinks.om.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-slate-50 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Wordmark */}
        <div className="relative border-t border-white/5">
          <div className="container-main py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} RebelCV. Alla rättigheter förbehållna.
              </p>
              <div className="flex gap-6">
                <Link to="#" className="text-sm text-slate-500 hover:text-slate-400">
                  Integritetspolicy
                </Link>
                <Link to="#" className="text-sm text-slate-500 hover:text-slate-400">
                  Användarvillkor
                </Link>
              </div>
            </div>
          </div>

          {/* Giant Wordmark */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
            <span className="footer-wordmark" style={{ 
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, transparent 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              rebelcv
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
