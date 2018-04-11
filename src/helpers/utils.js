// @flow

export const formatDate = (dateString: string) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
function chunkArray(arr, chunkSize = 3) {
  const groups = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize));
  }
  return groups;
}
export const formatBookingId = (bid: string | number) =>
  chunkArray(bid.toString().split());

export const decodeId = (hashedId: string) =>
  Buffer.from(hashedId, 'base64')
    .toString()
    .match(/:(.*)/)[1];
