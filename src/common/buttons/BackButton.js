// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import idx from 'idx';
import { Text } from '@kiwicom/orbit-components';
import { ChevronLeft } from '@kiwicom/orbit-components/lib/icons';
import Trans from '@kiwicom/nitro/lib/components/Text';

import sectionFAQCategories from '../../StaticFAQ/sectionFAQCategories';

type Props = {|
  type: 'back' | 'search',
  prevScreen?: string,
  history: {
    push: string => void,
    location: { pathname: string },
  },
  match: {
    params: {
      articleId?: string,
      categoryId?: string,
    },
  },
|};

const BackButton = (props: Props) => {
  const { type, prevScreen, history, match } = props;
  const pathname = history.location.pathname;
  const loginPathnames = ['/sign-in', '/kiwi-login', '/forgotten-password'];

  const translationKey =
    type === 'back'
      ? 'smartfaq.back_button.back'
      : 'smartfaq.back_button.search';

  const goBack = () => {
    if (loginPathnames.includes(pathname) && prevScreen) {
      return history.push(prevScreen);
    }

    if (type === 'search') {
      return history.push('/faq');
    }

    if (pathname.includes('article')) {
      const categoryId = idx(match, _ => _.params.categoryId);

      if (categoryId && sectionFAQCategories.includes(categoryId)) {
        return history.push('/faq');
      }

      const url = idx(pathname.match(/(.*)(?=article)/), _ => _[0]) || '';
      return history.push(url);
    } else if (pathname.includes('faq')) {
      return history.push('/faq');
    }
  };

  return (
    <div
      data-cy="back-button"
      className="back"
      onClick={goBack}
      onKeyUp={goBack}
      role="button"
      tabIndex="-1"
    >
      <div className="chevron">
        <ChevronLeft size="small" customColor="#8291a6" />
      </div>
      <Text type="secondary" weight="bold" element="span">
        <Trans t={translationKey} />
      </Text>
      <style jsx>
        {`
          div.back {
            position: absolute;
            top: 18px;
            left: 27px;
            cursor: pointer;
            outline: none;
          }
          div.chevron {
            display: inline-block;
            margin-right: 4px;
          }
          @media only screen and (max-width: 901px) {
            div.back {
              top: 22px;
              left: 21px;
            }
          }
        `}
      </style>
    </div>
  );
};

BackButton.defaultProps = {
  type: 'back',
};

export default withRouter(BackButton);
