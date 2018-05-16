/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type DateAndPassenger_departure$ref: FragmentReference;
export type DateAndPassenger_departure = {|
  +time: ?any,
  +$refType: DateAndPassenger_departure$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "DateAndPassenger_departure",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "time",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'e77e00cb445a881ca683e4d30de8a890';
module.exports = node;
