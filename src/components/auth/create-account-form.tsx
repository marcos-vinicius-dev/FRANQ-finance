import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input/inpur-text";
import { Label } from "@/components/ui/input/label";
import { createUser } from "@/gateway/auth";

const formSchema = z
  .object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Por favor, insira um e-mail válido"),
    password: z.string().min(8, "Senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export default function CreateAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    try {
      await createUser(data.email, data.password, data.name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="name">Nome completo</Label>
        <Input
          id="name"
          type="text"
          placeholder="Digite seu nome completo"
          hasError={!!errors?.name}
          errorMessage={errors?.name?.message}
          {...register("name")}
        />
      </div>
      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          hasError={!!errors?.email}
          errorMessage={errors?.email?.message}
          {...register("email")}
        />
      </div>
      <div>
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          hasError={!!errors?.password}
          errorMessage={errors?.password?.message}
          {...register("password")}
        />
      </div>
      <div>
        <Label htmlFor="confirmPassword">Confirmar Senha</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Digite novamente sua senha"
          hasError={!!errors?.confirmPassword}
          errorMessage={errors?.confirmPassword?.message}
          {...register("confirmPassword")}
        />
      </div>
      <Button type="submit" className="mt-4 w-full" disabled={isSubmitting}>
        {isSubmitting ? "Cadastrando..." : "Cadastrar conta"}
      </Button>
    </form>
  );
}
