// @noflow
/* global cy */

describe('User can search in FAQs', () => {
  beforeEach(() => {
    cy.visit('/');
<<<<<<< HEAD:cypress/integration/UserCanSearchInFAQs.js
    cy.get('[data-cy=btn-nonexistent-booking]').click();
=======
    cy.wait(4000);
    cy.get('[data-cy=btn-nonexistent-booking]').trigger('click');
>>>>>>> new circle local run:cypress/integration/User_can_search_in_FAQs.js
  });

  it(`The user can write and see a list of FAQ's and reset the input with cross button.`, () => {
    const wordToSearch = 'flight';
    cy.get('[data-cy=input-staticFAQ]').as('input-staticFAQ');

    cy
      .get('@input-staticFAQ')
      .type(wordToSearch)
      .should('have.value', wordToSearch);

    cy.get('[data-cy=scrollable-box]').should('be.visible');
    cy.get('[data-cy=btn-reset-input]').click();
    cy.get('@input-staticFAQ').should('have.value', '');
  });
});
