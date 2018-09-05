// @flow

import type { OneWayTripWrapper_booking } from './BookingStateWrapper/__generated__/OneWayTripWrapper_booking.graphql';
import type { ReturnTripWrapper_booking } from './BookingStateWrapper/__generated__/ReturnTripWrapper_booking.graphql';
import type { MultiCityTripWrapper_booking } from './BookingStateWrapper/__generated__/MultiCityTripWrapper_booking.graphql';

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
  onAppWithOpenChatClose: boolean => void,
  emergencies: string[],
  enableChat: boolean,
  chatConfig: { [key: string]: string } | null,
|};

export type BookingType =
  | OneWayTripWrapper_booking
  | ReturnTripWrapper_booking
  | MultiCityTripWrapper_booking;
