// @noflow

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

require('isomorphic-fetch');

// used when smart FAQ installed as dependency
const uri = 'https://graphql.kiwi.com';

function fetchQuery(operation, variables) {
  return fetch(process.env.GRAPHQL_URI || uri, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then(response => response.json());
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
