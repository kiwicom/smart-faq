/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AccordionTripSummary_trip$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type MulticityTrip_booking$ref: FragmentReference;
export type MulticityTrip_booking = {|
  +trips: ?$ReadOnlyArray<?{|
    +$fragmentRefs: AccordionTripSummary_trip$ref,
  |}>,
  +$refType: MulticityTrip_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MulticityTrip_booking",
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
          "kind": "FragmentSpread",
          "name": "AccordionTripSummary_trip",
          "args": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'ab1cba3e03fd1cd4ea2372b70b7e71ff';
module.exports = node;
