/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Breadcrumbs_breadcrumbs$ref = any;
type FAQArticle_article$ref = any;
type FAQCategory_category$ref = any;
export type FAQCategoryListSubcategoryQueryVariables = {|
  id: string,
|};
export type FAQCategoryListSubcategoryQueryResponse = {|
  +FAQCategory: ?{|
    +id: string,
    +title: ?string,
    +subcategories: ?$ReadOnlyArray<?{|
      +id: string,
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
) {
    title
    subcategories {
      id
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
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
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
module.exports = node;
