// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import MockDate from 'mockdate';

import { UnwrappedGuaranteeNeededResolver } from '../GuaranteeNeededResolver';

const mockRefType: any = null;

beforeEach(() => MockDate.set('2018-08-29T21:00:00.000Z'));

afterEach(() => MockDate.reset());

const commonFields = {
  databaseId: 1234567,
  status: 'CONFIRMED',
  contactDetails: null,
};

describe('GuaranteeNeededResolver', () => {
  it('turn on Guarantee chat with departure in less than 4 hours', () => {
    const booking = {
      $refType: mockRefType,
      ...commonFields,
      upcomingLeg: {
        departure: {
          time: '2018-08-29T22:23:56.311Z',
          airport: null,
        },
        arrival: {
          time: '2018-08-30T06:23:56.311Z',
          airport: null,
        },
        guarantee: 'KIWICOM',
      },
    };
    const toggleGuaranteeChat = jest.fn();

    shallow(
      <UnwrappedGuaranteeNeededResolver
        booking={booking}
        showGuaranteeChat={false}
        guaranteeChatBookingInfo={null}
        toggleGuaranteeChat={toggleGuaranteeChat}
        onSetBookingInfo={jest.fn()}
      />,
    );

    expect(toggleGuaranteeChat).toBeCalledWith(true);
  });

  it('turn on Guarantee chat in time between departure and arrival', () => {
    const booking = {
      $refType: mockRefType,
      ...commonFields,
      upcomingLeg: {
        departure: {
          time: '2018-08-29T19:23:56.311Z',
          airport: null,
        },
        arrival: {
          time: '2018-08-30T06:23:56.311Z',
          airport: null,
        },
        guarantee: 'KIWICOM',
      },
    };
    const toggleGuaranteeChat = jest.fn();

    shallow(
      <UnwrappedGuaranteeNeededResolver
        booking={booking}
        showGuaranteeChat={false}
        guaranteeChatBookingInfo={null}
        toggleGuaranteeChat={toggleGuaranteeChat}
        onSetBookingInfo={jest.fn()}
      />,
    );

    expect(toggleGuaranteeChat).toBeCalledWith(true);
  });

  it('does not turn on Guarantee chat with arrival in past', () => {
    const booking = {
      $refType: mockRefType,
      ...commonFields,
      upcomingLeg: {
        departure: {
          time: '2018-08-22T22:23:56.311Z',
          airport: null,
        },
        arrival: {
          time: '2018-08-23T06:23:56.311Z',
          airport: null,
        },
        guarantee: 'KIWICOM',
      },
    };
    const toggleGuaranteeChat = jest.fn();

    shallow(
      <UnwrappedGuaranteeNeededResolver
        booking={booking}
        showGuaranteeChat={false}
        guaranteeChatBookingInfo={null}
        toggleGuaranteeChat={toggleGuaranteeChat}
        onSetBookingInfo={jest.fn()}
      />,
    );

    expect(toggleGuaranteeChat).not.toBeCalled();
  });

  it('does not turn on Guarantee with departure in more than 4 hours', () => {
    const booking = {
      $refType: mockRefType,
      ...commonFields,
      upcomingLeg: {
        departure: {
          time: '2018-08-30T22:23:56.311Z',
          airport: null,
        },
        arrival: {
          time: '2018-08-31T06:23:56.311Z',
          airport: null,
        },
        guarantee: 'KIWICOM',
      },
    };
    const toggleGuaranteeChat = jest.fn();

    shallow(
      <UnwrappedGuaranteeNeededResolver
        booking={booking}
        showGuaranteeChat={false}
        guaranteeChatBookingInfo={null}
        toggleGuaranteeChat={toggleGuaranteeChat}
        onSetBookingInfo={jest.fn()}
      />,
    );

    expect(toggleGuaranteeChat).not.toBeCalled();
  });

  it('does not turn on Guarantee chat if not covered by Guarantee', () => {
    const booking = {
      $refType: mockRefType,
      ...commonFields,
      upcomingLeg: {
        departure: {
          time: '2018-08-29T22:23:56.311Z',
          airport: null,
        },
        arrival: {
          time: '2018-08-30T06:23:56.311Z',
          airport: null,
        },
        guarantee: 'CARRIER',
      },
    };
    const toggleGuaranteeChat = jest.fn();

    shallow(
      <UnwrappedGuaranteeNeededResolver
        booking={booking}
        showGuaranteeChat={false}
        guaranteeChatBookingInfo={null}
        toggleGuaranteeChat={toggleGuaranteeChat}
        onSetBookingInfo={jest.fn()}
      />,
    );

    expect(toggleGuaranteeChat).not.toBeCalled();
  });
});
