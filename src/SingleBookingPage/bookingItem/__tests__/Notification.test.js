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
      'smartfaq.single_booking_page.notification.urgent_message',
    );
  });

  it('should show just info when it is not urgent', () => {
    const wrapper = render(<RawNotification isUrgent={false} hoursLeft={62} />);

    expect(wrapper.text()).toContain(
      'smartfaq.single_booking_page.notification.normal_message',
    );
  });
});
