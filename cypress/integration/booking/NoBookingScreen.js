// @noflow
/* global
  Cypress,
  cy
*/

describe('No booking version of SmartFAQ', () => {
  before(() => {
    cy.setCookie('showBooking', '0');
    cy.signIntoAccount();
  });

  it('app can be opened without booking screen part', () => {
    cy.get('.static-faq-body').should('exist');
    cy.get('[data-cy=booking-info-screen]').should('not.exist');
    cy.get('[data-cy=sign-out-button]').should('not.exist');
  });

  it('search is above FAQs instead header', () => {
    cy.get('.HeaderFAQ [data-cy=input-staticFAQ]').should('not.exist');
    cy.get('.static-faq-body [data-cy=input-staticFAQ]').should('exist');
  });

  it('it is not possible to sign in', () => {
    cy.get('[data-cy=sign-in-link]').should('not.exist');
  });

  it('back button is in the header', () => {
    cy.clickOnArticle();
    cy
      .get('[data-cy=faq-breadcrumbs] [data-cy=back-button]')
      .should('not.exist');
    cy.get('.HeaderFAQ [data-cy=back-button]').should('exist');
  });
});
