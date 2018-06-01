// @noflow
/* global
  Cypress,
  cy
*/

describe('User can log into SmartFAQ', () => {
  beforeEach(() => {
    const mocks = {
      'https://auth.skypicker.com/v1/user.login': {
        token:
          'WyJ4OExkeng0NzU2TUV0b0FfQkI4MWFXIiwiZ0NwUVVlWjRqVkJ0Y1NSbm5YMmVRLmViRlFQUmYxRTY2cTMwSGZiaDJnMnhmMzN4R3RldDYiLDg4MDEzOTEwMl0.SYeh92_bED-iGshCHdgQCL_ryRo',
        user_id: 'x8Ldzx4756MEtoA_BB81aW',
      },
      allFAQCategories: {
        data: {
          allFAQCategories: {
            edges: [
              {
                node: {
                  id: 'RkFRQ2F0ZWdvcnk6NDY=',
                  perex: '',
                  title: 'Booking',
                },
              },
              {
                node: {
                  id: 'RkFRQ2F0ZWdvcnk6NDc=',
                  perex: '',
                  title: 'Before the flight',
                },
              },
              {
                node: {
                  id: 'RkFRQ2F0ZWdvcnk6NDg=',
                  perex: '',
                  title: 'At the Airport',
                },
              },
              {
                node: { id: 'RkFRQ2F0ZWdvcnk6NTA=', perex: '', title: 'Other' },
              },
            ],
          },
        },
      },
      nearestBooking: {
        data: {
          nearestBooking: {
            __typename: 'BookingReturn',
            contactDetails: { email: 'test@kiwi.com', phone: '+1 000' },
            databaseId: 6702575,
            directAccessURL:
              'https://kiwi.com/content/manage/6702575/f1925f92-62ef-4caa-9890-4a8b0bc143d2',
            id: 'Qm9va2luZ1JldHVybjo2NzAyNTc1',
            inbound: {
              arrival: {
                airport: { city: { name: 'Vienna' }, locationId: 'VIE' },
                time: '2018-06-06T15:00:00.000Z',
              },
              departure: {
                airport: { city: { name: 'Istanbul' }, locationId: 'SAW' },
                localTime: '2018-06-06T15:40:00.000Z',
              },
              legs: [
                {
                  airline: {
                    code: 'PC',
                    logoUrl: 'https://images.kiwi.com/airlines/64/PC.png',
                    name: 'Pegasus',
                  },
                  arrival: {
                    airport: {
                      city: { name: 'Vienna' },
                      locationId: 'VIE',
                      name: 'Vienna International',
                    },
                    localTime: '2018-06-06T17:00:00.000Z',
                    time: '2018-06-06T15:00:00.000Z',
                  },
                  departure: {
                    airport: {
                      city: { name: 'Istanbul' },
                      locationId: 'SAW',
                      name: 'Sabiha Gökçen International',
                    },
                    localTime: '2018-06-06T15:40:00.000Z',
                    time: '2018-06-06T12:40:00.000Z',
                  },
                  duration: 140,
                  flightNumber: 903,
                  id: 'TGVnOlNQMzg2Mzg5OF81NTQ5Mjc3',
                  type: 'AIRCRAFT',
                },
              ],
            },
            outbound: {
              arrival: {
                airport: { city: { name: 'Istanbul' }, locationId: 'SAW' },
                time: '2018-05-28T14:35:00.000Z',
              },
              departure: {
                airport: { city: { name: 'Vienna' }, locationId: 'VIE' },
                localTime: '2018-05-28T14:20:00.000Z',
                time: '2018-05-28T12:20:00.000Z',
              },
              legs: [
                {
                  airline: {
                    code: 'PC',
                    logoUrl: 'https://images.kiwi.com/airlines/64/PC.png',
                    name: 'Pegasus',
                  },
                  arrival: {
                    airport: {
                      city: { name: 'Istanbul' },
                      locationId: 'SAW',
                      name: 'Sabiha Gökçen International',
                    },
                    localTime: '2018-05-28T17:35:00.000Z',
                    time: '2018-05-28T14:35:00.000Z',
                  },
                  departure: {
                    airport: {
                      city: { name: 'Vienna' },
                      locationId: 'VIE',
                      name: 'Vienna International',
                    },
                    localTime: '2018-05-28T14:20:00.000Z',
                    time: '2018-05-28T12:20:00.000Z',
                  },
                  duration: 135,
                  flightNumber: 902,
                  id: 'TGVnOlNQMzg2Mzg5OV81NTQ5Mjc4',
                  type: 'AIRCRAFT',
                },
              ],
            },
            status: 'CLOSED',
            type: 'RETURN',
          },
        },
      },
    };

    cy.mockRequest(mocks);

    cy.get('[data-cy=btn-existent-booking]').click();
    cy.get('[data-cy=link-kiwi-login]').click();
  });

  it(`The user should be able to log into SmartFAQ with the correct credentials.`, () => {
    cy.get('[data-cy=input-email]').type(Cypress.env('TEST_USER_EMAIL'));
    cy.get('[data-cy=input-password]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.get('[data-cy=btn-sign-in]').click();
    cy.get('.nearestBooking').should('exist');
  });
});
