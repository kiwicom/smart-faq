// @flow
import * as React from 'react';
import renderer from 'react-test-renderer';

import FullFAQLink from '../FullFAQLink';

describe('FullFAQLink', () => {
  it('should match snapshot', () => {
    const result = renderer.create(<FullFAQLink />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
