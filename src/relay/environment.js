// @noflow

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

require('isomorphic-fetch');

const buildFetchQuery = (token: string = '') => {
  return function fetchQuery(operation, variables) {
    return fetch(process.env.GRAPHQL_URI, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        query: operation.text, // GraphQL text from input
        variables,
      }),
    }).then(response => response.json());
  };
};
const buildEnvironment = (token: string = '') => {
  return new Environment({
    network: Network.create(buildFetchQuery(token)),
    store: new Store(new RecordSource()),
  });
};

export default buildEnvironment;
