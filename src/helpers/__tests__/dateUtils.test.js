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
});
