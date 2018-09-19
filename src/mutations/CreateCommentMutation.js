// @flow

import { commitMutation, graphql } from 'react-relay';

import createEnvironment from '../relay/environment';
import { simpleTracker } from '../helpers/analytics/trackers';

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
  commentLimitExceededCallback: () => void,
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
      }

      if (errors[0].extensions.proxy.statusCode === '429') {
        simpleTracker('smartFAQCategories', { action: 'commentLimitReached' });
        commentLimitExceededCallback();
      }
    },
    onError: () => {
      errorCallback();
    },
  });
};
