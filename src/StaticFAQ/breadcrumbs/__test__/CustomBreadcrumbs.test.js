// @flow

import * as React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from '@kiwicom/orbit-components/lib/Theming/ThemeProvider';

import WithRouter from '../../../common/__tests__/helpers/ComponentWithRouter.ignore';
import CustomBreadcrumbs from '../CustomBreadcrumbs';

describe('CustomBreadcrumbs', () => {
  it('should render breadcrumbs normally', () => {
    const breadcrumbs = [
      { title: 'Home' },
      { id: '1', title: 'Planning' },
      { title: 'Baggage', id: '2' },
      { title: 'Article' },
    ];
    global.innerWidth = 601;
    const wrapper = mount(
      <WithRouter>
        <ThemeProvider>
          <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
        </ThemeProvider>
      </WithRouter>,
    );
    const breadcbumbsElements = wrapper.find('.breadcrumb');
    // 6 because there are 2 for mobile 2 for desktop
    expect(breadcbumbsElements).toHaveLength(2);
    expect(breadcbumbsElements.first().text()).toBe('Home');
    expect(breadcbumbsElements.last().text()).toBe('Article');
  });
  // make it work with react-responsive
  xit('should render shorter breadcrumbs', () => {
    const breadcrumbs = [
      { title: 'Home' },
      { id: '1', title: 'What is cabin baggage and how much can I bring?' },
      { title: 'Planning', id: '2' },
      { title: 'Article' },
    ];
    global.innerWidth = 599;
    const wrapper = mount(
      <WithRouter>
        <ThemeProvider>
          <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
        </ThemeProvider>
      </WithRouter>,
    );
    const breadcbumbsElements = wrapper.find('.breadcrumb');
    expect(breadcbumbsElements).toHaveLength(6);
    expect(breadcbumbsElements.at(0).text()).toBe('Home');
    expect(breadcbumbsElements.at(1).text()).toBe('...');
    expect(breadcbumbsElements.at(2).text()).toBe('Planning');
    // desktop version
    expect(breadcbumbsElements.at(3).text()).toBe(
      'What is cabin baggage and how much can I bring?',
    );
    expect(breadcbumbsElements.at(4).text()).toBe('Planning');
    expect(breadcbumbsElements.last().text()).toBe('Article');
  });
});
