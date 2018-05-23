// @flow
import * as React from 'react';
import { shallow } from 'enzyme';

import LegTypeIcon from '../AccordionLegTypeIcon';

describe('LegTypeIcon', () => {
  it('should render aircraft icon', () => {
    const wrapper = shallow(<LegTypeIcon type="AIRCRAFT" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render bus icon', () => {
    const wrapper = shallow(<LegTypeIcon type="BUS" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render train icon', () => {
    const wrapper = shallow(<LegTypeIcon type="TRAIN" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should not render icon', () => {
    const wrapper = shallow(<LegTypeIcon type="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
