// @noflow
/* global cy */

describe('Mobile Booking Layout', () => {
  it('', () => {
    cy.viewport('iphone-6');
    cy.visit('/');

    cy.get('[data-cy=btn-existent-booking]').click();
    cy.get('[data-cy=link-kiwi-login]').click();

    cy.get('[data-cy=input-email]').type('test@kiwi.com');
    cy.get('[data-cy=input-password]').type('kiwitest');
    cy.get('[data-cy=btn-sign-in] button').click();

    cy.contains('Manage My Booking').should('not.be.visible');
    cy.contains('Select another booking').should('not.be.visible');
    cy.get('.TripDescription').should('be.visible');

    cy.contains(/(Upcoming|Past) trip #[0-9 ]+/).should('be.visible');
    cy.contains(/(Upcoming|Past) trip #[0-9 ]+/).click();

    cy.contains('Manage My Booking').should('be.visible');
    cy.contains('Select another booking').should('be.visible');

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

    cy.get('.TripDescription').should('be.visible');
  });
});
