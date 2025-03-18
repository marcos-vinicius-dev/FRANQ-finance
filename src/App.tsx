import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/auth/login.tsx";
import CreateAccountPage from "./pages/auth/create-account.tsx";
import { DashboardPage } from "./pages/quotes/dashboard.tsx";
import { QuoteListPage } from "./pages/quotes/quote-list.tsx";
import ProtectedLayout from "./pages/protected-layout.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="cadastro" element={<CreateAccountPage />} />
          <Route element={<ProtectedLayout />}>
            <Route path="visao-geral" element={<DashboardPage />} />
            <Route path="cotacoes" element={<QuoteListPage />} />
          </Route>
          {/* <NotFound/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
