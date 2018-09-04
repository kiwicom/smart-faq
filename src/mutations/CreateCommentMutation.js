// @flow

import { commitMutation, graphql } from 'react-relay';

import createEnvironment from '../relay/environment';

const mutation = graphql`
  mutation CreateCommentMutation(
    $articleId: ID!
    $type: FAQCommentType!
    $comment: String!
  ) {
    addFAQArticleComment(id: $articleId, type: $type, comment: $comment) {
      id
    }
  }
`;

export default (
  articleId: string,
  type: string,
  comment: string,
  callback: () => void,
  errorCallback: () => void,
) => {
  const variables = {
    articleId,
    type,
    comment,
  };
  commitMutation(createEnvironment(), {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (!errors) {
        callback();
      } else {
        errorCallback();
      }
    },
    onError: () => errorCallback(),
  });
};
