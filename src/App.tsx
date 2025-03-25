import { BrowserRouter, Route, Routes } from "react-router";
import { Suspense, lazy } from "react";

const LoginPage = lazy(() => import("./pages/auth/login.tsx"));
const CreateAccountPage = lazy(() => import("./pages/auth/create-account.tsx"));
const ProtectedLayout = lazy(() => import("./pages/protected-layout.tsx"));
const QuoteDetailPage = lazy(() => import("./pages/finance/quote-detail"));
const DashboardPage = lazy(() => import("./pages/finance/dashboard"));
const StockIndexListPage = lazy(
  () => import("./pages/finance/stock-index-list.tsx"),
);
const CurrenciesListPage = lazy(
  () => import("./pages/finance/currencies-list.tsx"),
);
const BitcoinListPage = lazy(() => import("./pages/finance/bitcoin-list.tsx"));

function App() {
  return (
    <main className="h-full min-h-screen">
      <BrowserRouter>
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="cadastro" element={<CreateAccountPage />} />
            <Route element={<ProtectedLayout />}>
              <Route path="visao-geral" element={<DashboardPage />} />
              <Route path=":category/:code" element={<QuoteDetailPage />} />
              <Route path="acoes/indices" element={<StockIndexListPage />} />
              <Route path="moedas" element={<CurrenciesListPage />} />
              <Route path="bitcoin" element={<BitcoinListPage />} />
            </Route>
            {/* <NotFound/> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </main>
  );
}

export default App;
