// @flow
import formatBookingId from '../formatBookingId';

describe('formatBookingId', () => {
  it('should check the formating #1', () => {
    expect(formatBookingId(16)).toBe('16');
  });
  it('should check the formating #2', () => {
    expect(formatBookingId(167)).toBe('167');
  });
  it('should check the formating #3', () => {
    expect(formatBookingId(16702)).toBe('16 702');
  });
  it('should check the formating #4', () => {
    expect(formatBookingId(6702575)).toBe('6 702 575');
  });
  it('should check the formating #5', () => {
    expect(formatBookingId(16702575)).toBe('16 702 575');
  });
});
