import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no real auth
    console.log("Login attempt:", { email, password });
  };

  return (
    <section className="section-padding min-h-[80vh] flex items-center justify-center">
      <div className="container-main max-w-md">
        <div className="card-light p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-foreground mb-2">Logga in</h1>
            <p className="text-muted-foreground">Välkommen tillbaka till RebelCV</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                E-postadress
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                placeholder="din@email.se"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Lösenord
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border bg-muted text-primary focus:ring-primary/50"
                />
                Kom ihåg mig
              </label>
              <Link to="#" className="text-primary hover:underline">
                Glömt lösenord?
              </Link>
            </div>

            <button type="submit" className="btn-primary w-full">
              Logga in
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              Inget konto?{" "}
              <Link to="#" className="text-primary hover:underline">
                Kom igång gratis
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;