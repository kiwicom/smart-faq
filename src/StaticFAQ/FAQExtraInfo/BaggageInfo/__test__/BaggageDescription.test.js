// @flow

import * as React from 'react';
import { shallow, render } from 'enzyme';

import { BaggageDescription } from '../BaggageDescription';

const mockRefType: any = null;
const baggage = {
  $refType: mockRefType,
  height: 40,
  width: 30,
  length: 15,
  weight: 10,
};

const baggageDescriptionComponent = (
  <BaggageDescription data={baggage} type="Checked" />
);

describe('BaggageDescription', () => {
  it('should render correctly', () => {
    expect(shallow(baggageDescriptionComponent)).toMatchSnapshot();
  });

  it('should render correct icon according to baggage type', () => {
    const component = shallow(baggageDescriptionComponent);
    expect(component.find('BaggageBig').exists()).toBeTruthy();
  });

  it('should show size of the baggage', () => {
    const wrapper = render(baggageDescriptionComponent);
    expect(wrapper.text()).toContain('40 x 30 x 15');
  });

  it('should show weight of the baggage', () => {
    const wrapper = render(baggageDescriptionComponent);
    expect(wrapper.text()).toContain('10 kg');
  });
});
