// @flow
import * as React from 'react';
import { Heading, Text, Button } from '@kiwicom/orbit-components';
import { withRouter } from 'react-router-dom';
import css from 'styled-jsx/css';
import Trans from '@kiwicom/nitro/lib/components/Text';

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

type Props = {
  history: {
    push: string => void,
  },
};

class ArticleNotFound extends React.Component<Props> {
  goToFAQ = () => {
    this.props.history.push('/faq/');
  };
  render() {
    return (
      <div className="notFoundContainer">
        <div>
          <Heading>
            <Trans t={__('smartfaq.faq.article.not_found.title')} />
          </Heading>
          <div className="textMargin">
            <Text>
              <Trans t={__('smartfaq.faq.article.not_found.description')} />
            </Text>
          </div>
          <Button onClick={this.goToFAQ}>Open the Help Center</Button>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default withRouter(ArticleNotFound);
