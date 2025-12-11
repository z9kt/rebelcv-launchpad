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
    <>
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
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-foreground -mr-2"
              aria-label="Öppna meny"
            >
              <List size={24} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[100] flex items-center justify-center p-6"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Blur backdrop */}
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-md" />
          
          {/* Menu popup */}
          <div 
            className="relative bg-background rounded-3xl shadow-2xl w-full max-w-sm p-6 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors"
              aria-label="Stäng meny"
            >
              <X size={20} weight="bold" />
            </button>

            {/* Logo in popup */}
            <div className="mb-6">
              <span className="text-xl font-semibold tracking-tight text-foreground">rebelcv</span>
              <span className="block text-xs text-muted-foreground">AI-drivet levande CV</span>
            </div>

            {/* Navigation links */}
            <nav className="space-y-1 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA section */}
            <div className="pt-4 border-t border-border space-y-3">
              <Link
                to="/logga-in"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                Logga in
              </Link>
              <Link
                to="/logga-in"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary block text-center"
              >
                Kom igång gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}