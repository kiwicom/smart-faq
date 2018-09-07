// @flow

import { commitMutation, graphql } from 'react-relay';

import createEnvironment from '../relay/environment';

const mutation = graphql`
  mutation VoteArticleMutation($articleId: ID!, $vote: VoteType!) {
    voteFAQArticle(id: $articleId, vote: $vote) {
      id
    }
  }
`;

export default (
  articleId: string,
  vote: string,
  callback: () => void,
  errorCallback: () => void,
) => {
  const variables = {
    articleId,
    vote,
  };
  commitMutation(createEnvironment(), {
    mutation,
    variables,
    onCompleted: () => callback(),
    onError: () => errorCallback(),
  });
};
