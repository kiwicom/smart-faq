// @flow

import * as React from 'react';
import { mount } from 'enzyme';

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

    const wrapper = mount(
      <WithRouter>
        <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      </WithRouter>,
    );
    const breadcrumbsElements = wrapper.find('.breadcrumb');

    expect(breadcrumbsElements).toHaveLength(2);
    expect(breadcrumbsElements.first().text()).toBe('Home');
    expect(breadcrumbsElements.last().text()).toBe('Article');
  });
});
