import { createLazyFileRoute } from "@tanstack/react-router";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import { fetchClient } from "../utils/fetchClient";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  setDocumentTitle();

  const clickCreateUser = async () => {
    await fetchClient("POST", "/users", {
      id: 4,
      firstName: "firstName4",
      lastName: "lastName4",
      isActive: true,
    });
  };

  return (
    <div>
      <h3 style={{ color: "red" }}>Welcome Home!</h3>
      <button onClick={clickCreateUser}>create user</button>
    </div>
  );
}
