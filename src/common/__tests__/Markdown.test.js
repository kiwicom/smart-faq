// @flow
import * as React from 'react';
import { mount } from 'enzyme';

import Markdown from '../Markdown';

describe('Markdown', () => {
  it('should match snapshot', () => {
    const result = mount(
      <Markdown>
        # Hello World [this is my url](https://www.kiwi.com/) [this is my second
        url](https://www.kiwi.com/) [and this is third
        url](https://www.kiwi.com/)
      </Markdown>,
    );
    expect(result).toMatchSnapshot();
  });
});
