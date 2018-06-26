// @flow
import { withRouter } from 'react-router-dom';

const UrlSync = ({ location }) => {
  if (location.pathname !== '/') {
    const loc = window.location;
    const params = new URLSearchParams(loc.search);
    params.set('help', location.pathname);

    window.history.replaceState({}, '', `${loc.pathname}?${params.toString()}`);
  }
  return null;
};

export default withRouter(UrlSync);
