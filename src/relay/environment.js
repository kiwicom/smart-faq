// @noflow

import {
  Environment,
  Network,
  RecordSource,
  Store,
  QueryResponseCache,
} from 'relay-runtime';
import { getSessionToken } from '../helpers/Auth';

require('isomorphic-fetch');
// used when smart FAQ installed as dependency
const uri = 'https://graphql.kiwi.com';
const cache = new QueryResponseCache({ size: 200, ttl: 30 * 60 * 1000 });

const buildFetchQuery = (token: string = '') => {
  return function fetchQuery(operation, variables) {
    const cachedData = cache.get(operation.text, variables);
    if (cachedData && operation.operationKind === 'query') {
      return cachedData;
    }
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
    }).then(response => {
      const data = response.json();
      cache.set(operation.text, variables, data);
      return data;
    });
  };
};

const buildEnvironment = () => {
  return new Environment({
    network: Network.create(buildFetchQuery(getSessionToken())),
    store: new Store(new RecordSource()),
  });
};

export default buildEnvironment;
