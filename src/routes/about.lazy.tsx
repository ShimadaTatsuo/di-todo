import { createLazyFileRoute } from "@tanstack/react-router";
import { setDocumentTitle } from "../utils/setDocumentTitle";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  setDocumentTitle("about");

  return <div className="p-2">Hello from About!</div>;
}
