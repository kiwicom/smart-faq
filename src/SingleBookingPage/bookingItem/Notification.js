// @flow

import * as React from 'react';
import { Alert } from '@kiwicom/orbit-components';

import { formatCountDown } from '../../helpers/dateUtils';

type Props = {|
  isUrgent: boolean,
  hoursLeft: number,
|};

const Notification = ({ isUrgent, hoursLeft }: Props) => {
  const urgentMessage = `You depart in ${formatCountDown(hoursLeft)}.
  Don't hesitate to call us if you have an urgent problem.`;
  const normalMessage = `You depart in ${formatCountDown(hoursLeft)}.
  There is still time to add some nice extras or even change your booking.`;
  const type = isUrgent ? 'warning' : 'info';

  return (
    <div className="notification">
      <Alert type={type} icon>
        {isUrgent ? urgentMessage : normalMessage}
      </Alert>
      <style jsx>
        {`
          .notification {
            margin-bottom: 24px;
          }
        `}
      </style>
    </div>
  );
};

export const RawNotification = Notification;

export default Notification;
