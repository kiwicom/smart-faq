// @flow

type BookingStatuses = {
  [key: string]: {
    text: string,
    color: string,
  } | null,
};

export default (): BookingStatuses => ({
  NEW: { text: 'New', color: '#171b1e' },
  REFUNDED: { text: 'Refunded', color: '#171b1e' },
  PENDING: { text: 'Pending', color: '#ffc345' },
  OPEN: { text: 'Open', color: '#ffc345' },
  INFO: { text: 'Info', color: '#ffc345' },
  CONFIRMED: { text: 'Confirmed', color: '#127f22' },
  CANCELLED: { text: 'Cancelled', color: '#171b1e' },
  DELETED: { text: 'Deleted', color: '#171b1e' },
  CLOSED: { text: 'Closed', color: '#ffc345' },
  EXPIRED: { text: 'Expired', color: '#171b1e' },
  '%future added value': null,
});
