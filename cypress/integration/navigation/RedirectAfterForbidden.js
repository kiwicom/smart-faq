// @noflow
/* global cy */

import faqs from '../../fixtures/FAQRootCategoriesResponse.json';

describe('Redirect after 403', () => {
  it('redirects to login screen after GraphQL return 403 for booking', () => {
    const error = { extensions: { proxy: { statusCode: '403' } } };
    cy.mockLogin();
    cy.visitStubbedBooking({ data: null, errors: [error] }, faqs);
  });

  it('url should be correct', () => {
    cy.url().should('contain', 'sign-in');
  });

  it('message should be displayed', () => {
    cy.get('[data-cy=message-expired-session]').should('exist');
  });
});
