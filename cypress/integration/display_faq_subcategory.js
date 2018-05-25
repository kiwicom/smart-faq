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
      .click({ force: true });

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
      .find('.faq-link')
      .first()
      .click({ force: true });

    cy
      .get('@faq-breadcrumbs')
      .children()
      .should('have.length', 4);
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
