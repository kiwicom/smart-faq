// @flow
import React from 'react';
import { Heading, Text, Button } from '@kiwicom/orbit-components';
import css from 'styled-jsx/css';

const style = css`
  .notFoundContainer {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
  }
  .textMargin {
    margin-top: 10px;
    margin-bottom: 40px;
  }
`;

function openHelpCenter() {
  var win = window.open('https://www.kiwi.com/helpcenter/', '_blank');
  win.focus();
}

const ArticleNotFound = () => (
  <div className="notFoundContainer">
    <div>
      <Heading>Sorry, that article has ceased to exist</Heading>
      <div className="textMargin">
        <Text>
          It may have been deleted or moved. Or it could just be a temporary
          technical issue.
        </Text>
      </div>
      <Button onClick={openHelpCenter} title="Open the Help Center" />
    </div>
    <style jsx>{style}</style>
  </div>
);

export default ArticleNotFound;
