// @noflow

import { DateTime } from 'luxon';

import booking from '../fixtures/BookingOneWayResponse';
import faqs from '../fixtures/FAQRootCategoriesResponse.json';

describe('Guarantee Chat', () => {
  it('is enabled for flights departing in less than 4 hours', () => {
    const departureTime = DateTime.utc().plus(1000 * 60 * 60 * 3); // 3 hours

    cy.mockLogin();
    cy.visitStubbedBooking(booking(departureTime, 'KIWICOM'), faqs);
    cy
      .get('[data-cy=faq-article-link]')
      .contains('Kiwi.com Guarantee')
      .click();
    cy.get('[data-cy=guaranteeChatButton]').should('exist');
    cy.get('[data-cy=guaranteeChatIFrame]').should('exist');
  });

  it('is not enabled for flights departing in more than 4 hours', () => {
    const departureTime = DateTime.utc().plus(1000 * 60 * 60 * 5); // 5 hours

    cy.mockLogin();
    cy.visitStubbedBooking(booking(departureTime, 'KIWICOM'), faqs);
    cy.get('[data-cy=input-staticFAQ]').type('Kiwi.com Guarantee');
    cy
      .get('[data-cy=faq-article-link]')
      .contains('Kiwi.com Guarantee')
      .click();
    cy.get('[data-cy=guaranteeChatButton]').should('not.exist');
  });
});
