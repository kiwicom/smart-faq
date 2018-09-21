// @noflow

describe('Emergencies', () => {
  before(() => {
    cy.setCookie('showEmergencies', '1');
    cy.loadStaticFAQ();
  });

  it('should show emergency warnings', () => {
    cy.get('.static-faq-body').contains('Current travel issues');
    cy.get('[data-cy=emergency]').should('have.length', 2);
  });

  it('should show FAQ categories', () => {
    cy.get('.static-faq-body').contains('Solve the issue by yourself');
    cy.get('[data-cy=faq-categories]').should('exist');
  });

  it('emergencies should not be visible on subcategories', () => {
    cy
      .get('[data-cy=faq-categories]')
      .find('a')
      .first()
      .click();
    cy.get('[data-cy=emergency]').should('not.exist');
  });
});
