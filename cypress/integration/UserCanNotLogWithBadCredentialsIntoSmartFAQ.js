// @noflow
/* global
  Cypress,
  cy
*/

describe(`User can't log into SmartFAQ with wrong credentials`, () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=btn-existent-booking]').click();
    cy.get('[data-cy=link-kiwi-login]').click();
  });

  it(`The user shouldn't be able to log into SmartFAQ with wrong credentials.`, () => {
    const wrongData = {
      email: Cypress.env('TEST_USER_EMAIL'),
      password: 'wrongPassword',
    };

    cy.get('[data-cy=input-email]').type(wrongData.email);
    cy.get('[data-cy=input-password]').type(wrongData.password);
    cy.get('[data-cy=btn-sign-in]').click();
    cy.get('.errorMessage').should('exist');
  });
});
