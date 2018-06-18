// @flow

export type LogEvent =
  | 'smartFAQ'
  | 'smartFAQBookingOverview'
  | 'smartFAQCategories'
  | 'smartFAQNoBooking'
  | 'goBack';
export type EventPayload = { [string]: string | number | boolean };

const emptyCuckoo = {
  infinario: (ev:LogEvent, payload: EventPayload) => process.env.NODE_ENV !== 'production' && console.info('Current Infinario is empty. Event', ev, payload),//eslint-disable-line
};
export default emptyCuckoo;
