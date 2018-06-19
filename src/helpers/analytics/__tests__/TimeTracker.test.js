// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import { TimeTracker } from '../trackers';

jest.mock('../cuckoo');

const BaseComp = () => <div />;
const event = 'smartFAQ';
const payload = { greeting: 'hola' };
const cuckoo = {
  infinario: jest.fn(),
};
window.cuckoo = cuckoo;
describe('TimeTracker', () => {
  const Tracked = TimeTracker(BaseComp, event, () => payload);
  it('logs upon mounting and unmounting', () => {
    const wrapper = shallow(<Tracked />);
    const initStamp = wrapper.state().openTimestamp;
    expect(initStamp).toBeGreaterThan(0);
    wrapper.unmount();
    expect(cuckoo.infinario.mock.calls[0][1].timeOpen).toBeGreaterThan(0);
  });
});
