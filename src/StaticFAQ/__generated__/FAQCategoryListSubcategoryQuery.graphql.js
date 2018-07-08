/**
 * @flow
 * @relayHash c2a6c80e3e4572940fef1f8010871ac3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Breadcrumbs_breadcrumbs$ref = any;
type FAQArticle_article$ref = any;
type FAQCategory_category$ref = any;
export type FAQSection = ('BEFORE_BOOKING' | 'PAST_BOOKING' | 'UPCOMING_BOOKING' | 'URGENT_BOOKING' | '%future added value');
export type FAQCategoryListSubcategoryQueryVariables = {|
  id: string,
  section?: ?FAQSection,
|};
export type FAQCategoryListSubcategoryQueryResponse = {|
  +FAQCategory: ?{|
    +id: string,
    +title: ?string,
    +subcategories: ?$ReadOnlyArray<?{|
      +id: string,
      +title: ?string,
      +$fragmentRefs: FAQCategory_category$ref,
    |}>,
    +ancestors: ?$ReadOnlyArray<?{|
      +id: string,
      +$fragmentRefs: Breadcrumbs_breadcrumbs$ref,
    |}>,
    +FAQs: ?$ReadOnlyArray<?{|
      +id: string,
      +$fragmentRefs: FAQArticle_article$ref,
    |}>,
  |},
|};
*/


/*
query FAQCategoryListSubcategoryQuery(
  $id: ID!
  $section: FAQSection
) {
  FAQCategory(id: $id, section: $section) {
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

fragment FAQCategory_category on FAQCategory {
  id
  title
  perex
}

fragment Breadcrumbs_breadcrumbs on FAQCategory {
  id
  title
}

fragment FAQArticle_article on FAQArticle {
  id
  title
  perex
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "section",
    "type": "FAQSection",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  },
  {
    "kind": "Variable",
    "name": "section",
    "variableName": "section",
    "type": "FAQSection"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = [
  v2,
  v3,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "perex",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FAQCategoryListSubcategoryQuery",
  "id": null,
  "text": "query FAQCategoryListSubcategoryQuery(\n  $id: ID!\n  $section: FAQSection\n) {\n  FAQCategory(id: $id, section: $section) {\n    id\n    title\n    subcategories {\n      id\n      title\n      ...FAQCategory_category\n    }\n    ancestors {\n      id\n      ...Breadcrumbs_breadcrumbs\n    }\n    FAQs {\n      id\n      ...FAQArticle_article\n    }\n  }\n}\n\nfragment FAQCategory_category on FAQCategory {\n  id\n  title\n  perex\n}\n\nfragment Breadcrumbs_breadcrumbs on FAQCategory {\n  id\n  title\n}\n\nfragment FAQArticle_article on FAQArticle {\n  id\n  title\n  perex\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FAQCategoryListSubcategoryQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "FAQCategory",
        "storageKey": null,
        "args": v1,
        "concreteType": "FAQCategory",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subcategories",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategory",
            "plural": true,
            "selections": [
              v2,
              v3,
              {
                "kind": "FragmentSpread",
                "name": "FAQCategory_category",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "ancestors",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategory",
            "plural": true,
            "selections": [
              v2,
              {
                "kind": "FragmentSpread",
                "name": "Breadcrumbs_breadcrumbs",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "FAQs",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQArticle",
            "plural": true,
            "selections": [
              v2,
              {
                "kind": "FragmentSpread",
                "name": "FAQArticle_article",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FAQCategoryListSubcategoryQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "FAQCategory",
        "storageKey": null,
        "args": v1,
        "concreteType": "FAQCategory",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "subcategories",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategory",
            "plural": true,
            "selections": v4
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "ancestors",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategory",
            "plural": true,
            "selections": [
              v2,
              v3
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "FAQs",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQArticle",
            "plural": true,
            "selections": v4
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'a9286b8e65fec70c1749d92656cf882a';
module.exports = node;
