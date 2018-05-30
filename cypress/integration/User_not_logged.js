// @noflow
/* global cy */

describe('User not logged', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=btn-nonexistent-booking]').trigger('click');
  });

  it('User can search in FAQs', () => {
    const wordToSearch = 'flight';
    cy.get('[data-cy=input-staticFAQ]').as('input-staticFAQ');

    cy
      .get('@input-staticFAQ')
      .type(wordToSearch)
      .should('have.value', wordToSearch);
    cy.wait(Cypress.env('waitTime'));
    cy.get('[data-cy=scrollable-box]').should('be.visible');
    cy.get('[data-cy=btn-reset-input]').trigger('click');
    cy.wait(Cypress.env('waitTime'));
    cy.get('@input-staticFAQ').should('have.value', '');
  });
});
