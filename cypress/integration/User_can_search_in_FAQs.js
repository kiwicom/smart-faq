// @noflow
/* global cy */

describe('User can search in FAQs', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=btn-nonexistent-booking]').trigger('click');
  });

  it(`The user can write and see a list of FAQ's and reset the input with cross button.`, () => {
    const wordToSearch = 'flight';
    cy.get('[data-cy=input-text]').as('input-staticFAQ');

    cy
      .get('@input-staticFAQ')
      .type(wordToSearch)
      .should('have.value', wordToSearch);

    cy.get('[data-cy=scrollable-box]').should('be.visible');
    cy.get('[data-cy=btn-reset-input]').trigger('click');
    cy.get('@input-staticFAQ').should('have.value', '');
  });
});
