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
      Authorization:
        'WyJnUDVIdmdlVURmZlU4MVVjVWtBYW4xIiwiQzR0RzR1ZHk3dHdkbDBSeEpQbWFadUl1MnhSUS92NnhCTFJzSS51ZGhoMXAySTduRk5KQVciLDIxMTU4MDg2NjZd.2q4_W34IS8YCX4PshJuKQkZt8VQ',
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
