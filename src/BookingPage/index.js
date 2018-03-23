// @flow
import * as React from 'react';
import withAuth from '../HOC/withAuth';

type Props = {};

class BookingPage extends React.Component<Props, {}> {
  render() {
    return (
      <div className="BookingPage">
        <hr className="hr-line" />
      </div>
    );
  }
}

export default withAuth(BookingPage);
