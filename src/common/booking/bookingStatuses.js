// @flow

type BookingStatuses = {
  [key: string]: {
    text: string,
    color: string,
  } | null,
};

export default (__t: string => string): BookingStatuses => ({
  NEW: { text: __t('Status.New'), color: '#171b1e' },
  REFUNDED: { text: __t('Status.Refunded'), color: '#171b1e' },
  PENDING: { text: __t('Status.Pending'), color: '#ffc345' },
  OPEN: { text: __t('Status.Open'), color: '#ffc345' },
  INFO: { text: __t('Status.Info'), color: '#ffc345' },
  CONFIRMED: { text: __t('Status.Confirmed'), color: '#127f22' },
  CANCELLED: { text: __t('Status.Cancelled'), color: '#171b1e' },
  DELETED: { text: __t('Status.Deleted'), color: '#171b1e' },
  CLOSED: { text: __t('Status.Closed'), color: '#ffc345' },
  EXPIRED: { text: __t('Status.Expired'), color: '#171b1e' },
  '%future added value': null,
});
