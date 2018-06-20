// @flow

import { graphql, createFragmentContainer } from 'react-relay';

import TrackedFAQArticle from './TrackedFAQArticle';

export default createFragmentContainer(
  TrackedFAQArticle,
  graphql`
    fragment FAQArticle_article on FAQArticle {
      id
      title
      perex
    }
  `,
);
