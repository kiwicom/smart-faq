// @noflow

import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { getSessionToken } from '../helpers/Auth';

require('isomorphic-fetch');
// used when smart FAQ installed as dependency
const uri = 'https://graphql.kiwi.com';

const buildFetchQuery = (token: string = '') => {
  return function fetchQuery(operation, variables) {
    return fetch(process.env.GRAPHQL_URI || uri, {
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

const buildEnvironment = () => {
  return new Environment({
    network: Network.create(buildFetchQuery(getSessionToken())),
    store: new Store(new RecordSource()),
  });
};

export default buildEnvironment;
