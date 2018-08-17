// @noflow
/* global cy */

import { Requester } from '../../src/helpers/Requests';

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

  it('redirect to FAQs with booking on reload with logged in user', async () => {
    const email = Cypress.env('TEST_USER_EMAIL');
    const password = Cypress.env('TEST_USER_PASSWORD');
    const authorization = Cypress.env('KIWILOGIN_USER');

    const loginToken = await Requester.login(email, password, authorization);
    cy.setCookie('mockedLogin', loginToken);
    cy.reload();

    cy.get('[data-cy=link-kiwi-login]').should('not.exist');
    cy.get('[data-cy=nearestBooking]').should('exist');
    cy.get('[data-cy=faq-categories]').should('exist');
  });
});
