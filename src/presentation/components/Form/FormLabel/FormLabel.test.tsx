import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import 'jest-styled-components';

import { render } from '@test/utils';
import { FormLabel } from '.';

describe("FormLabel Component", () => {
  const labelText = "Label example";

  it("should render a form label with correct text", () => {
    render(<FormLabel>{labelText}</FormLabel>);

    expect(screen.getByText(labelText)).toBeDefined()
  });
})