import { Button } from "../ui/button";
import { Input } from "../ui/input/inpur-text";
import { Label } from "../ui/input/label";

export default function CreateAccountForm() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <Label htmlFor="name">Nome completo</Label>
        <Input id="name" type="text" placeholder="Digite seu nome completp" />
      </div>
      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" placeholder="Digite seu e-mail" />
      </div>
      <div>
        <Label htmlFor="password">Senha</Label>
        <Input id="password" type="password" placeholder="Digite seu senha" />
      </div>
      <div>
        <Label htmlFor="password-confirm">Confirmar Senha</Label>
        <Input
          id="password-confirm"
          type="password"
          placeholder="Digite novamente sua senha"
        />
      </div>
      <Button className="mt-4 w-full">Já tem uma conta? Faça login aqui</Button>
    </form>
  );
}
