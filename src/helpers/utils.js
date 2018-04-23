// @flow

export const URGENCY_THRESHOLD = 48;
export const formatDate = (dateString: string) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
function chunkArray(arr, chunkSize = 3) {
  const groups = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize).join(''));
  }
  return groups;
}
export const formatBookingId = (bid: number) =>
  chunkArray(
    bid
      .toString()
      .split('')
      .reverse(),
  )
    .reverse()
    .join(' ');

export const calcTimeLeft = (refDate: string) => {
  if (refDate === '') return -1;
  const ref = new Date(refDate);
  const now = new Date();
  return (ref - now) / 36e5;
};

export const formatCountDown = (nh: number) => {
  const nhours = Math.floor(nh);
  const nmins = Math.floor((nh - nhours) * 60);
  const ndays = Math.floor(nh / 60);
  if (nh < URGENCY_THRESHOLD) {
    return nmins ? `${nhours}h ${nmins}min` : `${nhours}h`;
  }
  return `${ndays} days`;
};
