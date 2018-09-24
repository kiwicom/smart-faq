// @noflow

export default (departureTime, guaranteeBy) => ({
  data: {
    nearestBooking: {
      __typename: 'BookingOneWay',
      assets: {
        ticketUrl: null,
      },
      databaseId: 7708368,
      directAccessURL:
        'https://kiwi.com/content/manage/7708368/directAccessStuff',
      id: 'Qm9va2luZ09uZVdheTo3NzA4MzY4',
      isPastBooking: false,
      status: 'CLOSED',
      trip: {
        arrival: {
          airport: {
            city: {
              name: 'Santiago de Chile',
            },
            id: 'bG9jYXRpb246U0NM',
            locationId: 'SCL',
          },
          time: departureTime.plus(1000 * 60 * 60 * 5).toJSON(),
        },
        departure: {
          airport: {
            city: {
              name: 'Madrid',
            },
            id: 'bG9jYXRpb246TUFE',
            locationId: 'MAD',
          },
          localTime: departureTime.toJSON(),
          time: departureTime.toJSON(),
        },
        legs: [
          {
            airline: {
              code: 'IB',
              logoUrl: 'https://images.kiwi.com/airlines/64/IB.png',
              name: 'Iberia Airlines',
            },
            arrival: {
              airport: {
                city: {
                  name: 'Santiago de Chile',
                },
                id: 'bG9jYXRpb246U0NM',
                locationId: 'SCL',
                name: 'Comodoro Arturo Merino Benítez International',
              },
              localTime: departureTime.plus(1000 * 60 * 60 * 5).toJSON(),
              time: departureTime.plus(1000 * 60 * 60 * 5).toJSON(),
            },
            departure: {
              airport: {
                city: {
                  name: 'Madrid',
                },
                id: 'bG9jYXRpb246TUFE',
                locationId: 'MAD',
                name: 'Adolfo Suárez Madrid–Barajas',
              },
              localTime: departureTime.toJSON(),
              time: departureTime.toJSON(),
            },
            duration: 800,
            flightNumber: 6833,
            id: 'TGVnOlNQNTk2ODQ0MF83OTQyODc5',
            operatingAirline: null,
            pnr: null,
            type: 'AIRCRAFT',
            vehicle: {
              manufacturer: 'Airbus',
              model: 'A340-600',
            },
            guarantee: guaranteeBy,
          },
        ],
      },
      customerSupport: {
        hasGuaranteeChat: guaranteeBy === 'KIWICOM',
      },
      type: 'ONE_WAY',
      upcomingLeg: {
        arrival: {
          time: departureTime.plus(1000 * 60 * 60 * 5).toJSON(),
        },
        departure: {
          time: departureTime.toJSON(),
        },
        guarantee: guaranteeBy,
        id: 'TGVnOlNQNTk2ODQ0MF83OTQyODc5',
      },
    },
  },
});
