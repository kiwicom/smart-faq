// @flow

import * as React from "react";
import { shallow } from "enzyme";

import SignIn from "../";

const history = {
  push: () => {},
};
describe("SignIn", () => {
  const component = shallow(
    <SignIn history={history} onSocialLogin={platform => new Promise(
      () => null
    )} />);
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
