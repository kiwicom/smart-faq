// @noflow

Cypress.Commands.add('mockLogin', () => {
  const login = Cypress.env('TEST_USER_EMAIL');
  const password = Cypress.env('TEST_USER_PASSWORD');
  const authorization = Cypress.env('KIWILOGIN_USER');
  const options = {
    method: 'post',
    url: 'https://auth.skypicker.com/v1/user.login',
    headers: {
      Authorization: 'Basic ' + window.btoa(`${authorization}:`),
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      login,
      password,
    }),
  };

  cy.request(options).then(({ body }) => {
    cy.setCookie('mockedLogin', body.token);
  });
});
