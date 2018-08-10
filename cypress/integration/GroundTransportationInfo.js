// @noflow
/* global
  Cypress,
  cy
*/

describe('Expandable ground transportation leg', () => {
  it('should expand trip', () => {
    cy.signIntoAccount();

    cy
      .get('.bookingAccordion')
      .contains('PFL')
      .click()
      .get('.legCities')
      .should('exist');
  });

  it('should expand leg', () => {
    cy
      .get('.legTitle')
      .contains('Bus')
      .click()
      .get('.legCitiesInfo')
      .should('exist');
  });

  it('should dislay specific article on clicking Trains and Buses Info', () => {
    cy
      .get('.moreInfoLink')
      .click()
      .get('.faq-article-content')
      .get('h1')
      .contains('Trains and buses')
      .should('exist');
  });
});
