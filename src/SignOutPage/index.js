// @flow

import { withRouter } from 'react-router-dom';
import routeDefinitions from '../routeDefinitions';
import withAuth from '../HOC/withAuth';

type Props = {
  doSignOut: () => void,
  history: {
    push: string => void,
  },
};

const SignOut = (props: Props) => {
  props.doSignOut();
  props.history.push(routeDefinitions.HOME);
  return null;
};

export default withRouter(withAuth(SignOut));
