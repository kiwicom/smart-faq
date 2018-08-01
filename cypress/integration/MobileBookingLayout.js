// @noflow
/* global cy */

describe('Mobile Booking Layout', () => {
  it('', () => {
    cy.viewport('iphone-6');
    cy.signIntoAccount();

    cy.get('[data-cy=trip-button]').click();
    cy.get('.TripDescription').should('be.visible');
    cy.contains(/(Upcoming|Past) trip #[0-9 ]+/).should('be.visible');

    cy.get('.manageBookingButton').should('be.visible');
    cy.get('[data-cy=btn-other-bookings]').should('be.visible');

    cy.contains(/(Upcoming|Past) trip #[0-9 ]+/).click();

    cy.get('.manageBookingButton').should('not.be.visible');
    cy.get('[data-cy=btn-other-bookings]').should('not.be.visible');

    cy.contains(/(Upcoming|Past) trip #[0-9 ]+/).click();
    cy.contains('Select another booking').click();

    cy
      .get('body')
      .find('.bookingCard')
      .its('length')
      .should('gt', 3);
    cy
      .get('body')
      .find('.bookingCard')
      .eq(3)
      .click();

    cy.get('.TripDescription').should('not.be.visible');
  });
});
