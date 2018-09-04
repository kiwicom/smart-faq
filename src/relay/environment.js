// @noflow

import {
  Environment,
  Network,
  RecordSource,
  Store,
  QueryResponseCache,
} from 'relay-runtime';
import idx from 'idx';

import { DEFAULT_LOCALE } from '../helpers/frontendLanguageToLocale';

require('isomorphic-fetch');
// used when smart FAQ installed as dependency
const uri = 'https://graphql.kiwi.com';
const cache = new QueryResponseCache({ size: 200, ttl: 30 * 60 * 1000 });

export const ERROR_FORBIDDEN = 'Forbidden 403';

export async function fetchQuery(headers, operation, variables) {
  const response = await fetch(process.env.GRAPHQL_URI || uri, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
      operationName: operation.name,
    }),
  });
  const json = await response.json();
  if (
    json.errors &&
    json.errors.length > 0 &&
    json.errors.some(
      error => idx(error, _ => _.extensions.proxy.statusCode) === '403',
    )
  ) {
    throw new Error(ERROR_FORBIDDEN);
  }

  return json;
}

const buildQueryFetcher = (
  token: string = '',
  locale: string = DEFAULT_LOCALE,
) => {
  return async (operation, variables, cacheConfig) => {
    const forceFetch = cacheConfig.force;
    const isQuery = operation.operationKind === 'query';
    if (!forceFetch && isQuery) {
      const cachedData = cache.get(operation.text, variables);
      if (cachedData) {
        return cachedData;
      }
    }

    const headers = {
      'Content-Type': 'application/json',
      'Accept-Language': locale,
      Authorization: token,
    };

    const json = await fetchQuery(headers, operation, variables);

    if (!forceFetch && isQuery) {
      cache.set(operation.text, variables, json);
    }

    return json;
  };
};

const createEnvironment = (token: ?string, locale: ?string) => {
  return new Environment({
    network: Network.create(buildQueryFetcher(token, locale)),
    store: new Store(new RecordSource()),
  });
};

export default createEnvironment;
