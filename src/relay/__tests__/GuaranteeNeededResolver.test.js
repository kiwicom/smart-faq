// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import MockDate from 'mockdate';

import { UnwrappedGuaranteeNeededResolver } from '../GuaranteeNeededResolver';

const mockRefType: any = null;

beforeEach(() => MockDate.set('08/29/2018 21:00:00'));

afterEach(() => MockDate.reset());

describe('GuaranteeNeededResolver', () => {
  it('turn on Guarantee chat with departure in less than 4 hours', () => {
    const upcomingLeg = {
      $refType: mockRefType,
      departure: {
        time: '2018-08-29T22:23:56.311Z',
      },
      arrival: {
        time: '2018-08-30T06:23:56.311Z',
      },
      guarantee: 'KIWICOM',
    };
    const toggleGuaranteeChat = jest.fn();

    shallow(
      <UnwrappedGuaranteeNeededResolver
        upcomingLeg={upcomingLeg}
        showGuaranteeChat={false}
        toggleGuaranteeChat={toggleGuaranteeChat}
      />,
    );

    expect(toggleGuaranteeChat).toBeCalledWith(true);
  });

  it('turn on Guarantee chat in time between departure and arrival', () => {
    const upcomingLeg = {
      $refType: mockRefType,
      departure: {
        time: '2018-08-29T19:23:56.311Z',
      },
      arrival: {
        time: '2018-08-30T06:23:56.311Z',
      },
      guarantee: 'KIWICOM',
    };
    const toggleGuaranteeChat = jest.fn();

    shallow(
      <UnwrappedGuaranteeNeededResolver
        upcomingLeg={upcomingLeg}
        showGuaranteeChat={false}
        toggleGuaranteeChat={toggleGuaranteeChat}
      />,
    );

    expect(toggleGuaranteeChat).toBeCalledWith(true);
  });

  it('does not turn on Guarantee chat with arrival in past', () => {
    const upcomingLeg = {
      $refType: mockRefType,
      departure: {
        time: '2018-08-22T22:23:56.311Z',
      },
      arrival: {
        time: '2018-08-23T06:23:56.311Z',
      },
      guarantee: 'KIWICOM',
    };
    const toggleGuaranteeChat = jest.fn();

    shallow(
      <UnwrappedGuaranteeNeededResolver
        upcomingLeg={upcomingLeg}
        showGuaranteeChat={false}
        toggleGuaranteeChat={toggleGuaranteeChat}
      />,
    );

    expect(toggleGuaranteeChat).not.toBeCalled();
  });

  it('does not turn on Guarantee with departure in more than 4 hours', () => {
    const upcomingLeg = {
      $refType: mockRefType,
      departure: {
        time: '2018-08-30T22:23:56.311Z',
      },
      arrival: {
        time: '2018-08-31T06:23:56.311Z',
      },
      guarantee: 'KIWICOM',
    };
    const toggleGuaranteeChat = jest.fn();

    shallow(
      <UnwrappedGuaranteeNeededResolver
        upcomingLeg={upcomingLeg}
        showGuaranteeChat={false}
        toggleGuaranteeChat={toggleGuaranteeChat}
      />,
    );

    expect(toggleGuaranteeChat).not.toBeCalled();
  });

  it('does not turn on Guarantee chat if not covered by Guarantee', () => {
    const upcomingLeg = {
      $refType: mockRefType,
      departure: {
        time: '2018-08-29T22:23:56.311Z',
      },
      arrival: {
        time: '2018-08-30T06:23:56.311Z',
      },
      guarantee: 'CARRIER',
    };
    const toggleGuaranteeChat = jest.fn();

    shallow(
      <UnwrappedGuaranteeNeededResolver
        upcomingLeg={upcomingLeg}
        showGuaranteeChat={false}
        toggleGuaranteeChat={toggleGuaranteeChat}
      />,
    );

    expect(toggleGuaranteeChat).not.toBeCalled();
  });
});
