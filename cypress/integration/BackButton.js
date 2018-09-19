// @noflow
/* global
  Cypress,
  cy
*/

describe('Back button', () => {
  const createUrl = uri => {
    return `http://localhost:8080/?help=${encodeURIComponent(uri)}`;
  };

  it('should navigate to homepage, when clicking back on sign in page', () => {
    const expectedUrl = createUrl('/');

    cy.visit('?help=/sign-in');
    cy.get('[data-cy=back-button]').click();

    cy.url().should('eq', expectedUrl);
  });

  it('should navigate to sign in page, when clicking back on kiwi.com account sign in page', () => {
    const expectedUrl = createUrl('/sign-in');

    cy.visit('?help=/kiwi-login');
    cy.get('[data-cy=back-button]').click();

    cy.url().should('eq', expectedUrl);
  });

  it('should navigate to kiwi.com account sign in page, when clicking back on forgotten password page', () => {
    const expectedUrl = createUrl('/kiwi-login');

    cy.visit('?help=/forgotten-password');
    cy.get('[data-cy=back-button]').click();

    cy.url().should('eq', expectedUrl);
  });

  it('should navigate to root categories, when clicking back on faq category page', () => {
    const expectedUrl = createUrl('/faq');

    cy.visit('?help=/faq/RkFRQ2F0ZWdvcnk6ODk=');
    cy.get('[data-cy=back-button]').click();

    cy.url().should('eq', expectedUrl);
  });

  it('should navigate to faq category, when clicking back on faq article page', () => {
    const expectedUrl = createUrl('/faq/RkFRQ2F0ZWdvcnk6ODk=/');

    cy.visit('?help=/faq/RkFRQ2F0ZWdvcnk6ODk=/article/RkFRQXJ0aWNsZTo0MQ==');
    cy.get('[data-cy=back-button]').click();

    cy.url().should('eq', expectedUrl);
  });

  it('should navigate to search, when clicking back on faq article displayed from search page', () => {
    const expectedUrl = createUrl('/faq');

    cy.visit('/?help=/faq');
    cy.get('[data-cy=input-staticFAQ]').type('sports equipment');
    cy
      .get('[data-cy=faq-article-link]')
      .first()
      .click();
    cy.get('[data-cy=back-button]').click();

    cy.url().should('eq', expectedUrl);
    cy
      .get('[data-cy=faq-article-link]')
      .first()
      .contains('sports equipment')
      .should('exist');
  });

  it('should navigate to root categories with search, when clicking back after page reload on faq article displayed from search page', () => {
    const expectedUrl = createUrl('/faq');

    cy.visit('/?help=/faq');
    cy.getFirstFaqCategoryTitle().then($initialFaqCategoryTitle => {
      cy.get('[data-cy=input-staticFAQ]').type('sports equipment');
      cy
        .get('[data-cy=faq-article-link]')
        .first()
        .click();
      cy.reload();
      cy.get('[data-cy=back-button]').click();

      cy.url().should('eq', expectedUrl);
      cy.getFirstFaqCategoryTitle().should($faqCategoryTitle => {
        expect($initialFaqCategoryTitle.text()).to.eq($faqCategoryTitle.text());
      });
    });
  });
});
