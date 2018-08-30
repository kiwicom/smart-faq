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

export type AppProps = {
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
};

export type Leg = {
  type: ?'BUS' | 'TRAIN' | 'AIRCRAFT',
  pnr?: ?string,
  operatingAirline?: {
    name: string,
    iata: string,
  },
  vehicle?: {
    model: string,
    manufacturer: string,
  },
  airline?: ?{
    name: ?string,
    code: ?string,
    logoUrl: ?string,
  },
  departure?: {
    localTime?: string,
    time?: ?Date,
    airport?: {
      locationId?: ?string,
      name: string,
      city?: ?{
        name?: ?string,
      },
    },
  },
  arrival?: {
    localTime?: string,
    time?: ?Date,
    airport?: {
      locationId?: ?string,
      name: string,
      city?: ?{
        name?: ?string,
      },
    },
  },
  flightNumber?: number,
  duration?: ?number,
};

export type Trip = {
  departure: {
    localTime: string,
    time?: ?Date,
    airport: {
      locationId: string,
      city: {
        name: string,
      },
    },
  },
  arrival: {
    time?: ?Date,
    localTime: string,
    airport: {
      locationId: string,
      city: {
        name: string,
      },
    },
  },
  legs: Array<Leg>,
};

export type BasicBookingDataFields = {
  directAccessURL: string,
  databaseId: number,
  isPastBooking: boolean,
  type?: 'ONE_WAY' | 'RETURN' | 'MULTICITY',
  status?:
    | 'REFUNDED'
    | 'CONFIRMED'
    | 'PENDING'
    | 'CANCELLED'
    | 'DELETED'
    | 'CLOSED'
    | 'EXPIRED',
  assets?: ?{
    ticketUrl: ?string,
  },
  start?: ?{
    time?: ?Date,
  },
  end?: ?{
    time?: ?Date,
    airport: ?{
      city: ?{
        name: ?string,
      },
    },
  },
  outbound: {
    legs: Array<Leg>,
    arrival: {
      time?: ?Date,
      localTime: string,
      airport: {
        locationId: string,
        city: {
          name: string,
        },
      },
    },
    departure: {
      time?: ?Date,
      localTime: string,
      airport: {
        locationId: string,
        city: {
          name: string,
        },
      },
    },
  },
  inbound: {
    legs: Array<Leg>,
    arrival: {
      time?: ?Date,
      localTime: string,
      airport: {
        locationId: string,
        city: {
          name: string,
        },
      },
    },
    departure: {
      time?: ?Date,
      localTime: string,
      airport: {
        locationId: string,
        city: {
          name: string,
        },
      },
    },
  },
  trip: Trip,
  trips: Array<Trip>,
};

export type BasicBookingData = {
  error: ?Error,
  props: BasicBookingDataFields,
};
