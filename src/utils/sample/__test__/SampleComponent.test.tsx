import { render, screen } from "@testing-library/react";
import { SampleComponent } from "../SampleComponent.tsx";
import { sampleText } from "../../../test/generators.ts";

test("「Hello Test」が描画されている", () => {
  render(<SampleComponent />);

  // eslint-disable-next-line
  screen.debug();

  expect(screen.getByText(sampleText)).toBeInTheDocument();
});
