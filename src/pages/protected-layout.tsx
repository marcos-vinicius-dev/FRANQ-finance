import Header from "@/components/layout/header";
import { Outlet } from "react-router";

export default function ProtectedLayout() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <Outlet />
      </div>
    </>
  );
}
