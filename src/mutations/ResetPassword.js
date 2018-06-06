// @flow

import { commitMutation, graphql } from 'react-relay';

import createEnvironment from '../relay/environment';

const mutation = graphql`
  mutation ResetPasswordMutation($email: String!) {
    resetPassword(email: $email) {
      success
    }
  }
`;

export default (email: string) => {
  const variables = { email };
  return new Promise((resolve, reject) =>
    commitMutation(createEnvironment(), {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: error => reject(error),
    }),
  );
};
