// @noflow
/* global
  Cypress,
  cy
*/

describe('User can log into SmartFAQ', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=btn-existing-booking]').click();
    cy.get('[data-cy=link-kiwi-login]').click();
  });

  it(`The user should be able to log into SmartFAQ with the correct credentials.`, () => {
    cy.get('[data-cy=input-email]').type(Cypress.env('TEST_USER_EMAIL'));
    cy.get('[data-cy=input-password]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.get('[data-cy=btn-sign-in]').click();
    cy.wait(1000);
    cy.get('[data-cy=nearestBooking]').should('exist');
  });
});
