// @flow

import * as React from 'react';
import { shallow, render } from 'enzyme';

import Contact from '../Contact';

const mockRefType: any = null;

describe('Contact', () => {
  const booking = {
    contactDetails: {
      phone: '12345678',
      email: 'kiwi@email.com',
    },
    $refType: mockRefType,
  };
  it('should render with email and phone', () => {
    expect(render(<Contact info={booking} />)).toMatchSnapshot();
  });

  it('should render only email', () => {
    const booking = {
      contactDetails: {
        phone: '',
        email: 'kiwi@email.com',
      },
      $refType: mockRefType,
    };
    expect(shallow(<Contact info={booking} />)).toMatchSnapshot();
  });
});
