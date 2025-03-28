import { NavLink, useLocation, useNavigate } from "react-router";
import {
  TabNavigation,
  TabNavigationLink,
} from "@/components/ui/tab-navigation";
import { Button } from "@/components/ui/button";
import { logout } from "@/gateway/auth";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    const isLogout = logout();

    if (isLogout) {
      navigate("/");
    }
  }

  return (
    <header className="shadow-s sticky top-0 z-20 bg-white dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 pt-3">
        <div className="flex items-center gap-4">
          <NavLink to="/visao-geral">
            <img className="w-8" src="/logo.svg" alt="Logo" />
          </NavLink>
          <span className="dark:text-gray-50 font-bold">Finance</span>
        </div>
        <div className="flex h-[42px] flex-nowrap gap-1">
          <Button variant="ghost" onClick={handleLogout}>
            Sair
          </Button>
        </div>
      </div>
      <TabNavigation className="mt-5">
        <div className="mx-auto flex w-full max-w-7xl items-center px-6">
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/visao-geral"}
          >
            <NavLink to="/visao-geral">Visão Geral</NavLink>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname.startsWith("/acoes")}
          >
            <NavLink to="/acoes/indices">Ações</NavLink>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/moedas"}
          >
            <NavLink to="/moedas">Moedas</NavLink>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/bitcoin"}
          >
            <NavLink to="/bitcoin">Bitcoin </NavLink>
          </TabNavigationLink>
        </div>
      </TabNavigation>
    </header>
  );
}
