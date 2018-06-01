// @noflow
/* global
  cy,
  Cypress
*/

const responseStub = response => {
  return {
    json: () => Promise.resolve(response),
    text: () => Promise.resolve(JSON.stringify(response)),
    ok: true,
  };
};

Cypress.Commands.add('mockRequest', mocks => {
  cy.visit('/', {
    onBeforeLoad: win => {
      const originalFunction = win.fetch;

      function fetch(path, request) {
        let response;

        if (path.includes('graphql')) {
          const body = JSON.parse(request.body);
          const query = Object.keys(mocks).find(key => {
            const operationName = body.query.substr(
              body.query.indexOf(key),
              key.length,
            );

            return key === operationName;
          });

          response = mocks[query];
        } else {
          response = mocks[path];
        }

        return response
          ? Promise.resolve(responseStub(response))
          : originalFunction.apply(this, arguments);
      }

      cy.stub(win, 'fetch', fetch).as('mockRequest');
    },
  });
});
