// @flow
import * as React from 'react';
import { render } from 'enzyme';

import { CheckRecoveryLink, CheckMagicLink } from '../index';

describe('ForgottenPassword', () => {
  const props = {
    text: 'link',
    location: {
      state: {
        email: 'kiwi@email.com',
      },
    },
  };

  it('should render recovery link', () => {
    const wrapper = render(<CheckRecoveryLink {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render magic link', () => {
    const wrapper = render(<CheckMagicLink {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
