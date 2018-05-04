// @noflow

import {
  Environment,
  Network,
  RecordSource,
  Store,
  QueryResponseCache,
} from 'relay-runtime';

require('isomorphic-fetch');
// used when smart FAQ installed as dependency
const uri = 'https://graphql.kiwi.com';
const cache = new QueryResponseCache({ size: 200, ttl: 30 * 60 * 1000 });

const buildFetchQuery = (token: string = '', locale: string = 'en_US') => {
  return async function fetchQuery(operation, variables, cacheConfig) {
    const forceFetch = cacheConfig.force;
    const isQuery = operation.operationKind === 'query';
    if (!forceFetch && isQuery) {
      const cachedData = cache.get(operation.text, variables);
      if (cachedData) {
        return cachedData;
      }
    }
    const response = await fetch(process.env.GRAPHQL_URI || uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': locale,
        Authorization: token,
      },
      body: JSON.stringify({
        query: operation.text, // GraphQL text from input
        variables,
      }),
    });
    const json = await response.json();

    if (!forceFetch && isQuery) {
      cache.set(operation.text, variables, json);
    }

    return json;
  };
};

const createEnvironment = (token: ?string, locale: ?string) => {
  return new Environment({
    network: Network.create(buildFetchQuery(token, locale)),
    store: new Store(new RecordSource()),
  });
};

export default createEnvironment;
