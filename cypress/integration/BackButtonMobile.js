// @noflow
/* global
  Cypress,
  cy
*/

describe('Back button mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.signIntoAccount();
    cy.wait(2000);
  });

  it('should navigate to root categories, when clicking back on faq category page', () => {
    cy
      .get('[data-cy=faq-categories]')
      .get('.faq-category')
      .first()
      .then($initialRootCategory => {
        $initialRootCategory.click();

        cy.reload();
        cy.wait(2000);
        cy.get('[data-cy=back-button-mobile]').click();

        cy
          .get('.faq-category')
          .first()
          .then($rootCategory => {
            expect($initialRootCategory.text()).to.eq($rootCategory.text());
          });
      });
  });

  it('should navigate to faq category, when clicking back on faq article page', () => {
    cy.getFirstFaqCategory().click();

    cy.get('[data-cy=faq-article-link]').click();
    cy.reload();
    cy.get('[data-cy=back-button-mobile]').click();

    cy.get('[data-cy=faq-article-link]').should('exist');
  });

  it('should navigate to search, when clicking back on faq article displayed from search page', () => {
    cy.get('[data-cy=search-button]').click();
    cy.get('[data-cy=input-staticFAQ]').type('sports equipment');

    cy
      .get('[data-cy=faq-article-link]')
      .first()
      .click();
    cy.reload();
    cy.get('[data-cy=back-button-mobile]').click();

    cy.get('.faq-category').should('exist');
  });
});
