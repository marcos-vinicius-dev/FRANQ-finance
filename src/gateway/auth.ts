import { generateToken, hashPassword } from "@/utils/auth";

export const AUTH_TOKEN_KEY = "auth_token";
export const USERS_KEY = "registered_users";

export function createUser(email: string, password: string, name: string) {
  const usersStorage = localStorage.getItem(USERS_KEY);
  const users = usersStorage ? JSON.parse(usersStorage) : [];
  if (
    users.some(
      (user: { email: string; password: string; name: string }) =>
        user.email === email,
    )
  ) {
    alert("Usuário já existe!");
    return;
  }
  const newUser = { email, password: hashPassword(password), name };
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  alert("Cadastro realizado com sucesso! Faça login.");
}

export function signIn(email: string, password: string) {
  const usersStorage = localStorage.getItem(USERS_KEY);
  const users = usersStorage ? JSON.parse(usersStorage) : [];
  const hashedPassword = hashPassword(password);
  const user = users.find(
    (u: {
      email: string;
      password: string;
    }) => u.email === email && u.password === hashedPassword,
  );
  if (!user) {
    return null;
  }

  const token = generateToken(email);
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  return token;
}

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  return !localStorage.getItem(AUTH_TOKEN_KEY);
};
