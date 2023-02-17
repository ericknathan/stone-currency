import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import 'jest-styled-components';

import { render } from '@test/utils';
import { TextField } from '.';

describe("TextField Component", () => {
  const label = "Text Field Label";
  const placeholder = "Text Field Placeholder";
  const error = "Text Field Error";

  it("should render a text field with correct label", async () => {
    render(<TextField label={label} name="example" />);

    expect(screen.getByLabelText(label)).toBeDefined();
  });

  it("should render a text field with correct placeholder", async () => {
    render(<TextField placeholder={placeholder} name="example" />);

    expect(screen.getByPlaceholderText(placeholder)).toBeDefined();
  });

  it("should render a text field with correct error", async () => {
    render(<TextField error={error} name="example" />);

    expect(screen.getByText(error)).toBeDefined();
  });

  it("should render a text field with correct left content", async () => {
    const leftContent = <div data-testid="left-content">Left Content</div>;

    render(<TextField leftContent={leftContent} name="example" />);

    expect(screen.getByTestId("left-content")).toBeDefined();
  });
})