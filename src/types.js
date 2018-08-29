// @flow

export type User = {
  id: string,
  email: string,
  firstname: string,
  lastname: string,
} | null;

export type onLogin = (string, string) => Promise<*>;

export type onLogout = () => Promise<*>;

export type Provider = 'facebook' | 'google';

export type onSocialLogin = Provider => Promise<*>;

export type AppProps = {|
  language: string,
  user: User,
  loginToken: ?string,
  route: ?string,
  simpleToken: ?string,
  onClose: () => void,
  onLogin: onLogin,
  onSocialLogin: onSocialLogin,
  onLogout: onLogout,
  emergencies: string[],
|};

export type BasicBookingDataFields = {
  directAccessURL: string,
  databaseId: number,
  isPastBooking: boolean,
  type: 'ONE_WAY' | 'RETURN' | 'MULTICITY',
  start: ?{
    time: ?Date,
  },
  outbound: ?{
    departure: ?{
      time: ?Date,
    },
  },
  trip: ?{
    departure: ?{
      time: ?Date,
    },
  },
};

export type BasicBookingData = {
  error: ?Error,
  props: BasicBookingDataFields,
};
