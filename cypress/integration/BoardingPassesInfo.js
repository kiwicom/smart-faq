// @noflow
/* global
  Cypress,
  cy
*/

describe('Boarding Passes Info', () => {
  beforeEach(() => {
    cy.signIntoAccount();
  });

  it('should display boarding passes info', () => {
    cy.get('[data-cy=btn-boarding-passes]').click();

    cy
      .get('.boardingPassesCard')
      .find('p')
      .contains(
        'Here, you can download your boarding passes or see when they will become available.',
      )
      .get('.boardingPassesRow')
      .should('exist');
  });

  it('should show a specific FAQ', () => {
    cy
      .get('[data-cy=btn-boarding-passes]')
      .click()
      .get('[data-cy=faq-article-link]')
      .contains('PNR numbers');
  });

  it('should show the previous root category after clicking home', () => {
    cy.getFirstFaqCategoryTitle().then($initialFaqCategoryTitle => {
      cy.get('[data-cy=btn-boarding-passes]').click();

      cy
        .get('[data-cy=faq-breadcrumbs]')
        .find('.breadcrumb')
        .contains('Home')
        .click();

      cy.getFirstFaqCategoryTitle().should($faqCategoryTitle => {
        expect($initialFaqCategoryTitle.text()).to.eq($faqCategoryTitle.text());
      });
    });
  });
});
