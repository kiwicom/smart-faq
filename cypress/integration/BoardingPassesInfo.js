// @noflow
/* global
  Cypress,
  cy
*/

describe('Boarding Passes Info', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=btn-existent-booking]').click();
    cy.get('[data-cy=link-kiwi-login]').click();

    cy.get('[data-cy=input-email]').type(Cypress.env('TEST_USER_EMAIL'));
    cy.get('[data-cy=input-password]').type(Cypress.env('TEST_USER_PASSWORD'));
    cy.get('[data-cy=btn-sign-in]').click();
  });

  it('should display boarding passes info', () => {
    cy.get('[data-cy=btn-boarding-passes]').click();

    cy
      .get('.boardingPassesCard')
      .find('p')
      .contains(
        'Here, you can download your boarding passes or see when they will become available.',
      )
      .get('.boardingPassesRow')
      .should('exist');
  });

  it('should show a specific FAQ', () => {
    cy
      .get('[data-cy=btn-boarding-passes]')
      .click()
      .get('[data-cy=faq-article-link]')
      .contains('PNR numbers');
  });

  it('should show the previous root category after clicking home', () => {
    cy
      .wait(2000)
      .get('[data-cy=faq-categories]')
      .find('a')
      .first()
      .then($faqCard => {
        cy
          .get('[data-cy=btn-boarding-passes]')
          .click()
          .get('.boardingPassesCard');

        cy
          .get('[data-cy=faq-breadcrumbs]')
          .find('.breadcrumb')
          .contains('Home')
          .click();

        cy
          .get('[data-cy=faq-categories]')
          .find('a')
          .first()
          .should($faqCard2 => {
            expect($faqCard2.text()).to.eq($faqCard.text());
          });
      });
  });
});
