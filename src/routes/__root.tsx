import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Section } from "../components/ui/Section/Section";

const isDevelopment = process.env.NODE_ENV === "development";

export const Route = createRootRoute({
  component: () => {
    return (
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

        {isDevelopment && <TanStackRouterDevtools />}
      </>
    );
  },
});
