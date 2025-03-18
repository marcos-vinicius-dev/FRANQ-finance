import { NavLink, useLocation } from "react-router";
import {
  TabNavigation,
  TabNavigationLink,
} from "@/components/ui/tab-navigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  const location = useLocation();

  return (
    <div className="shadow-s sticky top-0 z-20 bg-white dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 pt-3">
        <div className="flex items-center gap-4">
          <NavLink to="/">
            <img className="w-8" src="/logo.svg" alt="Logo" />
          </NavLink>
          <span className="dark:text-gray-50 font-bold">Finance</span>
        </div>
        <div className="flex h-[42px] flex-nowrap gap-1">
          <Button variant="ghost">Sair</Button>
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
            active={location.pathname === "/cotacoes"}
          >
            <NavLink to="/cotacoes">Cotações</NavLink>
          </TabNavigationLink>
        </div>
      </TabNavigation>
    </div>
  );
}
