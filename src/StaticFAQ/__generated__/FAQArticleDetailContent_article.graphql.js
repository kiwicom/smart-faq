/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type FAQArticleDetailContent_article$ref: FragmentReference;
export type FAQArticleDetailContent_article = {|
  +title: ?string,
  +perex: ?string,
  +content: ?string,
  +$refType: FAQArticleDetailContent_article$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FAQArticleDetailContent_article",
  "type": "FAQArticle",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
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
    }
  ]
};
(node/*: any*/).hash = 'adaa839f1d7df302cc4181506fe4be72';
module.exports = node;
