// @noflow
/* global
  Cypress,
  cy
*/

describe('User can log into SmartFAQ', () => {
  it(`the user should be able to log into SmartFAQ with the correct credentials.`, () => {
    cy.visit('/');
    cy.get('[data-cy=btn-existent-booking]').click();
    cy.get('[data-cy=link-kiwi-login]').click();

    cy.get('[data-cy=input-email]').type(Cypress.env('TEST_USER_EMAIL'));
    cy.get('[data-cy=input-password]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.get('[data-cy=btn-sign-in]').click();

    cy.get('[data-cy=nearestBooking]').should('exist');
  });

  it('checks if upcoming bookings exist', () => {
    cy
      .get('[data-cy=btn-other-bookings]')
      .find('a')
      .click();

    cy.wait(5000);
    cy.get('[data-cy=booking-card]').should('exist');
  });

  it('should display upcoming bookings', () => {
    cy
      .get('[data-cy=upcoming-bookings]')
      .find('[data-cy=booking-card]')
      .first()
      .click();

    cy.wait(5000);

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
