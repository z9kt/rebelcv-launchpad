import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

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
      <div className="container-main px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-lg md:text-xl font-semibold tracking-tight text-foreground">rebelcv</span>
            <span className="text-[10px] md:text-xs text-muted-foreground -mt-0.5">AI-drivet levande CV</span>
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
            className="md:hidden p-2 text-foreground -mr-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-background z-40 overflow-y-auto">
          <nav className="flex flex-col p-6 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-semibold ${
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
                className="block text-lg text-muted-foreground"
              >
                Logga in
              </Link>
              <Link
                to="/logga-in"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary inline-block text-center"
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