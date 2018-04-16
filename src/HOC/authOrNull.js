// @flow
import * as React from 'react';

type Props = {
  token: string,
};

const authOrNull = (BaseComponent: React.ComponentType<any>) => {
  const AuthOrNull = (props: Props) => {
    return props.token ? <BaseComponent {...props} /> : null;
  };
  return AuthOrNull;
};

export default authOrNull;
