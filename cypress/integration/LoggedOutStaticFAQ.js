// @noflow
/* global cy */

describe('Display Static FAQ', () => {
  it('User can navigate into FAQ Article', () => {
    cy.loadStaticFAQ();
    cy.get('[data-cy=sign-in-link]').should($signInLink => {
      // F.I.X.M.E: TextLink Orbit Component is breaking text with space to multiple lines
      // as a temporary fix we used &nbsp;
      expect($signInLink.text()).to.include('Sign');
      expect($signInLink.text()).to.include('In');
    });
    cy
      .get('[data-cy=faq-categories]')
      .find('a')
      .first()
      .click();

    cy.get('.signInOrBack div').contains('Back');

    cy.get('[data-cy=faq-breadcrumbs]').as('faq-breadcrumbs');
    cy.get('[data-cy=scrollable-box]').as('faq-box');

    cy
      .get('@faq-breadcrumbs')
      .children()
      .should('have.length', 2);

    cy
      .get('@faq-box')
      .children()
      .find('[data-cy=faq-article-link]')
      .first()
      .click();

    cy
      .get('@faq-breadcrumbs')
      .children()
      .should('have.length', 3);

    cy
      .get('@faq-breadcrumbs')
      .last()
      .contains('Article');
  });

  it('FAQ Article should have all the necessary data', () => {
    cy
      .get('.faq-article-perex')
      .children()
      .should('exist');

    cy.get('.faq-article-text').should('exist');

    cy.get('.FAQArticleFeedback').should('exist');
  });

  it('User can vote on an FAQ article', () => {
    cy.loadFAQArticle();

    cy.get('.thumb-up').click();

    cy
      .get('[data-cy=faq-article-form]')
      .find('.feedbackMessage')
      .should('exist');
  });

  it('User can submit feedback on an FAQ article', () => {
    cy.loadFAQArticle();

    cy.server();
    cy.fixture('contact_response.json').as('contactResponse');
    cy.route('POST', 'https://graphql.kiwi.com/', '@contactResponse');

    const faqFeedback = 'This is my feedback!';

    cy.get('.thumb-down').click();

    cy
      .get('[data-cy=faq-article-form]')
      .find('.radio-button')
      .first()
      .click()
      .get('button')
      .contains('Submit')
      .click();

    cy.get('[data-cy=faq-article-form]').should('exist');

    cy
      .get('[data-cy=faq-article-form]')
      .find('textarea')
      .type(faqFeedback)
      .should('have.value', faqFeedback);

    cy
      .get('[data-cy=faq-article-form]')
      .get('button')
      .contains('Submit')
      .click();

    cy
      .get('[data-cy=faq-article-form]')
      .find('.feedbackMessage')
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

    cy.get('[data-cy=sign-in-link]').should($signInLink => {
      // F.I.X.M.E: TextLink Orbit Component is breaking text with space to multiple lines
      // as a temporary fix we used &nbsp;
      expect($signInLink.text()).to.include('Sign');
      expect($signInLink.text()).to.include('In');
    });
  });
});
