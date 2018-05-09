// @flow

export const URGENCY_THRESHOLD = 48;

export const formatDate = (dateString: string) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const formatCountDown = (hoursLeft: number) => {
  const nhours = Math.floor(hoursLeft);
  const nmins = Math.floor((hoursLeft - nhours) * 60);
  const ndays = Math.floor(hoursLeft / 24);
  if (hoursLeft < URGENCY_THRESHOLD) {
    return nmins ? `${nhours}h ${nmins}min` : `${nhours}h`;
  }
  return `${ndays} days`;
};