// @flow

import * as React from 'react';
import { render } from 'enzyme';

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
      const wrapper = render(
        <dateUtils.FormatDate dateString="2018-05-04T15:02:02.511Z" />,
      );

      expect(wrapper.text()).toContain('Fri, May 4');
    });
  });

  describe('formatTimeDuration', () => {
    it('should format duration', () => {
      expect(dateUtils.formatTimeDuration(90)).toBe('1h 30min');
      expect(dateUtils.formatTimeDuration(32)).toBe('32min');
      expect(dateUtils.formatTimeDuration(191)).toBe('3h 11min');
    });
  });
  describe('formatHour', () => {
    it('should format duration', () => {
      const myDate = '2018-05-14T15:31:27.464Z';
      expect(dateUtils.formatHour(myDate)).toBe('3:31 PM');
    });
  });
});
