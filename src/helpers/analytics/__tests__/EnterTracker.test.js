// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import { EnterTracker } from '../trackers';

jest.mock('../cuckoo');

const BaseComp = () => <div />;
const event = 'smartFAQ';
const payload = { greeting: 'hola' };
const infinario = {
  track: jest.fn(),
};
window.infinario = infinario;
describe('EnterTracker', () => {
  const Tracked = EnterTracker(BaseComp, event, () => payload);
  it('logs upon mounting', () => {
    shallow(<Tracked />);
    expect(infinario.track.mock.calls).toHaveLength(1);
    expect(infinario.track.mock.calls[0][1]).toEqual(payload);
  });
});
