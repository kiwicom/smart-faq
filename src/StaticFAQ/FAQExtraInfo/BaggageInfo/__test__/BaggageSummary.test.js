// @flow

import * as React from 'react';
import { render } from 'enzyme';

import { RawBaggageSummary } from '../BaggageSummary';

describe('BaggageSummary', () => {
  it('loading screen renders correctly', () => {
    expect(
      render(<RawBaggageSummary data={null} mmbUrl="https://example.com" />),
    ).toMatchSnapshot();
  });
});
