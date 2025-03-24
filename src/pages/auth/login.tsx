import { Button } from "@/components/ui/button";
import LoginForm from "@/components/auth/login-form";
import { NavLink } from "react-router";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-28 lg:px-6">
      <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <img className="w-16" src="/logo.svg" alt="Logo" />
        </div>
        <h2 className="mt-4 text-center text-xl font-semibold text-gray-900 dark:text-gray-50">
          Faça login para continuar
        </h2>
        <p className="text-gray-900 dark:text-gray-50">
          Acompanhe as cotações do mercado em tempo real.
        </p>
        <div className="mt-6">
          <LoginForm />
          <NavLink to="/cadastro">
            <Button className="mt-4 w-full" variant="light">
              Não tem uma conta? Cadastre-se aqui.
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
