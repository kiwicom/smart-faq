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
    +leg: ?{|
      +departure: ?{|
        +time: ?any,
      |},
    |},
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
          "kind": "LinkedField",
          "alias": null,
          "name": "leg",
          "storageKey": null,
          "args": null,
          "concreteType": "Leg",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "departure",
              "storageKey": null,
              "args": null,
              "concreteType": "RouteStop",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "time",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
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
(node/*: any*/).hash = 'e3126536cda510cfd1d5f5a2307da7b9';
module.exports = node;
