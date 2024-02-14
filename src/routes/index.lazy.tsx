import { createLazyFileRoute } from "@tanstack/react-router";
import { setDocumentTitle } from "../utils/setDocumentTitle";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  setDocumentTitle();

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
