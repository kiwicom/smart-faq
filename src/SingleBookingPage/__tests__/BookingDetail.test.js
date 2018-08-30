// @flow
import * as React from 'react';
import MockDate from 'mockdate';
import { shallow } from 'enzyme';

import { RawBookingDetail } from '../BookingDetail';
import Header from '../bookingItem/Header';
import Notification from '../bookingItem/Notification';
import Contact from '../bookingItem/Contact';

beforeEach(() => MockDate.set('06/01/2018'));

afterEach(() => MockDate.reset());

const airport = {
  name: '',
  locationId: '',
  city: {
    name: '',
  },
};

const createBookingStub = (outboundDate, inboundDate) => ({
  inbound: {
    arrival: {
      time: inboundDate && new Date(inboundDate),
      localTime: '',
      airport,
    },
    departure: {
      time: null,
      localTime: '',
      airport,
    },
    legs: [],
  },
  outbound: {
    arrival: {
      time: outboundDate && new Date(outboundDate),
      localTime: '',
      airport,
    },
    departure: {
      time: outboundDate && new Date(outboundDate),
      localTime: '',
      airport,
    },
    legs: [],
  },
  trip: {
    departure: {
      localTime: '',
      time: new Date(),
      airport: {
        locationId: '',
        city: {
          name: '',
        },
      },
    },
    arrival: {
      time: new Date(),
      localTime: '',
      airport: {
        locationId: '',
        city: {
          name: '',
        },
      },
    },
    legs: [],
  },
  trips: [],
  isPastBooking: !!(inboundDate && new Date() > new Date(inboundDate)),
  directAccessURL: 'https://example.com/asd',
  databaseId: 324324,
  type: 'RETURN',
  status: 'CONFIRMED',
});
const defaults = {
  history: {
    push: jest.fn(),
  },
};

describe('BookingDetail >', () => {
  let booking48HoursAgo = createBookingStub(undefined, undefined);
  let bookingBetweenDepartureAndArrival = createBookingStub(
    undefined,
    undefined,
  );

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

    it('has prop isFuture true when inbound flight is in future and outbound flight date already passed', () => {
      const wrapper = shallow(
        <RawBookingDetail
          {...defaults}
          booking={bookingBetweenDepartureAndArrival}
        />,
      );
      expect(wrapper.find(Header).props().isFuture).toBeTruthy();
    });
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
