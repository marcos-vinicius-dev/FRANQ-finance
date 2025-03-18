import { Button } from "@/components/ui/button";
import CreateAccountForm from "@/components/auth/create-account-form";
import { NavLink } from "react-router";

export default function CreateAccountPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-28 lg:px-6">
      <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <div className="w-fit rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 p-3 shadow-sm shadow-blue-500/50 ring-1 ring-inset ring-white/25">
            <RiPieChart2Fill className="size-8 text-white" aria-hidden="true" />
          </div>
        </div>
        <h2 className="mt-4 text-center text-xl font-semibold text-gray-900 dark:text-gray-50">
          Cadastre-se gratuitamente
        </h2>
        <p className="text-gray-900 dark:text-gray-50">
          Cadastre-se para acompanhar as cotações do mercado.
        </p>
        <div className="mt-6">
          <CreateAccountForm />
          <Button className="mt-4 w-full">
            Já tem uma conta? Faça login aqui
          </Button>
        </div>
      </div>
    </div>
  );
}
