/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AccordionTripSummary_trip$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type OneWay_booking$ref: FragmentReference;
export type OneWay_booking = {|
  +trip: ?{|
    +$fragmentRefs: AccordionTripSummary_trip$ref,
  |},
  +$refType: OneWay_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "OneWay_booking",
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
(node/*: any*/).hash = '3ae44912666791f34583a4c6d7610196';
module.exports = node;
