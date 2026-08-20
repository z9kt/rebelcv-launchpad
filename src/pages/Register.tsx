import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password.length < 6) {
      setError("Lösenordet måste vara minst 6 tecken");
      setLoading(false);
      return;
    }

    const { error } = await signUp(email, password, fullName);

    if (error) {
      setError(error.message);
    }
    setLoading(false);
  };



  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="section-block p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-foreground mb-2">Skapa konto</h1>
            <p className="text-muted-foreground">Kom igång gratis med RebelCV</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                Fullständigt namn
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Förnamn Efternamn"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                E-postadress
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
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
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="••••••••"
                required
                minLength={6}
              />
              <p className="text-xs text-muted-foreground mt-1">Minst 6 tecken</p>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

            <button type="submit" className="btn-primary w-full" disabled={loading}>
              {loading ? "Skapar konto..." : "Skapa konto"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              Har du redan ett konto?{" "}
              <Link to="/logga-in" className="text-blue-600 hover:underline font-medium">
                Logga in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
