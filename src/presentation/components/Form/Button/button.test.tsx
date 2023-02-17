import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import 'jest-styled-components';

import { render, theme } from '@test/utils';
import { Button } from '.';

describe("Button Component", () => {
  const childrenText = "Testing";

  it("should render a button with correct children", () => {
    render(<Button>{childrenText}</Button>);

    expect(screen.getByText(childrenText)).toBeDefined()
  });
  
  it('should render button with disabled styles if it is disabled', () => {
    render(<Button disabled>{childrenText}</Button>);

    const options = {
      modifier: ':disabled'
    }

    expect(screen.getByRole('button')).toHaveStyleRule('background-color', theme.colors['accent-200'], options);
    expect(screen.getByRole('button')).toHaveStyleRule('cursor', 'not-allowed', options);
  });

  it('should render a button with primary styles by default', () => {
    render(<Button>{childrenText}</Button>);

    expect(screen.getByRole('button')).toHaveStyleRule('background-color', theme.colors['primary-500']);
  });

  it('should render a button with secondary styles', () => {
    render(<Button variant="secondary">{childrenText}</Button>);

    expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'transparent');
  });
})