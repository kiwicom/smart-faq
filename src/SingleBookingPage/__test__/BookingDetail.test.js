// @flow

import * as React from 'react';
import MockDate from 'mockdate';
import { shallow } from 'enzyme';

import { RawBookingDetail } from '../BookingDetail';
import Header from '../bookingItem/Header';

beforeEach(() => MockDate.set('06/01/2018'));

afterEach(() => MockDate.reset());

const createBookingStub = (outboundDate, inboundDate) => ({
  inbound: {
    arrival: {
      time: new Date(inboundDate),
    },
  },
  outbound: {
    arrival: {
      time: new Date(outboundDate),
    },
    departure: {
      time: new Date(outboundDate),
    },
  },
  type: 'RETURN',
});

describe('Notification', () => {
  it('is displayed before the departure', () => {
    const booking = createBookingStub('06/12/2018', '06/19/2018');
    // $FlowExpectedError: We don't need all props for tests
    const wrapper = shallow(<RawBookingDetail booking={booking} />);
    expect(wrapper.find('Notification').exists()).toBeTruthy();
  });

  it('is not displayed after the departure', () => {
    const booking = createBookingStub('05/01/2017', '05/19/2017');
    // $FlowExpectedError: We don't need all props for tests
    const wrapper = shallow(<RawBookingDetail booking={booking} />);
    expect(wrapper.find('Notification').exists()).toBeFalsy();
  });

  it('has prop isUrgent true when there is less than 48 before departure', () => {
    const booking = createBookingStub('06/02/2018', '06/19/2018');
    // $FlowExpectedError: We don't need all props for tests
    const wrapper = shallow(<RawBookingDetail booking={booking} />);
    expect(wrapper.find('Notification').props().isUrgent).toBeTruthy();
  });

  it('has prop isFuture true when there flight back in future and flight date there already passed', () => {
    const booking = createBookingStub('05/02/2018', '06/19/2018');
    // $FlowExpectedError: We don't need all props for tests
    const wrapper = shallow(<RawBookingDetail booking={booking} />);
    expect(wrapper.find(Header).props().isFuture).toBeTruthy();
  });
});
