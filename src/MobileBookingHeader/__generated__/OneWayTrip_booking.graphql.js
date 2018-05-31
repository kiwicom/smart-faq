/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AccordionTripSummary_trip$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type OneWayTrip_booking$ref: FragmentReference;
export type OneWayTrip_booking = {|
  +trip: ?{|
    +$fragmentRefs: AccordionTripSummary_trip$ref,
  |},
  +$refType: OneWayTrip_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "OneWayTrip_booking",
  "type": "BookingOneWay",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "trip",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "AccordionTripSummary_trip",
          "args": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'bfebd2fab7a9303c08699c724a8290cf';
module.exports = node;
