import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className={`flex-1 pt-14 md:pt-20 ${isHomePage ? '' : 'p-4 md:p-6'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
