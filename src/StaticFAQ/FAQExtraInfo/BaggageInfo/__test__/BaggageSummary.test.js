// @flow

import * as React from 'react';
import { render, shallow } from 'enzyme';

import { RawBaggageSummary } from '../BaggageSummary';

const mockRefType: any = null;

describe('BaggageSummary', () => {
  it('loading screen renders correctly', () => {
    expect(
      render(<RawBaggageSummary data={null} mmbUrl="https://example.com" />),
    ).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const data = [
      {
        $refType: mockRefType,
        $fragmentRefs: mockRefType,
      },
      {
        $refType: mockRefType,
        $fragmentRefs: mockRefType,
      },
    ];

    expect(
      shallow(<RawBaggageSummary data={data} mmbUrl="https://example.com" />),
    ).toMatchSnapshot();
  });
});
