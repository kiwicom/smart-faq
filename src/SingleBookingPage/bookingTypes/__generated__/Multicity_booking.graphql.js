/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AccordionTripSummary_trip$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Multicity_booking$ref: FragmentReference;
export type Multicity_booking = {|
  +trips: ?$ReadOnlyArray<?{|
    +$fragmentRefs: AccordionTripSummary_trip$ref,
  |}>,
  +$refType: Multicity_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Multicity_booking",
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
(node/*: any*/).hash = '93086f4ed3b2b77271a6ab551105dd9d';
module.exports = node;
