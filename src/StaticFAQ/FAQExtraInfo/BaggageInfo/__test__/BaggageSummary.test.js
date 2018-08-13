// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import { RawBaggageSummary } from '../BaggageSummary';

const mockRefType: any = null;

describe('BaggageSummary', () => {
  it('loading screen renders correctly', () => {
    expect(
      shallow(<RawBaggageSummary data={null} mmbUrl="https://example.com" />),
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
