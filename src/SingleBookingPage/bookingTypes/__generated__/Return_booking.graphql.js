/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AccordionTripSummary_trip$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Return_booking$ref: FragmentReference;
export type Return_booking = {|
  +outbound: ?{|
    +$fragmentRefs: AccordionTripSummary_trip$ref,
  |},
  +inbound: ?{|
    +$fragmentRefs: AccordionTripSummary_trip$ref,
  |},
  +$refType: Return_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "AccordionTripSummary_trip",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "Return_booking",
  "type": "BookingReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "outbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "inbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": v0
    }
  ]
};
})();
(node/*: any*/).hash = '69a6e790314e56d91762681c893f635c';
module.exports = node;
