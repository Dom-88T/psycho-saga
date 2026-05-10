import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Outlet />
    </div>
  );
}
