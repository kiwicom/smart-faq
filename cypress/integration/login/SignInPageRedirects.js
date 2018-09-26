// @noflow
/* global cy */

describe('SignIn page redirects', () => {
  before(() => {
    cy.visit('/');
    cy.get('[data-cy=btn-existent-booking]').click();
  });

  it('does nothing on reload without user interaction', () => {
    cy.reload();
    cy
      .get('.SignIn')
      .find('h1')
      .contains('Sign in');
    cy.get('[data-cy=link-kiwi-login]').should('exist');
  });

  it('redirect to FAQs with booking on reload with logged in user', () => {
    cy.mockLogin();
    cy.reload();

    cy.get('[data-cy=link-kiwi-login]').should('not.exist');
    cy.get('[data-cy=nearestBooking]').should('exist');
    cy.get('[data-cy=faq-categories]').should('exist');
  });
});
