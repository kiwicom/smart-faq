// @flow

import * as React from 'react';
import { render } from 'enzyme';
import ThemeProvider from '@kiwicom/orbit-components/lib/Theming/ThemeProvider';

import { RawNotification } from '../Notification';

describe('Notification', () => {
  it('should render', () => {
    const wrapper = render(
      <ThemeProvider>
        <RawNotification isUrgent hoursLeft={25} t={() => 'h'} />
      </ThemeProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should show warning when message is urgent', () => {
    const wrapper = render(
      <ThemeProvider>
        <RawNotification isUrgent hoursLeft={25} t={key => key} />
      </ThemeProvider>,
    );

    expect(wrapper.text()).toContain(
      "Don't hesitate to call us if you have an urgent problem.",
    );
  });

  it('should show just info when it is not urgent', () => {
    const wrapper = render(
      <ThemeProvider>
        <RawNotification isUrgent={false} hoursLeft={62} t={key => key} />
      </ThemeProvider>,
    );

    expect(wrapper.text()).toContain(
      'There is still time to add some nice extras or even change your booking.',
    );
  });
});
