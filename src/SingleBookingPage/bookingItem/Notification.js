// @flow

import * as React from 'react';
import { SystemMessage } from '@kiwicom/orbit-components';
import { Alert, InformationCircle } from '@kiwicom/orbit-components/lib/icons';
import { translate } from 'react-i18next';

import { formatCountDown } from '../../helpers/dateUtils';

type Props = {|
  isUrgent: boolean,
  hoursLeft: number,
  t: string => string,
|};

const Notification = ({ isUrgent, hoursLeft, t }: Props) => {
  const urgentMessage = `You depart in ${formatCountDown(hoursLeft, t)}.
  Don't hesitate to call us if you have an urgent problem.`;
  const normalMessage = `You depart in ${formatCountDown(hoursLeft, t)}.
  There is still time to add some nice extras or even change your booking.`;
  const alert = isUrgent ? (
    <Alert customColor="#f9971e" />
  ) : (
    <InformationCircle customColor="#10709f" />
  );
  const type = isUrgent ? 'warning' : 'info';

  return (
    <div className="notification">
      <SystemMessage type={type}>
        <div className="system-message">
          <div className="icon">{alert}</div>
          <div className="text">{isUrgent ? urgentMessage : normalMessage}</div>
        </div>
      </SystemMessage>
      <style jsx>
        {`
          .notification {
            margin-bottom: 24px;
          }
          .system-message {
            display: flex;
          }
          .system-message .icon {
            margin-right: 14px;
          }
        `}
      </style>
    </div>
  );
};

export const RawNotification = Notification;

export default translate()(Notification);
