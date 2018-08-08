// @noflow
/* global
  Cypress,
  cy
*/

describe('User can log into SmartFAQ', () => {
  it(`the user should be able to log into SmartFAQ with the correct credentials.`, () => {
    cy.signIntoAccount();

    cy.get('[data-cy=nearestBooking]').should('exist');
  });

  it('checks if upcoming bookings exist', () => {
    cy
      .get('[data-cy=btn-other-bookings]')
      .find('a')
      .click();

    cy.get('[data-cy=booking-card]').should('exist');
  });

  it('should display upcoming bookings', () => {
    cy
      .get('[data-cy=upcoming-bookings]')
      .find('[data-cy=booking-card]')
      .first()
      .click();

    cy
      .get('[data-cy=booking-type]')
      .find('p')
      .contains('Upcoming trip');

    cy.get('[data-cy=booking-title]').should('exist');
    cy.get('[data-cy=btn-manage-booking]').should('exist');
    cy
      .get('[data-cy=btn-other-bookings]')
      .find('a')
      .click();
  });

  it('should display past bookings', () => {
    cy
      .get('[data-cy=past-bookings]')
      .find('[data-cy=booking-card]')
      .first()
      .click();

    cy
      .get('[data-cy=booking-type]')
      .find('p')
      .contains('Past trip');

    cy.get('[data-cy=booking-title]').should('exist');
    cy.get('[data-cy=btn-manage-booking]').should('exist');
  });
});
