// @flow

export const fromGlobalId = (globalId: string | null) => {
  if (!globalId) return { type: '', id: '' };
  const attrs = new Buffer(globalId, 'base64').toString().split(':');
  return {
    type: attrs[0],
    id: attrs[1],
  };
};

export const resourceId = (globalId: string | null) =>
  fromGlobalId(globalId).id;
