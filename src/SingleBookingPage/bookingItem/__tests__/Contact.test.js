// @flow

import * as React from 'react';
import { shallow, render } from 'enzyme';

import { RawContact } from '../Contact';

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
    expect(render(<RawContact info={booking} />)).toMatchSnapshot();
  });

  it('should render only email', () => {
    const booking = {
      contactDetails: {
        phone: '',
        email: 'kiwi@email.com',
      },
      $refType: mockRefType,
    };
    expect(shallow(<RawContact info={booking} />)).toMatchSnapshot();
  });
  it('should not render email and phone', () => {
    const booking = {
      contactDetails: {
        phone: '',
        email: '',
      },
      $refType: mockRefType,
    };
    expect(shallow(<RawContact info={booking} />)).toMatchSnapshot();
  });
});
