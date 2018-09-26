// @flow

import * as React from 'react';
import { Alert } from '@kiwicom/orbit-components';
import Trans from '@kiwicom/nitro/lib/components/Text';

import { formatCountDown } from '../../helpers/dateUtils';

type Props = {|
  isUrgent: boolean,
  hoursLeft: number,
|};

const Notification = ({ isUrgent, hoursLeft }: Props) => {
  const formattedHoursLeft = formatCountDown(hoursLeft);
  const type = isUrgent ? 'warning' : 'info';

  return (
    <div className="notification">
      <Alert type={type} icon>
        {isUrgent ? (
          <Trans
            t={__('smartfaq.single_booking_page.notification.urgent_message')}
            values={{ formattedHoursLeft }}
          />
        ) : (
          <Trans
            t={__('smartfaq.single_booking_page.notification.normal_message')}
            values={{ formattedHoursLeft }}
          />
        )}
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
