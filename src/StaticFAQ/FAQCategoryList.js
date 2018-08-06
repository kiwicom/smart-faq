// @flow

import idx from 'idx';
import * as React from 'react';
import { Heading } from '@kiwicom/orbit-components';
import { graphql } from 'react-relay';
import { Link, withRouter } from 'react-router-dom';

import { Desktop } from '../common/Responsive';
import {
  ExtraInfoState,
  categories as extraCategories,
  type ExtraInfoStateType,
} from '../context/ExtraInfoState';
import UserStatus from '../helpers/UserStatus';
import { Loader, ScrollableBox } from '../common';
import QueryRenderer from '../relay/QueryRenderer';
import BaggageInfo from './FAQExtraInfo/BaggageInfo';
import BoardingPassesInfo from './FAQExtraInfo/BoardingPassesInfo';
import FAQArticle from './FAQArticle';
import FAQCategory from './FAQCategory';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import StaticFAQError from './StaticFAQError';
import { simpleTracker } from '../helpers/analytics/trackers';
import type { FAQArticle_article } from './__generated__/FAQArticle_article.graphql';
import type { FAQCategory_category } from './__generated__/FAQCategory_category.graphql';
import type { FAQCategoryListRootQueryResponse } from './__generated__/FAQCategoryListRootQuery.graphql';
import type { FAQCategoryListSubcategoryQueryResponse } from './__generated__/FAQCategoryListSubcategoryQuery.graphql';
import { BookingState, type FAQSectionType } from '../context/BookingState';

type ComponentProps = {
  categoryId: string | null,
  tree: 'EMERGENCIES' | 'SMARTFAQ',
  history: {
    location: {
      pathname: string,
    },
  },
};

type ContainerProps = {
  section: FAQSectionType,
};

type Props = ComponentProps & ContainerProps;

type RootQueryRendererParams = {
  props: ?FAQCategoryListRootQueryResponse,
  error: ?Error,
};

type SubcategoryQueryRendererParams = {
  props: ?FAQCategoryListSubcategoryQueryResponse,
  error: ?Error,
};

type CategoryFragment = {|
  +id: string,
  +title: ?string,
  +$fragmentRefs: FAQCategory_category,
|};
type FAQArticlePerexFragment = {|
  +id: string,
  +$fragmentRefs: FAQArticle_article,
|};

const queryRoot = graphql`
  query FAQCategoryListRootQuery($section: FAQSection) {
    emergencies: allFAQCategories(tree: EMERGENCIES) {
      edges {
        node {
          id
          title
          ...FAQCategory_category
        }
      }
    }
    allFAQCategories(section: $section) {
      edges {
        node {
          id
          title
          ...FAQCategory_category
        }
      }
    }
  }
`;
const querySubcategory = graphql`
  query FAQCategoryListSubcategoryQuery($id: ID!, $tree: FAQTree!) {
    FAQCategory(id: $id, tree: $tree) {
      id
      title
      subcategories {
        id
        title
        ...FAQCategory_category
      }
      ancestors {
        id
        ...Breadcrumbs_breadcrumbs
      }
      FAQs {
        id
        ...FAQArticle_article
      }
    }
  }
`;
const categoryClicked = (category: CategoryFragment) => () =>
  simpleTracker('smartFAQCategories', {
    action: 'clickOnCategory',
    categoryId: category.id,
    categoryName: category.title || '',
  });
class RawFAQCategoryList extends React.Component<Props> {
  renderFAQArticlePerexes = (
    faqs: $ReadOnlyArray<?FAQArticlePerexFragment>,
    categoryId: string,
  ) => {
    return (
      <div>
        {faqs
          .filter(Boolean)
          .map(faq => (
            <FAQArticle key={faq.id} article={faq} categoryId={categoryId} />
          ))}
      </div>
    );
  };

  renderCategories = (
    categories: $ReadOnlyArray<CategoryFragment>,
    isEmergency: boolean = false,
  ) => {
    const { pathname } = this.props.history.location;
    const isBaggageRoute = pathname.includes(extraCategories.BAGGAGE);
    const isBoardingPassRoute = pathname.includes(
      extraCategories.BOARDING_PASS,
    );
    return (
      <React.Fragment>
        <Desktop>
          <UserStatus.LoggedIn>
            {(isBaggageRoute || isBoardingPassRoute) && (
              <ExtraInfoState.Consumer>
                {({ activeExtraInfoCategory }: ExtraInfoStateType) =>
                  activeExtraInfoCategory === 'baggage' ? (
                    <BaggageInfo />
                  ) : (
                    <BoardingPassesInfo />
                  )
                }
              </ExtraInfoState.Consumer>
            )}
          </UserStatus.LoggedIn>
        </Desktop>
        <div data-cy="faq-categories">
          {categories.map(category => {
            if (category) {
              return (
                <Link
                  key={category.id}
                  to={
                    isEmergency
                      ? `/emergency/${category.id}`
                      : `/faq/${category.id}`
                  }
                  style={{ textDecoration: 'none', display: 'block' }}
                  onClick={categoryClicked(category)}
                >
                  <FAQCategory category={category} isWarning={isEmergency} />
                </Link>
              );
            }

            return null;
          })}
        </div>
      </React.Fragment>
    );
  };

  renderRootCategory = (rendererProps: RootQueryRendererParams) => {
    if (rendererProps.error) {
      return <StaticFAQError />;
    }

    if (rendererProps.props) {
      const edges =
        idx(rendererProps.props, _ => _.allFAQCategories.edges) || [];
      const categories = edges.map(edge => edge && edge.node).filter(Boolean);
      const emergencies =
        idx(rendererProps.props, _ => _.emergencies.edges) || [];

      if (!emergencies.length) {
        return this.renderCategories(categories);
      }

      return (
        <div>
          <div className="rootHeading">
            <Heading type="title3">Current travel issues:</Heading>
          </div>
          {this.renderCategories(
            emergencies.map(edge => edge && edge.node).filter(Boolean),
            true,
          )}
          <div className="rootHeading">
            <Heading type="title3">Solve the issue by yourself:</Heading>
          </div>
          {this.renderCategories(categories)}
          <style jsx>
            {`
              .rootHeading {
                margin-top: 32px;
              }
            `}
          </style>
        </div>
      );
    }

    return <Loader />;
  };

  renderSubcategory = (rendererProps: SubcategoryQueryRendererParams) => {
    if (rendererProps.error) {
      return <StaticFAQError />;
    }

    const FAQCategory = idx(rendererProps.props, _ => _.FAQCategory);

    if (rendererProps.props) {
      const categories =
        idx(rendererProps.props, _ => _.FAQCategory.subcategories) || [];
      const ancestors =
        idx(rendererProps.props, _ => _.FAQCategory.ancestors) || [];
      const currentCategory = idx(
        rendererProps.props,
        _ => _.FAQCategory.title,
      );
      const faqs = idx(rendererProps.props, _ => _.FAQCategory.FAQs) || [];
      const categoryId = idx(rendererProps.props, _ => _.FAQCategory.id) || '';

      if (FAQCategory === null) {
        return <StaticFAQError />;
      }

      return (
        <React.Fragment>
          <div>
            <Breadcrumbs
              breadcrumbs={ancestors}
              currentCategory={currentCategory}
            />
          </div>
          <ScrollableBox>
            {this.renderCategories(categories.filter(Boolean))}
            {this.renderFAQArticlePerexes(faqs, categoryId)}
          </ScrollableBox>
        </React.Fragment>
      );
    }

    return <Loader />;
  };

  render() {
    const { categoryId, section, tree } = this.props;

    if (categoryId) {
      return (
        <QueryRenderer
          query={querySubcategory}
          render={this.renderSubcategory}
          variables={{ id: categoryId, tree }}
        />
      );
    }

    return (
      <QueryRenderer
        query={queryRoot}
        render={this.renderRootCategory}
        variables={{ section }}
      />
    );
  }
}

const FAQCategoryList = (props: ComponentProps) => (
  <BookingState.Consumer>
    {({ FAQSection }) => <RawFAQCategoryList section={FAQSection} {...props} />}
  </BookingState.Consumer>
);

export default withRouter(FAQCategoryList);
