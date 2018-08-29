// @flow
import { getFAQSection } from '../BookingState';

describe('getFAQSection', () => {
  const tests = [
    {
      input: { hasBooking: false },
      output: 'BEFORE_BOOKING',
    },
    {
      input: { hasBooking: true, isPastBooking: true },
      output: 'PAST_BOOKING',
    },
    {
      input: { hasBooking: true, isUrgent: true },
      output: 'URGENT_BOOKING',
    },
    {
      input: { hasBooking: true, isUrgent: false, isPastBooking: false },
      output: 'UPCOMING_BOOKING',
    },
  ];

  tests.forEach(({ input, output }) => {
    it(output, () => {
      expect(getFAQSection(input)).toEqual(output);
    });
  });
});
