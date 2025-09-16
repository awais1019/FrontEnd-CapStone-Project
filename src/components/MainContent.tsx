import { Outlet } from "react-router-dom";

export default function MainContent() {
  return (
    <main className="min-h-[110vh]">
      <Outlet />
    </main>
  );
}
