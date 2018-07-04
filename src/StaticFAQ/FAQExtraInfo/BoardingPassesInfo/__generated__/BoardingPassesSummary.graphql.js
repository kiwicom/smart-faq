/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BoardingPassesDescription$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BoardingPassesSummary$ref: FragmentReference;
export type BoardingPassesSummary = {|
  +boardingPasses: ?$ReadOnlyArray<?{|
    +flightNumber: ?string,
    +$fragmentRefs: BoardingPassesDescription$ref,
  |}>,
  +$refType: BoardingPassesSummary$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BoardingPassesSummary",
  "type": "BookingAssets",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "boardingPasses",
      "storageKey": null,
      "args": null,
      "concreteType": "BoardingPass",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "flightNumber",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "BoardingPassesDescription",
          "args": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '1780a7863cd543f20f077554a04e2c1d';
module.exports = node;
