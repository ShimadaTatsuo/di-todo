import { render, screen } from "@testing-library/react";
import { SampleComponent } from "../SampleComponent.tsx";

test("「Hello Test」が描画されている", () => {
  render(<SampleComponent />);

  // eslint-disable-next-line
  screen.debug();

  expect(screen.getByText("Hello Test")).toBeInTheDocument();
});
