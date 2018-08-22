// @flow

import * as React from 'react';
import MockDate from 'mockdate';
import { shallow } from 'enzyme';

import { RawBookingDetail } from '../BookingDetail';
import Notification from '../bookingItem/Notification';
import Contact from '../bookingItem/Contact';

beforeEach(() => MockDate.set('06/01/2018 00:00:00'));

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
  isPastBooking: new Date() > new Date(inboundDate),
  directAccessURL: 'https://example.com/asd',
  type: 'RETURN',
  status: 'CONFIRMED',
});
const defaults = {
  onSetFAQSection: jest.fn(),
  history: {
    push: jest.fn(),
  },
};

describe('BookingDetail >', () => {
  let booking48HoursAgo = null;
  let bookingBetweenDepartureAndArrival = null;

  beforeEach(() => {
    booking48HoursAgo = createBookingStub('06/02/2018', '06/19/2018');
    bookingBetweenDepartureAndArrival = createBookingStub(
      '05/02/2018',
      '06/19/2018',
    );
  });

  describe('Notification', () => {
    it('is displayed before the departure', () => {
      const booking = createBookingStub('06/12/2018', '06/19/2018');
      const wrapper = shallow(
        <RawBookingDetail {...defaults} booking={booking} />,
      );
      expect(wrapper.find(Notification).exists()).toBeTruthy();
    });

    it('is not displayed after the departure', () => {
      const booking = createBookingStub('05/01/2017', '05/19/2017');
      const wrapper = shallow(
        <RawBookingDetail {...defaults} booking={booking} />,
      );
      expect(wrapper.find(Notification).exists()).toBeFalsy();
    });

    it('has prop isUrgent true when there is less than 48 before departure', () => {
      const wrapper = shallow(
        <RawBookingDetail {...defaults} booking={booking48HoursAgo} />,
      );
      expect(wrapper.find(Notification).props().isUrgent).toBeTruthy();
    });

    [
      'REFUNDED',
      'PENDING',
      'CANCELLED',
      'DELETED',
      'CLOSED',
      'EXPIRED',
    ].forEach(status =>
      it(`is not displayed for booking with ${status} status`, () => {
        const refundedBooking = { ...booking48HoursAgo, status };
        const wrapper = shallow(
          <RawBookingDetail {...defaults} booking={refundedBooking} />,
        );
        expect(wrapper.find(Notification).exists()).toBeFalsy();
      }),
    );
  });

  it('has prop isFuture true when inbound flight is in future and outbound flight date already passed', () => {
    const wrapper = shallow(
      <RawBookingDetail
        {...defaults}
        booking={bookingBetweenDepartureAndArrival}
      />,
    );
    expect(wrapper.find('.upcoming').exists()).toBeTruthy();
  });

  describe('Contact', () => {
    it('is displayed when there is less than 48 before departure', () => {
      const wrapper = shallow(
        <RawBookingDetail {...defaults} booking={booking48HoursAgo} />,
      );
      expect(wrapper.find(Contact).exists()).toBeTruthy();
    });

    it('displayed when inbound flight is in future and outbound flight date already passed', () => {
      const wrapper = shallow(
        <RawBookingDetail
          {...defaults}
          booking={bookingBetweenDepartureAndArrival}
        />,
      );
      expect(wrapper.find(Contact).exists()).toBeTruthy();
    });
  });
});
