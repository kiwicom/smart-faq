// @flow

import * as React from 'react';
import { render } from 'enzyme';

import { LanguageContext } from '../../context/Language';
import * as dateUtils from '../dateUtils';

describe('date utils', () => {
  describe('formatCountDown', () => {
    it('should return number of remaining days if hoursLeft > 24', () => {
      expect(dateUtils.formatCountDown(100.423, () => 'days')).toBe('4 days');
    });

    // two translations can't be hardcoded
    it('should return remaining time in minutes', () => {
      expect(dateUtils.formatCountDown(20.423, t => t)).toBe(
        '20TimeUnits.Abbr.Hours 25TimeUnits.Abbr.Minutes',
      );
    });

    it('should return remaining time in hours', () => {
      expect(dateUtils.formatCountDown(20.001, () => 'h')).toBe('20h');
    });
  });

  describe('formatDate', () => {
    it('should format datestring', () => {
      const wrapper = render(
        <LanguageContext.Provider value="us">
          <dateUtils.FormatDate dateString="2018-05-04T15:02:02.511Z" />
        </LanguageContext.Provider>,
      );

      expect(wrapper.text()).toContain('Fri, May 4');
    });
  });

  describe('formatDepartureDate', () => {
    it('should format UTC string to DD/MM/YYYY', () => {
      const departureDate = '2017-11-23T20:40:00.000Z';
      expect(dateUtils.formatDepartureDate(departureDate)).toBe('23/11/2017');
    });
  });

  describe('formatTimeDuration', () => {
    it('should format duration', () => {
      expect(dateUtils.formatTimeDuration(90)).toBe('1h 30m');
      expect(dateUtils.formatTimeDuration(32)).toBe('32m');
      expect(dateUtils.formatTimeDuration(191)).toBe('3h 11m');
    });
  });
  describe('formatHour', () => {
    it('should format duration', () => {
      const myDate = '2018-05-14T15:31:27.464Z';
      expect(dateUtils.formatHour(myDate)).toBe('3:31 PM');
    });
  });
});
