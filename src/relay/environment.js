// @noflow

import {
  Environment,
  Network,
  RecordSource,
  Store,
  QueryResponseCache,
} from 'relay-runtime';

import { DEFAULT_LOCALE } from '../helpers/frontendLanguageToLocale';

require('isomorphic-fetch');
// used when smart FAQ installed as dependency
const uri = 'https://graphql.kiwi.com';
const cache = new QueryResponseCache({ size: 200, ttl: 30 * 60 * 1000 });

export const ERROR_FORBIDDEN = 'Forbidden 403';

const buildFetchQuery = (
  token: string = '',
  locale: string = DEFAULT_LOCALE,
) => {
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
    if (
      json.errors &&
      json.errors.length > 0 &&
      json.errors.some(e => e._proxy.statusCode === 403)
    ) {
      throw new Error(ERROR_FORBIDDEN);
    }

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
