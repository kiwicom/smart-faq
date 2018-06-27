// @flow
import { withRouter } from 'react-router-dom';

const UrlSync = ({ location }) => {
  const loc = window.location;
  const params = new URLSearchParams(loc.search);
  const help = params.get('help');
  if (location.pathname !== '/' && help) {
    const loc = window.location;
    const params = new URLSearchParams(loc.search);
    params.set('help', location.pathname);
    params.delete('redirect');

    window.history.replaceState({}, '', `${loc.pathname}?${params.toString()}`);
  }
  return null;
};

export default withRouter(UrlSync);
