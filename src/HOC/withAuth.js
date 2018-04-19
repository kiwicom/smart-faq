// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { StoreType } from '../store/reducers';
import type { State as SessionState } from '../store/reducers/SessionReducer';
import type { ActionType } from '../store/actions';
import { saveToken, signIn, signOut } from '../store/actions/SessionActions';
import { getSessionToken } from '../helpers/Auth';

type Props = {
  token: string,
  doSignIn: (
    email: string,
    password: string,
  ) => (dispatch: Function) => Promise<Function>,
  doSaveToken: (token: string) => ActionType,
};

function withAuth(BaseComponent: React.ComponentType<any>) {
  class WithAuth extends React.Component<Props> {
    constructor(props) {
      super(props);
      const JWT_Token = getSessionToken();
      if (JWT_Token) {
        props.doSaveToken(JWT_Token);
      }
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(WithAuth);
}

const mapStateToProps = (state: StoreType): SessionState => ({
  ...state.session,
});
const mapDispatchToProps = {
  doSignIn: signIn,
  doSaveToken: saveToken,
  doSignOut: signOut,
};

export default withAuth;
