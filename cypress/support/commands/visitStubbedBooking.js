// @noflow

const responseStub = result => {
  return {
    json() {
      return Promise.resolve(result);
    },
    text() {
      return Promise.resolve(JSON.stringify(result));
    },
    ok: true,
  };
};

const serverStub = operations => (path, req) => {
  const { operationName } = JSON.parse(req.body);

  if (Object.keys(operations).indexOf(operationName) !== false) {
    return Promise.resolve(responseStub(operations[operationName]));
  }

  return Promise.reject(new Error(`Not found: ${path}`));
};

Cypress.Commands.add('visitStubbedBooking', (booking, faqs) => {
  const operations = {
    NearestBookingQuery: booking,
    FAQCategoryListRootQuery: faqs,
  };

  cy
    .visit('/', {
      onBeforeLoad: win => {
        win._fetch = win.fetch;
        cy
          .stub(win, 'fetch')
          .callsFake(serverStub(operations))
          .as('fetch stub');
      },
    })
    .then(contentWindow => {
      contentWindow.fetch = contentWindow._fetch;
    });
});
