// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import ScreenAdditionalFeedback from '../ScreenAdditionalFeedback';

const ch = (sc: string) => {}; //eslint-disable-line

describe('ScreenAdditionalFeedback', () => {
  const component = shallow(
    <ScreenAdditionalFeedback
      changeScreen={ch}
      articleId="WE4rT"
      commentType="OTHER"
      clearCommentType={() => {}}
    />,
  );

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
