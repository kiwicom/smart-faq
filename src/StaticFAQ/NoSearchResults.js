// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import idx from 'idx';
import { withRouter } from 'react-router-dom';
import { Text, Heading } from '@kiwicom/orbit-components';
import Trans from '@kiwicom/nitro/lib/components/Text';

import FAQCategoryList from './FAQCategoryList';

const styles = css`
  div.title {
    margin-top: 52px;
    margin-bottom: 16px;
  }
  ul {
    margin-left: 15px;
  }
  ul li {
    padding-left: 10px;
    margin-left: 10px;
  }
  div.subtitle {
    margin-top: 70px;
  }
  @media only screen and (max-width: 901px) {
    div.content {
      padding-left: 30px;
    }
    div.subtitle {
      margin-bottom: 10px;
    }
  }
`;

type Props = {
  match: {
    params: {
      categoryId: ?string,
      [key: string]: ?string,
    },
    isExact: boolean,
    path: string,
    url: string,
  },
};

const NoSearchResults = (props: Props) => {
  const categoryId = idx(props.match, _ => _.params.categoryId) || null;
  return (
    <React.Fragment>
      {!categoryId && (
        <div className="content">
          <div className="title">
            <Heading type="title3">
              <Trans t={__('smartfaq.faq.no_search_results.title')} />
            </Heading>
          </div>
          <Trans html t={__('smartfaq.faq.no_search_results.description')} />
          <div className="subtitle">
            <Text size="normal" weight="bold">
              <Trans t={__('smartfaq.faq.no_search_results.suggestion')} />
            </Text>
          </div>
        </div>
      )}
      <FAQCategoryList categoryId={categoryId} />
      <style jsx>{styles}</style>
    </React.Fragment>
  );
};

export default withRouter(NoSearchResults);
