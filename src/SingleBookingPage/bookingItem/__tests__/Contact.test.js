// @flow

import * as React from 'react';
import { shallow, render } from 'enzyme';

import Contact from '../Contact';

describe('Contact', () => {
  it('should render with email and phone', () => {
    const contactDetails = {
      phone: '12345678',
      email: 'kiwi@email.com',
    };
    expect(
      render(<Contact contactDetails={contactDetails} />),
    ).toMatchSnapshot();
  });

  it('should render only email', () => {
    const contactDetails = {
      phone: '',
      email: 'kiwi@email.com',
    };
    expect(
      shallow(<Contact contactDetails={contactDetails} />),
    ).toMatchSnapshot();
  });
  it('should not render email and phone', () => {
    const contactDetails = {
      email: '',
      phone: '',
    };
    expect(
      shallow(<Contact contactDetails={contactDetails} />),
    ).toMatchSnapshot();
  });
});
