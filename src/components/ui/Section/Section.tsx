import { ReactNode } from "react";
import { container } from "./section.css.ts";

export const Section = ({ children }: { children: ReactNode }) => {
  return <section className={container}>{children}</section>;
};
