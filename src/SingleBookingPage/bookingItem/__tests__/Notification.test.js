// @flow

import * as React from 'react';
import { shallow, render } from 'enzyme';

import Notification from '../Notification';

describe('Notification', () => {
  it('should render', () => {
    expect(shallow(<Notification isUrgent hoursLeft={25} />)).toMatchSnapshot();
  });

  it('should show warning when message is urgent', () => {
    const wrapper = render(<Notification isUrgent hoursLeft={25} />);

    expect(wrapper.text()).toContain(
      "Don't hesitate to call us if you have an urgent problem.",
    );
  });

  it('should show just info when it is not urgent', () => {
    const wrapper = render(<Notification isUrgent={false} hoursLeft={62} />);

    expect(wrapper.text()).toContain(
      'There is still time to add some nice extras or even change your booking.',
    );
  });
});
