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
  it(`turn on Guarantee chat when it's not supported for booking`, () => {
    const booking = {
      $refType: mockRefType,
      ...commonFields,
      upcomingLeg: {
        departure: {
          airport: null,
        },
        arrival: {
          airport: null,
        },
      },
      customerSupport: {
        hasGuaranteeChat: true,
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

  it(`does not turn on Guarantee when it's not supported for booking`, () => {
    const booking = {
      $refType: mockRefType,
      ...commonFields,
      upcomingLeg: {
        departure: {
          airport: null,
        },
        arrival: {
          airport: null,
        },
      },
      customerSupport: {
        hasGuaranteeChat: false,
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
