import { APP_DOMAIN } from "../config/config";

export const fetchClient = (
  method: "GET" | "POST" | "PATCH" | "DELETE",
  path: string,
  body: Record<string, unknown> | Record<string, unknown>[]
) => {
  return fetch(`${APP_DOMAIN}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
