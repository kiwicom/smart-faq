// @flow
import * as React from 'react';
import { mount } from 'enzyme';

import FullFAQLink from '../FullFAQLink';

describe('FullFAQLink', () => {
  it('should match snapshot', () => {
    const result = mount(<FullFAQLink />);
    expect(result).toMatchSnapshot();
  });
});
