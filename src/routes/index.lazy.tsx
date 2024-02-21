import { createLazyFileRoute } from "@tanstack/react-router";
import { setDocumentTitle } from "../utils/setDocumentTitle";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  setDocumentTitle();

  const clickCreateUser = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 3,
        firstName: "firstName3",
        lastName: "lastName3",
        isActive: true,
      }),
    });
  };

  return (
    <div>
      <h3 style={{ color: "red" }}>Welcome Home!</h3>
      <button onClick={clickCreateUser}>create user</button>
    </div>
  );
}
