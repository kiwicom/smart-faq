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
  +id: string,
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
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
(node/*: any*/).hash = 'e7476ce482415a9ef5a8390f3d9d88cc';
module.exports = node;
