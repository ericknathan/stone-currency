import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import 'jest-styled-components';

import { render } from '@test/utils';
import { RadioGroup } from '.';

describe("RadioGroup Component", () => {
  const groupLabel = "Radio Group Label";
  const options = [
    {
      label: "Option 1",
      value: "option-1"
    },
    {
      label: "Option 2",
      value: "option-2"
    }
  ];

  it("should render a radio group with correct options", () => {
    render(<RadioGroup options={options} />);

    options.forEach(option => {
      expect(screen.getByLabelText(option.label)).toBeDefined();
    });
  });

  it('should render radio group label', () => {
    render(<RadioGroup label={groupLabel} options={options} />);

    expect(screen.getByLabelText(groupLabel)).toBeDefined();
  });

  it('should render radio group with vertical orientation', () => {
    render(
      <RadioGroup
        label={groupLabel}
        options={options}
        orientation="vertical"
      />
    );

    expect(screen.getByLabelText(groupLabel)).toHaveStyleRule('flex-direction', 'column');
  });

  it('should render radio group with horizontal orientation by default', () => {
    render(
      <RadioGroup
        label={groupLabel}
        options={options}
      />
    );

    expect(screen.getByLabelText(groupLabel)).not.toHaveStyleRule('flex-direction', 'column');
  });

  it('should render radio group with only first option as default checked value', () => {
    render(
      <RadioGroup
        label={groupLabel}
        options={options}
      />
    );

    expect(screen.getByLabelText(options[0].label).getAttribute('data-state')).toEqual('checked');
    expect(screen.getByLabelText(options[1].label).getAttribute('data-state')).toEqual('unchecked');
  });
})