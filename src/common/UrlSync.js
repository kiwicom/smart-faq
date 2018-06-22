// @flow
import { withRouter } from 'react-router-dom';
import setQueryString from 'set-query-string';

const UrlSync = ({ location }) => {
  setQueryString({
    help: location.pathname,
  });
  return null;
};

export default withRouter(UrlSync);
