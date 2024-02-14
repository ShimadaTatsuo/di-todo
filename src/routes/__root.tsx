import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Section } from "../components/ui/Section/Section";

export const Route = createRootRoute({
  component: () => (
    <>
      <Section>
        <h1>di-todo</h1>
      </Section>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <hr />

      <Outlet />

      <TanStackRouterDevtools />
    </>
  ),
});
