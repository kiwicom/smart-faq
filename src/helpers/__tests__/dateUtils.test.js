// @flow

import * as dateUtils from '../dateUtils';

describe('date utils', () => {
  describe('formatCountDown', () => {
    it('should return number of remaining days if hoursLeft > 24', () => {
      expect(dateUtils.formatCountDown(100.423)).toBe('4 days');
    });

    it('should return remaining time in minutes', () => {
      expect(dateUtils.formatCountDown(20.423)).toBe('20h 25min');
    });

    it('should return remaining time in hours', () => {
      expect(dateUtils.formatCountDown(20.001)).toBe('20h');
    });
  });

  describe('formatDate', () => {
    it('should format datestring', () => {
      expect(dateUtils.formatDate('2018-05-04T15:02:02.511Z')).toBe(
        'Fri, May 4',
      );
    });
  });
});
