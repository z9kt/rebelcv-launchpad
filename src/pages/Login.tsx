import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="section-block p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-foreground mb-2">Logga in</h1>
            <p className="text-muted-foreground">Välkommen tillbaka till RebelCV</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-postadress</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="din@email.se" required />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">Lösenord</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="••••••••" required />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded" /> Kom ihåg mig
              </label>
              <Link to="#" className="text-blue-600 hover:underline">Glömt lösenord?</Link>
            </div>

            <button type="submit" className="btn-primary w-full">Logga in</button>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              Inget konto? <Link to="#" className="text-blue-600 hover:underline font-medium">Kom igång gratis</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
