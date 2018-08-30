// @flow
import * as React from 'react';
import { shallow } from 'enzyme';

import { PureLegTypeIcon } from '../AccordionLegTypeIcon';

describe('LegTypeIcon', () => {
  it('should render aircraft icon', () => {
    const leg = {
      type: 'AIRCRAFT',
    };
    const wrapper = shallow(<PureLegTypeIcon leg={leg} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render bus icon', () => {
    const leg = {
      type: 'BUS',
    };
    const wrapper = shallow(<PureLegTypeIcon leg={leg} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render train icon', () => {
    const leg = {
      type: 'TRAIN',
    };
    const wrapper = shallow(<PureLegTypeIcon leg={leg} />);
    expect(wrapper).toMatchSnapshot();
  });
});
