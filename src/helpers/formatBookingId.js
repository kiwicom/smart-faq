// @flow

const formatBookingId = (bookingDatabaseId: ?number): string => {
  const splitBookingId: string[] =
    String(bookingDatabaseId)
      .split('')
      .reverse()
      .join('')
      .match(/.{1,3}/g) || [];

  return splitBookingId
    .join(' ')
    .split('')
    .reverse()
    .join('');
};

export default formatBookingId;
