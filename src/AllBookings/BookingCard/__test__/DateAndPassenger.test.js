// @flow

import * as React from 'react';
import { shallow, render } from 'enzyme';

import { DateAndPassenger } from '../DateAndPassenger';
import { formatDepartureDate } from '../../../helpers/dateUtils';

const mockRefType: any = null;

const departure = {
  time: '2017-11-23T20:40:00.000Z',
  $refType: mockRefType,
};

const booking = {
  status: 'CLOSED',
  passengerCount: 1,
  bookingDate: '2018-05-14',
  $refType: mockRefType,
};

const dateAndPassengerComponent = (
  <DateAndPassenger departure={departure} booking={booking} />
);

describe('DateAndPassenger', () => {
  it('should render correctly', () => {
    expect(shallow(dateAndPassengerComponent)).toMatchSnapshot();
  });

  it('should render Passengers icon', () => {
    const component = shallow(dateAndPassengerComponent);
    expect(component.find('Passengers').exists()).toBeTruthy();
  });

  it('should show correct date format', () => {
    const wrapper = render(dateAndPassengerComponent);
    const time = departure.time;
    const formatedDate = formatDepartureDate(time);
    expect(wrapper.text()).toContain(formatedDate);
  });
});
