import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/auth/login.tsx";
import CreateAccountPage from "./pages/auth/create-account.tsx";
import ProtectedLayout from "./pages/protected-layout.tsx";
import { QuoteDetailPage } from "./pages/finance/quote-detail";
import { DashboardPage } from "./pages/finance/dashboard";
import { StockIndexListPage } from "./pages/finance/stock/stock-index-list.tsx";
import CurrenciesListPage from "./pages/finance/currencies-list.tsx";
import BitcoinListPage from "./pages/finance/bitcoin-list.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="cadastro" element={<CreateAccountPage />} />
          <Route element={<ProtectedLayout />}>
            <Route path="visao-geral" element={<DashboardPage />} />
            <Route path=":category/:code" element={<QuoteDetailPage />} />
            <Route
              path=":category/:code/:stymbol"
              element={<QuoteDetailPage />}
            />

            <Route path="acoes/indices" element={<StockIndexListPage />} />
            <Route path="moedas" element={<CurrenciesListPage />} />
            <Route path="bitcoin" element={<BitcoinListPage />} />
          </Route>
          {/* <NotFound/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
