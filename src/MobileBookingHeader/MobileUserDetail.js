// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Text } from '@kiwicom/orbit-components';

import { UserContext } from '../context/User';
import type { UserContextType } from '../context/User';
import SignOutButton from '../common/layout/SignOutButton';

const MobileUserDetailStyle = css`
  .MobileUserDetail {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
`;

const MobileUserDetail = () => (
  <React.Fragment>
    <UserContext.Consumer>
      {({ user }: UserContextType) => {
        return (
          <div className="MobileUserDetail">
            <Text type="secondary">{user && user.firstname}</Text>
            <SignOutButton />
            <style jsx>{MobileUserDetailStyle}</style>
          </div>
        );
      }}
    </UserContext.Consumer>
  </React.Fragment>
);

export default MobileUserDetail;
