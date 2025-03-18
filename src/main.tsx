import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/index.css";
import LoginPage from "./pages/auth/login.tsx";
import CreateAccountPage from "./pages/auth/create-account.tsx";
import { DashboardPage } from "./pages/quotes/dashboard.tsx";
import { QuoteListPage } from "./pages/quotes/quote-list.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="cadastro" element={<CreateAccountPage />} />
          <Route path="visao-geral" element={<DashboardPage />} />
          <Route path="cotacoes" element={<QuoteListPage />} />
        </Routes>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error("Failed to find the root element");
}
