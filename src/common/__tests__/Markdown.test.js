// @flow
import * as React from 'react';
import { mount } from 'enzyme';

import Markdown from '../Markdown';

describe('Markdown', () => {
  it('should match snapshot', () => {
    const result = mount(<Markdown># Hello World</Markdown>);
    expect(result).toMatchSnapshot();
  });
});
