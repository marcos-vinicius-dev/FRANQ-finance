import Header from "@/components/layout/header";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import { Navigate, Outlet } from "react-router";

export default function ProtectedLayout() {
  const { isAuthenticated } = useIsAuthenticated();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <Outlet />
      </div>
    </>
  );
}
