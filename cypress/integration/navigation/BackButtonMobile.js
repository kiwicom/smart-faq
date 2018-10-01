// @noflow
/* global
  Cypress,
  cy
*/

describe('Back button mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.signIntoAccount();
  });

  it('should navigate to root categories, when clicking back on faq category page', () => {
    cy.waitForFaqsBasedOnBookingStatusToLoad();

    cy.getFirstFaqCategory().then($initialRootCategory => {
      $initialRootCategory.click();
      cy.reload();
      cy.get('[data-cy=faq-article-link]').should('exist');

      cy.get('[data-cy=back-button-mobile]').click();
      cy.waitForFaqsBasedOnBookingStatusToLoad();

      cy.getFirstFaqCategory().then($rootCategory => {
        expect($initialRootCategory.text()).to.eq($rootCategory.text());
      });
    });
  });

  it('should navigate to faq category, when clicking back on faq article page', () => {
    cy.getFirstFaqCategory().click();
    cy.clickOnArticle();
    cy.reload();
    cy.get('.faq-article-content').should('exist');

    cy.get('[data-cy=back-button-mobile]').click();

    cy.get('[data-cy=faq-article-link]').should('exist');
  });

  it('should navigate to search, when clicking back on faq article displayed from search page', () => {
    cy.get('[data-cy=search-button]').click();
    cy.get('[data-cy=input-staticFAQ]').type('sports equipment');

    cy.clickOnArticle();
    cy.reload();
    cy.get('.faq-article-content').should('exist');
    cy.get('[data-cy=back-button-mobile]').click();

    cy.get('.faq-category').should('exist');
  });
});
