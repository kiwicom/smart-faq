// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import idx from 'idx';
import { withRouter } from 'react-router-dom';
import { Text, Heading } from '@kiwicom/orbit-components';

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
              Your search didn&apos;t match any of our articles.
            </Heading>
          </div>
          <ul>
            <li>
              <Text>Try alternative spellings</Text>
            </li>
            <li>
              <Text>Try fewer words (e.g. infant)</Text>
            </li>
            <li>
              <Text>Try different keywords</Text>
            </li>
            <li>
              <Text>Try a more general search</Text>
            </li>
          </ul>
          <div className="subtitle">
            <Text size="normal" weight="bold">
              Maybe, consider one of the topics below?
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
