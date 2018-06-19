// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import { EnterTracker } from '../trackers';

jest.mock('../cuckoo');

const BaseComp = () => <div />;
const event = 'smartFAQ';
const payload = { greeting: 'hola' };
const cuckoo = {
  infinario: jest.fn(),
};
window.cuckoo = cuckoo;
describe('EnterTracker', () => {
  const Tracked = EnterTracker(BaseComp, event, () => payload);
  it('logs upon mounting', () => {
    shallow(<Tracked />);
    expect(cuckoo.infinario.mock.calls).toHaveLength(1);
    expect(cuckoo.infinario.mock.calls[0][1]).toEqual(payload);
  });
});
