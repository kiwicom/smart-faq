/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MulticityTrip_booking$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type MulticityOverlayTrip_booking$ref: FragmentReference;
export type MulticityOverlayTrip_booking = {|
  +trips: ?$ReadOnlyArray<?{|
    +duration: ?number,
  |}>,
  +$fragmentRefs: MulticityTrip_booking$ref,
  +$refType: MulticityOverlayTrip_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MulticityOverlayTrip_booking",
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
          "kind": "ScalarField",
          "alias": null,
          "name": "duration",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "MulticityTrip_booking",
      "args": null
    }
  ]
};
(node/*: any*/).hash = 'fa2e9943c930537f38303cab2e9c229f';
module.exports = node;
