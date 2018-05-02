/**
 * @flow
 * @relayHash 8b867b663172c64638b2d0af3fd336a4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Breadcrumbs_breadcrumbs$ref = any;
type FAQArticleDetailContent_article$ref = any;
export type Language = ('ar' | 'bg' | 'ca' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'engb' | 'enus' | 'es' | 'esar' | 'et' | 'fi' | 'fr' | 'he' | 'hr' | 'hu' | 'id' | 'is' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'ms' | 'nl' | 'no' | 'pl' | 'pt' | 'ptbr' | 'ptpt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'th' | 'tl' | 'tr' | 'uk' | 'vi' | 'zh' | 'zhcn' | 'zhtw' | '%future added value');
export type FAQArticleDetailQueryVariables = {|
  id: string,
  language?: ?Language,
  category_id: string,
|};
export type FAQArticleDetailQueryResponse = {|
  +FAQArticle: ?{|
    +$fragmentRefs: FAQArticleDetailContent_article$ref,
  |},
  +FAQCategory: ?{|
    +ancestors: ?$ReadOnlyArray<?{|
      +$fragmentRefs: Breadcrumbs_breadcrumbs$ref,
    |}>,
  |},
|};
*/


/*
query FAQArticleDetailQuery(
  $id: ID!
  $language: Language
  $category_id: ID!
) {
  FAQArticle(id: $id, language: $language) {
    ...FAQArticleDetailContent_article
    id
  }
  FAQCategory(id: $category_id) {
    ancestors {
      ...Breadcrumbs_breadcrumbs
      id
    }
    id
  }
}

fragment FAQArticleDetailContent_article on FAQArticle {
  title
  perex
  content
}

fragment Breadcrumbs_breadcrumbs on FAQCategory {
  id
  title
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
    "name": "language",
    "type": "Language",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "category_id",
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
  },
  {
    "kind": "Variable",
    "name": "language",
    "variableName": "language",
    "type": "Language"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "category_id",
    "type": "ID!"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FAQArticleDetailQuery",
  "id": null,
  "text": "query FAQArticleDetailQuery(\n  $id: ID!\n  $language: Language\n  $category_id: ID!\n) {\n  FAQArticle(id: $id, language: $language) {\n    ...FAQArticleDetailContent_article\n    id\n  }\n  FAQCategory(id: $category_id) {\n    ancestors {\n      ...Breadcrumbs_breadcrumbs\n      id\n    }\n    id\n  }\n}\n\nfragment FAQArticleDetailContent_article on FAQArticle {\n  title\n  perex\n  content\n}\n\nfragment Breadcrumbs_breadcrumbs on FAQCategory {\n  id\n  title\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FAQArticleDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "FAQArticle",
        "storageKey": null,
        "args": v1,
        "concreteType": "FAQArticle",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FAQArticleDetailContent_article",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "FAQCategory",
        "storageKey": null,
        "args": v2,
        "concreteType": "FAQCategory",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "ancestors",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategory",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Breadcrumbs_breadcrumbs",
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
    "name": "FAQArticleDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "FAQArticle",
        "storageKey": null,
        "args": v1,
        "concreteType": "FAQArticle",
        "plural": false,
        "selections": [
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "perex",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "content",
            "args": null,
            "storageKey": null
          },
          v4
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "FAQCategory",
        "storageKey": null,
        "args": v2,
        "concreteType": "FAQCategory",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "ancestors",
            "storageKey": null,
            "args": null,
            "concreteType": "FAQCategory",
            "plural": true,
            "selections": [
              v4,
              v3
            ]
          },
          v4
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '5cd7a7d567f28b965d39dff47bdb1c1c';
module.exports = node;
