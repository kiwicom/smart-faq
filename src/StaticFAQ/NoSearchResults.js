// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import idx from 'idx';
import { withRouter } from 'react-router-dom';

import FAQCategoryList from './FAQCategoryList';

const styles = css`
  p.title {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.2;
    color: #171b1e;
    margin-top: 52px;
    margin-bottom: 16px;
  }
  ul li {
    font-size: 14px;
    line-height: 1.4;
    text-align: left;
    color: #46515e;
    padding-left: 15px;
    margin-left: 15px;
  }
  p.subtitle {
    margin-top: 70px;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.4;
    color: #46515e;
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
        <div>
          <p className="title">
            Your search didn&apos;t match any of our articles.
          </p>
          <ul>
            <li>Try alternative spellings</li>
            <li>Try fewer words (e.g. infant)</li>
            <li>Try different keywords</li>
            <li>Try a more general search</li>
          </ul>
          <p className="subtitle">Maybe, consider one of the topics below?</p>
        </div>
      )}
      <FAQCategoryList categoryId={categoryId} />
      <style jsx>{styles}</style>
    </React.Fragment>
  );
};

export default withRouter(NoSearchResults);
