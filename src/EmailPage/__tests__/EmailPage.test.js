// @flow
import * as React from 'react';
import { render } from 'enzyme';
import ThemeProvider from '@kiwicom/orbit-components/lib/Theming/ThemeProvider';

import { CheckRecoveryLink, CheckMagicLink } from '../index';

describe('EmailPage', () => {
  const props = {
    text: 'link',
    location: {
      state: {
        email: 'kiwi@email.com',
      },
    },
  };

  it('should render recovery link', () => {
    const wrapper = render(
      <ThemeProvider>
        <CheckRecoveryLink {...props} />
      </ThemeProvider>,
    );
    expect(wrapper.find('.text > span').text()).toEqual(
      'We sent a recovery link to kiwi@email.com.',
    );
  });
  it('should render magic link', () => {
    const wrapper = render(
      <ThemeProvider>
        <CheckMagicLink {...props} />
      </ThemeProvider>,
    );
    expect(wrapper.find('.text > span').text()).toEqual(
      'To sign in, just click the link in the email we sent to kiwi@email.com.',
    );
  });
});
