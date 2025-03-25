import { Button } from "@/components/ui/button";
import CreateAccountForm from "@/components/auth/create-account-form";
import { NavLink } from "react-router";

export default function CreateAccountPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8 lg:px-6">
      <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <NavLink to="/">
            <img className="w-16" src="/logo.svg" alt="Logo" />
          </NavLink>
        </div>
        <h2 className="mt-4 text-center text-xl font-semibold text-gray-900 dark:text-gray-50">
          Cadastre-se gratuitamente
        </h2>
        <p className="text-gray-900 dark:text-gray-50">
          Cadastre-se para acompanhar as cotações do mercado.
        </p>
        <div className="mt-6">
          <CreateAccountForm />
          <NavLink to="/">
            <Button variant="light" className="mt-4 w-full">
              Já tem uma conta? Faça login aqui
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
