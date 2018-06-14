// @noflow
/* global cy */

describe('Querry params redirect to corect article', () => {
  it(`User should see article about cabin baggage`, () => {
    cy.visit(
      '/?cypress-query=/faq/RkFRQ2F0ZWdvcnk6ODk=/article/RkFRQXJ0aWNsZTo0MQ==',
    );
    cy.get('[data-cy=faq-breadcrumbs]').as('faq-breadcrumbs');
    cy.get('[data-cy=faq-article-form]').as('faq-article-form');

    cy
      .get('@faq-breadcrumbs')
      .children()
      .should('have.length', 4);

    cy.get('@faq-article-form').should('exist');

    cy
      .get('.faq-article-detail')
      .find('h1')
      .contains('What is cabin baggage and how much can I bring?');
  });
});
