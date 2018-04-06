/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type FAQArticle_article$ref: FragmentReference;
export type FAQArticle_article = {|
  +id: string,
  +title: ?string,
  +perex: ?string,
  +$refType: FAQArticle_article$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FAQArticle_article",
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
    }
  ]
};
(node/*: any*/).hash = 'c7356fabbc70c7392f2927b45d9355cf';
module.exports = node;
