// @flow

import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import SmartFAQ from '../App';

const user = {
  id: '1',
  email: 'joe.doe@example.com',
  firstname: 'Joe',
  lastname: 'Doe',
};

const chatConfig = {
  ORG_ID: '1234',
};

describe('SmartFAQ', () => {
  it('should work on the server', () => {
    const app = ReactDOMServer.renderToStaticMarkup(
      <SmartFAQ
        onClose={jest.fn()}
        onLogin={jest.fn()}
        onSocialLogin={jest.fn()}
        onLogout={jest.fn()}
        language="en"
        emergencies={[]}
        user={user}
        route="/"
        loginToken="AAABBBCCC"
        simpleToken={null}
        enableChat={false}
        chatConfig={chatConfig}
        onChangeIsClosable={jest.fn()}
      />,
    );
    expect(app.includes('Need help?')).toBe(true);
    expect(app).toMatchSnapshot();
  });

  it('should render faqs', () => {
    const app = ReactDOMServer.renderToStaticMarkup(
      <SmartFAQ
        onClose={jest.fn()}
        onLogin={jest.fn()}
        onSocialLogin={jest.fn()}
        onLogout={jest.fn()}
        language="en"
        emergencies={[]}
        user={user}
        route="/faq/"
        loginToken="AAABBBCCC"
        simpleToken={null}
        enableChat={false}
        chatConfig={chatConfig}
        onChangeIsClosable={jest.fn()}
      />,
    );
    expect(app.includes('Help')).toBe(true);
    expect(app).toMatchSnapshot();
  });
});
