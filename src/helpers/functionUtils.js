// @flow

export const debounce = (
  fn: any => any,
  timeout: number = 250,
  interval?: TimeoutID,
) => (...args: any) => {
  clearTimeout(interval);
  interval = setTimeout(() => fn(...args), timeout);
};
