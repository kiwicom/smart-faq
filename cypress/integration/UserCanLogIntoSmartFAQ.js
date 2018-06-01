// @noflow
/* global
  Cypress,
  cy
*/

describe('User can log into SmartFAQ', () => {
  beforeEach(() => {
    cy
      .fixture('UserCanLogIntoSmartFAQ_Mock.json')
      .then(UserCanLogIntoSmartFAQ_Mock => {
        cy.mockRequest(UserCanLogIntoSmartFAQ_Mock);
        cy.get('[data-cy=btn-existent-booking]').click();
        cy.get('[data-cy=link-kiwi-login]').click();
      });
  });

  it(`The user should be able to log into SmartFAQ with the correct credentials.`, () => {
    cy.get('[data-cy=input-email]').type(Cypress.env('TEST_USER_EMAIL'));
    cy.get('[data-cy=input-password]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.get('[data-cy=btn-sign-in]').click();
    cy.get('.nearestBooking').should('exist');
  });
});
