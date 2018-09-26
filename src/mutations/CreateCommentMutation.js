// @flow

import { commitMutation, graphql } from 'react-relay';
import idx from 'idx';

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
  commentLimitReachedCallback: () => void,
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
        return;
      }

      const isCommentLimitReached =
        idx(errors, _ => _[0].extensions.proxy.statusCode) === '429';

      if (isCommentLimitReached) {
        simpleTracker('smartFAQCategories', { action: 'commentLimitReached' });
        commentLimitReachedCallback();
      } else {
        errorCallback();
      }
    },
    onError: () => {
      errorCallback();
    },
  });
};
