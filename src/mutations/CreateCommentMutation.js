// @flow

import { commitMutation, graphql } from 'react-relay';

import createEnvironment from '../relay/environment';

const commentType = 'OTHER';

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

export default (articleId: string, comment: string, callback: () => void) => {
  const variables = {
    articleId,
    type: commentType,
    comment,
  };
  commitMutation(createEnvironment(), {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (!errors) {
        callback();
      } else {
        console.error('Error response received from server.', errors); //eslint-disable-line
      }
    },
    onError: err => console.error(err), //eslint-disable-line
  });
};
