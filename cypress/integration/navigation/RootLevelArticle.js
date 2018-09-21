// @noflow
/* global cy */

describe('Navigation for root level article', () => {
  let firstCategoryTitle = null;

  before(() => {
    cy.loadStaticFAQ();
    const firstCategory = cy.getFirstFaqCategoryTitle();
    return firstCategory.invoke('text').then(text => {
      firstCategoryTitle = text;
    });
  });

  it('can display article detail from root', () => {
    cy.clickOnArticle();
  });

  it('breadcrumbs are correct', () => {
    cy.get('[data-cy=faq-breadcrumbs]').as('faq-breadcrumbs');

    cy
      .get('@faq-breadcrumbs')
      .children()
      .should('have.length', 2);

    cy
      .get('@faq-breadcrumbs')
      .first()
      .contains('Home');
  });

  it('back button works', () => {
    cy.get('[data-cy=back-button]').click();
    const firstCategory = cy.getFirstFaqCategoryTitle();
    return firstCategory.invoke('text').then(text => {
      expect(text).to.not.eq(null);
      expect(text).to.eq(firstCategoryTitle);
    });
  });
});
