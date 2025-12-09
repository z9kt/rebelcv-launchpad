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
    <footer className="relative overflow-hidden bg-[#08090d]">
      {/* CTA Section - clean dark, no gradient */}
      <div className="border-t border-white/[0.06]">
        <div className="container-main py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Redo att göra upp med ditt gamla CV?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Sluta anpassa samma dokument om och om igen. Låt RebelCV göra jobbet åt dig.
          </p>
          <Link to="/logga-in" className="btn-primary">
            Starta RebelCV
          </Link>
        </div>
      </div>

      {/* Links Section */}
      <div className="border-t border-white/[0.06]">
        <div className="container-main py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <p className="text-sm text-slate-500 leading-relaxed">
                RebelCV kombinerar AI med smart karriärstrategi för att skapa CV:n och personliga brev som sticker ut.
              </p>
              <p className="text-xs text-slate-600 mt-4">
                © {new Date().getFullYear()} RebelCV
              </p>
            </div>

            {/* Produkt */}
            <div>
              <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Produkt</h3>
              <ul className="space-y-3">
                {footerLinks.produkt.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Om */}
            <div>
              <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Företag</h3>
              <ul className="space-y-3">
                {footerLinks.om.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Wordmark */}
        <div className="relative border-t border-white/[0.06]">
          <div className="container-main py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex gap-6">
                <Link to="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                  Integritetspolicy
                </Link>
                <Link to="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                  Användarvillkor
                </Link>
              </div>
            </div>
          </div>

          {/* Giant Wordmark with fade */}
          <div className="relative h-32 md:h-48 overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-[30%]">
              <span className="footer-wordmark">rebelcv</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}