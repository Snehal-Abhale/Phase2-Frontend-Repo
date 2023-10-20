import { Outlet } from "react-router";
import Nav from "../nav";

// This component will render on load.
export default function Root() {
  return (
    // Note: `className` props throughout this app leverage Tailwind CSS, an optional dependency.
    <div className="m-2.5">
      
      <Nav />
      {/* Nested routes will render right here. */}
      <Outlet />
      {/* This <footer> will render below every route. */}
      <footer className="mt-4 text-xs">&copy; 2023 Snehal Abhale -Travel App is building the future of how we experience our cities.</footer>
    </div>
  );
}
