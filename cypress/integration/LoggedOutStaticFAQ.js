// @noflow
/* global cy */

describe('Display Static FAQ', () => {
  it('User can navigate into FAQ Article', () => {
    cy.visit('/');
    cy.get('[data-cy=btn-nonexistent-booking]').trigger('click');
    cy.get('.signInOrBack span').contains('Sign In');

    cy
      .get('[data-cy=faq-categories]')
      .find('a')
      .first()
      .click();

    cy.get('.signInOrBack span').contains('Back');

    cy.get('[data-cy=faq-breadcrumbs]').as('faq-breadcrumbs');
    cy.get('[data-cy=scrollable-box]').as('faq-box');

    cy
      .get('@faq-breadcrumbs')
      .children()
      .should('have.length', 2);

    cy
      .get('@faq-box')
      .children()
      .first()
      .click();

    cy
      .get('@faq-breadcrumbs')
      .children()
      .should('have.length', 3);

    cy
      .get('@faq-box')
      .find('[data-cy=faq-article-link]')
      .first()
      .click();

    cy
      .get('@faq-breadcrumbs')
      .children()
      .should('have.length', 4);
  });

  it('FAQ Article should have all the necessary data', () => {
    cy
      .get('.faq-article-perex')
      .children()
      .should('exist');

    cy.get('.faq-article-text').should('exist');

    cy.get('.FAQArticleFeedback').should('exist');
  });

  it('User can submit some feedback on a FAQ article', () => {
    cy.server();
    cy.fixture('contact_response.json').as('contactResponse');
    cy.route('POST', 'https://graphql.kiwi.com/', '@contactResponse');

    const faqFeedback = 'This is my feedback!';
    cy
      .get('.FAQArticleFeedback')
      .find('button')
      .click();

    cy.get('[data-cy=faq-article-form]').should('exist');

    cy
      .get('[data-cy=faq-article-form]')
      .find('textarea')
      .type(faqFeedback)
      .should('have.value', faqFeedback);

    cy
      .get('[data-cy=faq-article-form]')
      .find('.button button')
      .click();

    cy
      .get('[data-cy=faq-article-form]')
      .find('.thank-you')
      .should('exist');
  });

  it('User can navigate with breadcrumbs', () => {
    cy.get('[data-cy=faq-breadcrumbs]').as('faq-breadcrumbs');

    cy.get('[data-cy=back-button]').click();

    cy
      .get('@faq-breadcrumbs')
      .children()
      .first()
      .click();

    cy.get('@faq-breadcrumbs').should('not.exist');

    cy.get('.signInOrBack span').contains('Sign In');
  });
});
