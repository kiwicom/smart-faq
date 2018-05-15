// @flow

import * as React from 'react';
import { shallow, render } from 'enzyme';

import bookingTypes from '../../../common/booking/bookingTypes';
import { FromToRow } from '../FromToRow';

const mockRefType: any = null;

const arrival = {
  airport: {
    city: {
      name: 'Barcelona',
    },
    locationId: 'BCN',
  },
  $refType: mockRefType,
};
const departure = {
  airport: {
    city: { name: 'Prague' },
    locationId: 'PRG',
  },
  $refType: mockRefType,
};

const fromToRowComponent = (
  <FromToRow
    type={bookingTypes.MULTICITY}
    arrival={arrival}
    departure={departure}
  />
);

describe('FromToRow', () => {
  it('should render correctly', () => {
    expect(shallow(fromToRowComponent)).toMatchSnapshot();
  });

  it('should render Multicity icon', () => {
    const component = shallow(fromToRowComponent);
    expect(component.find('FlightMulticity').exists()).toBeTruthy();
  });

  it('should show IATA codes', () => {
    const wrapper = render(fromToRowComponent);
    expect(wrapper.text()).toContain('PRG');
    expect(wrapper.text()).toContain('BCN');
  });

  it('should show city names', () => {
    const wrapper = render(fromToRowComponent);
    expect(wrapper.text()).toContain('Prague');
    expect(wrapper.text()).toContain('Barcelona');
  });
});
