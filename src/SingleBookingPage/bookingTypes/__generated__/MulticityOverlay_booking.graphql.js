/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Multicity_booking$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type MulticityOverlay_booking$ref: FragmentReference;
export type MulticityOverlay_booking = {|
  +trips: ?$ReadOnlyArray<?{|
    +duration: ?number,
  |}>,
  +$fragmentRefs: Multicity_booking$ref,
  +$refType: MulticityOverlay_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MulticityOverlay_booking",
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
      "name": "Multicity_booking",
      "args": null
    }
  ]
};
(node/*: any*/).hash = 'c5c9d14adfb49286c5ac483ecb671134';
module.exports = node;
