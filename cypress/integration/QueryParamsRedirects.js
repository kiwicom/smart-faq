// @noflow
/* global cy */

describe('Query params redirect to correct article', () => {
  it(`should navigate to an FAQ article with given url`, () => {
    cy.visit('/?help=/faq/RkFRQ2F0ZWdvcnk6ODk=/article/RkFRQXJ0aWNsZTo0MQ==');
  });

  it(`should have correct amount of breadcrumbs`, () => {
    cy.get('[data-cy=faq-breadcrumbs]').as('faq-breadcrumbs');
    cy
      .get('@faq-breadcrumbs')
      .children()
      .should('have.length', 3);
  });

  it(`should have feedback form`, () => {
    cy.get('[data-cy=faq-article-form]').as('faq-article-form');

    cy.get('@faq-article-form').should('exist');
  });

  it(`should display correct article title`, () => {
    cy
      .get('.faq-article-detail')
      .find('h1')
      .contains('Cabin baggage');
  });

  it('should display the root FAQ categories after clicking home breadcrumb', () => {
    cy
      .get('[data-cy=faq-breadcrumbs]')
      .contains('Home')
      .click();

    cy
      .get('[data-cy=faq-categories]')
      .children()
      .first()
      .contains('Baggage')
      .should('exist');
  });
});
