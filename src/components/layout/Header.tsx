import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/hur-det-funkar", label: "Hur det funkar" },
  { to: "/funktioner", label: "Funktioner" },
  { to: "/priser", label: "Priser" },
  { to: "/om", label: "Om" },
  { to: "/faq", label: "FAQ" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-semibold tracking-tight text-foreground">rebelcv</span>
            <span className="text-xs text-muted-foreground -mt-0.5">AI-drivet levande CV</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/logga-in"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Logga in
            </Link>
            <Link to="/logga-in" className="btn-primary">
              Kom igång gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl z-40">
          <nav className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-semibold ${
                  location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-border space-y-4">
              <Link
                to="/logga-in"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl text-muted-foreground"
              >
                Logga in
              </Link>
              <Link
                to="/logga-in"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary inline-block"
              >
                Kom igång gratis
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
