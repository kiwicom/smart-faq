// @noflow

import { DateTime } from 'luxon';

import booking from '../fixtures/BookingOneWayResponse';
import faqs from '../fixtures/FAQRootCategoriesResponse.json';

const testChatNotInArticle = () => {
  cy.get('[data-cy=input-staticFAQ]').type('Kiwi.com Guarantee');
  cy
    .get('[data-cy=faq-article-link]')
    .contains('Kiwi.com Guarantee')
    .click();
  cy.get('[data-cy=faq-article-content]').should('exist');
  cy.get('[data-cy=guaranteeChatButton]').should('not.exist');
};

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

  it('can start the chat session', () => {
    cy.wait(5000); // necessary to give some time to chat to initialize
    cy.get('[data-cy=guaranteeChatButton] button').click();
    cy.get('[data-cy=guaranteeChatButton]').should('not.exist');
    cy.get('[data-cy=guaranteeChatIFrame] iframe').should('exist');
  });

  it('is able to reconnect after reload', () => {
    cy.wait(5000); // necessary to give some time to chat to create session
    cy.go('back');
    cy
      .get('[data-cy=faq-article-link]')
      .contains('Kiwi.com Guarantee')
      .click();
    cy.get('[data-cy=faq-article-content]').should('exist');
    cy.get('[data-cy=guaranteeChatIFrame] iframe').should('exist');
    cy.get('[data-cy=guaranteeChatButton]').should('not.exist');
  });

  it('is not enabled for flights departing in more than 4 hours', () => {
    const departureTime = DateTime.utc().plus(1000 * 60 * 60 * 5); // 5 hours

    cy.mockLogin();
    cy.visitStubbedBooking(booking(departureTime, 'KIWICOM'), faqs);
    testChatNotInArticle();
  });

  it('is never enabled if it is set for whole app', () => {
    const departureTime = DateTime.utc().plus(1000 * 60 * 60 * 3); // 3 hours

    cy.setCookie('enableChat', '0').reload();
    cy.mockLogin();
    cy.visitStubbedBooking(booking(departureTime, 'KIWICOM'), faqs);
    testChatNotInArticle();
  });
});
