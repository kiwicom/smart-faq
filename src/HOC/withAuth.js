// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { StoreType } from '../store/reducers';
import type { State as SessionState } from '../store/reducers/SessionReducer';
import { saveToken, signIn } from '../store/actions/SessionActions';
import { getCookieToken } from '../helpers/Auth';

type Props = {
  doSignIn: Function,
  doSaveToken: Function,
};

function withAuth(BaseComponent: React.ComponentType<any>) {
  class WithAuth extends React.Component<Props> {
    constructor(props) {
      const JWT_Token = getCookieToken();
      if (JWT_Token) {
        props.doSaveToken(JWT_Token);
      }
      super(props);
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
const mapDispatchToProps = (dispatch: Function) => ({
  doSignIn: (email: string, password: string) =>
    dispatch(signIn(email, password)),
  doSaveToken: (token: string) => dispatch(saveToken(token)),
});

export default withAuth;
