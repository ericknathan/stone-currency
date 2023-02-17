import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import 'jest-styled-components';

import { render } from '@test/utils';
import { Button } from '.';

describe("Button Component", () => {
    const childrenText = "Testing";

    it("should render a button with correct children", () => {
        render(<Button>{childrenText}</Button>);

        expect(screen.getByText(childrenText)).toBeDefined()
    });
})