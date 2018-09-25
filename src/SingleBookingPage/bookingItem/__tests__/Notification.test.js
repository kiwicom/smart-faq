// @flow

import * as React from 'react';
import { render } from 'enzyme';

import { RawNotification } from '../Notification';

describe('Notification', () => {
  it('should render', () => {
    const wrapper = render(<RawNotification isUrgent hoursLeft={25} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show warning when message is urgent', () => {
    const wrapper = render(<RawNotification isUrgent hoursLeft={25} />);

    expect(wrapper.text()).toContain(
      "Don't hesitate to call us if you have an urgent problem.",
    );
  });

  it('should show just info when it is not urgent', () => {
    const wrapper = render(<RawNotification isUrgent={false} hoursLeft={62} />);

    expect(wrapper.text()).toContain(
      'There is still time to add some nice extras or even change your booking.',
    );
  });
});
