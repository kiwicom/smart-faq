// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql } from 'react-relay';

import QueryRenderer from '../relay/QueryRenderer';
import Loader from '../common/Loader';
import ContentHeader from '../ContentHeader';
import FAQArticleDetailContent from './FAQArticleDetailContent';
import type { FAQArticleDetailQuery } from './__generated__/FAQArticleDetailQuery.graphql';
import type { User } from '../types';

const queryFAQArticleDetail = graphql`
  query FAQArticleDetailQuery($id: ID!) {
    FAQArticle(id: $id) {
      ...FAQArticleDetailContent_article
    }
  }
`;

type FAQArticleDetailParams = {
  props: ?FAQArticleDetailQuery,
  error: ?Error,
};

type Props = {
  user: User,
  match: {
    params: {
      articleId: string,
      [key: string]: ?string,
    },
    isExact: boolean,
    path: string,
    url: string,
  },
};

class FAQArticleDetail extends React.Component<Props> {
  renderDetailContent = (params: FAQArticleDetailParams) => {
    if (params.error) {
      return <div>{params.error.message}</div>;
    }
    if (params.props) {
      return <FAQArticleDetailContent article={params.props.FAQArticle} />;
    }

    return <Loader />;
  };

  render() {
    const articleId = idx(this.props.match, _ => _.params.articleId);

    return (
      <div className="faq-article-detail">
        {!this.props.user && <ContentHeader />}
        <QueryRenderer
          query={queryFAQArticleDetail}
          variables={{ id: articleId }}
          render={this.renderDetailContent}
        />
        <style jsx>
          {`
            .faq-article-detail {
              width: 480px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default withUser(FAQArticleDetail);
