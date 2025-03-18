import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input/inpur-text";
import { Label } from "@/components/ui/input/label";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" placeholder="Digite seu e-mail" />
      </div>
      <div>
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          placeholder="Digite seu password"
        />
      </div>
      <Button className="mt-4 w-full">Entrar</Button>
    </form>
  );
}
