import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import 'jest-styled-components';

import { render } from '@test/utils';
import { TextField } from '.';

describe("TextField Component", () => {
  const label = "Text Field Label";

  it("should render a text field with correct label", async () => {
    render(<TextField label={label} name="example" />);

    expect(screen.getByLabelText(label)).toBeDefined();
  });
})