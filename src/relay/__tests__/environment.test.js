// @flow

import { fetchQuery } from '../environment';

beforeEach(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => ({
        data: null,
        errors: [
          {
            extensions: {
              proxy: {
                statusCode: '403',
                url: 'http://a.b',
              },
            },
            message: 'custom error message',
            locations: [
              {
                line: 4,
                column: 5,
              },
            ],
            path: ['currency', 'format'],
          },
        ],
      }),
    });
});

it('throws error when not authorized', async () => {
  await expect(fetchQuery({}, {})).rejects.toThrowError('Forbidden 403');
});
