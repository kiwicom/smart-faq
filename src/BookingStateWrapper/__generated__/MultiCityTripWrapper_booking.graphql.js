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
  +isPastBooking: ?boolean,
  +databaseId: ?number,
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
      "kind": "ScalarField",
      "alias": null,
      "name": "isPastBooking",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
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
(node/*: any*/).hash = 'bd20dd7b42cdcff2679899bd74eaecd0';
module.exports = node;
