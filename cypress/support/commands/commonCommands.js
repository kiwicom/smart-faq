// @noflow
/* global
  cy,
  Cypress
*/

Cypress.Commands.add('signIntoAccount', () => {
  cy.visit('/');
  cy.get('[data-cy=btn-existent-booking]').click();
  cy.get('[data-cy=link-kiwi-login]').click();

  cy.get('[data-cy=input-email]').type(Cypress.env('TEST_USER_EMAIL'));
  cy.get('[data-cy=input-password]').type(Cypress.env('TEST_USER_PASSWORD'));
  cy.get('[data-cy=btn-sign-in]').click();
});

Cypress.Commands.add('getFirstFaqCategoryTitle', () => {
  cy
    .get('[data-cy=faq-categories]')
    .find('a')
    .first()
    .find('h1');
});
