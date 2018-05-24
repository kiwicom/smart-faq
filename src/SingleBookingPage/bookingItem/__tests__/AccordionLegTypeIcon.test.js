// @flow
import * as React from 'react';
import { shallow } from 'enzyme';

import { PureLegTypeIcon } from '../AccordionLegTypeIcon';

describe('LegTypeIcon', () => {
  const mockRefType: any = null;

  it('should render aircraft icon', () => {
    const leg = {
      type: 'AIRCRAFT',
      $refType: mockRefType,
    };
    const wrapper = shallow(<PureLegTypeIcon leg={leg} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render bus icon', () => {
    const leg = {
      type: 'BUS',
      $refType: mockRefType,
    };
    const wrapper = shallow(<PureLegTypeIcon leg={leg} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render train icon', () => {
    const leg = {
      type: 'TRAIN',
      $refType: mockRefType,
    };
    const wrapper = shallow(<PureLegTypeIcon leg={leg} />);
    expect(wrapper).toMatchSnapshot();
  });
});
