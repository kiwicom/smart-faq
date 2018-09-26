// @noflow
/* global cy */

describe('Mobile search input', () => {
  const verifySearchInput = (dimensions, orientation = null) => {
    cy.viewport(dimensions, orientation);
    cy.visit('/');
    cy.get('[data-cy=btn-nonexistent-booking]').click();

    cy.get('[data-cy=input-staticFAQ]').should('have.length', 1);
  };

  const verifySearchInputForLoggedInUser = (dimensions, orientation = null) => {
    cy.viewport(dimensions, orientation);
    cy.signIntoAccount();
    cy.get('[data-cy=search-button]').click();

    cy.get('[data-cy=input-staticFAQ]').should('have.length', 1);
  };

  it('should display search input for anonymous user on mobile', () => {
    verifySearchInput('iphone-6');
  });

  it('should display search input for anonymous user on mobile landscape mode', () => {
    verifySearchInput('iphone-6', 'landscape');
  });

  it('should display search input for anonymous user on tablet', () => {
    verifySearchInput('ipad-2');
  });

  it('should display search input for anonymous user on tablet landscape mode', () => {
    verifySearchInput('ipad-2', 'landscape');
  });

  it('should display search input for logged in user on mobile', () => {
    verifySearchInputForLoggedInUser('iphone-6');
  });

  it('should display search input for logged in user on mobile landscape mode', () => {
    verifySearchInputForLoggedInUser('iphone-6', 'landscape');
  });

  it('should display search input for logged in user on tablet', () => {
    verifySearchInputForLoggedInUser('ipad-2');
  });

  it('should display search input for logged in user on tablet landscape mode', () => {
    cy.viewport('ipad-2', 'landscape');
    cy.signIntoAccount();
    cy.get('[data-cy=input-staticFAQ]').should('have.length', 1);
  });
});
