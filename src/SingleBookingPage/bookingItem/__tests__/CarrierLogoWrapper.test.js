// @flow

import * as React from 'react';
import { shallow, render } from 'enzyme';

import { RawCarrierLogoWrapper } from '../CarrierLogoWrapper';

const mockRefType: any = null;
const legs = [
  {
    airline: {
      code: 'PC',
      name: 'Pegasus',
    },
    $refType: mockRefType,
  },
  {
    airline: {
      code: 'FR',
      name: 'Ryanair',
    },
    $refType: mockRefType,
  },
  {
    airline: null,
    $refType: mockRefType,
  },
];

describe('CarrierLogoWrapper', () => {
  it('should render', () => {
    expect(shallow(<RawCarrierLogoWrapper legs={legs} />)).toMatchSnapshot();
  });

  it('should render logo with two carriers', () => {
    const wrapper = render(<RawCarrierLogoWrapper legs={legs} />);

    expect(wrapper.find('img')).toHaveLength(2);
  });
});
