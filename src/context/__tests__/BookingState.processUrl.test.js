// @flow
/* global jsdom */

import { processUrl } from '../BookingState';

describe('BookingState', () => {
  it('should parse the url with /account/bookings/ and return it as selected', () => {
    //$FlowExpectedError: jsdom variable exists!
    jsdom.reconfigure({
      url: 'https://www.kiwi.com/en/account/bookings/6372221?help=%2F',
    });

    expect(processUrl(null)).toEqual({ selectedBooking: 6372221 });
  });

  it('should parse the url with /manage/ and return it as selected', () => {
    //$FlowExpectedError: jsdom variable exists!
    jsdom.reconfigure({
      url: 'https://www.kiwi.com/en/manage/6372221?help=%2F',
    });

    expect(processUrl(null)).toEqual({ selectedBooking: 6372221 });
  });

  it('should not call selectedBooking because url is not valid', () => {
    //$FlowExpectedError: jsdom variable exists!
    jsdom.reconfigure({
      url: 'https://www.airplane.com/bookings/6372221?help=%2F',
    });

    expect(processUrl(null)).toBe(null);
  });

  it('should not return selectedBooking if one was already selected', () => {
    //$FlowExpectedError: jsdom variable exists!
    jsdom.reconfigure({
      url: 'https://www.kiwi.com/en/manage/6372221?help=%2F',
    });

    expect(processUrl(6372221)).toBe(null);
  });
});
