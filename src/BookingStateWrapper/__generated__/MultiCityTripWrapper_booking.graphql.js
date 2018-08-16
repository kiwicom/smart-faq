/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type MultiCityTripWrapper_booking$ref: FragmentReference;
export type MultiCityTripWrapper_booking = {|
  +trips: ?$ReadOnlyArray<?{|
    +departure: ?{|
      +time: ?any,
    |},
  |}>,
  +$refType: MultiCityTripWrapper_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MultiCityTripWrapper_booking",
  "type": "BookingMulticity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "trips",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": true,
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
    }
  ]
};
(node/*: any*/).hash = '05de26c67393c4fbd7e085d03199b65b';
module.exports = node;
