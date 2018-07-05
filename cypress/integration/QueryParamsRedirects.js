// @noflow
/* global cy */

describe('Query params redirect to correct article', () => {
  it(`User should navigate to a FAQ article with url`, () => {
    cy.visit('/?help=/faq/RkFRQ2F0ZWdvcnk6ODk=/article/RkFRQXJ0aWNsZTo0MQ==');
    cy.wait(5000);
  });

  it(`Breadcrumbs should have length of 4`, () => {
    cy.get('[data-cy=faq-breadcrumbs]').as('faq-breadcrumbs');
    cy
      .get('@faq-breadcrumbs')
      .children()
      .should('have.length', 3);
  });

  it(`Feedback form should be present`, () => {
    cy.get('[data-cy=faq-article-form]').as('faq-article-form');

    cy.get('@faq-article-form').should('exist');
  });

  it(`Article title should be corect`, () => {
    cy
      .get('.faq-article-detail')
      .find('h1')
      .contains('Cabin baggage');
  });
});
