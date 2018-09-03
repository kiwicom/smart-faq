/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type CoveredBy = ('CARRIER' | 'KIWICOM' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type GuaranteeNeededResolver_upcomingLeg$ref: FragmentReference;
export type GuaranteeNeededResolver_upcomingLeg = {|
  +arrival: ?{|
    +time: ?any,
  |},
  +departure: ?{|
    +time: ?any,
  |},
  +guarantee: ?CoveredBy,
  +$refType: GuaranteeNeededResolver_upcomingLeg$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "GuaranteeNeededResolver_upcomingLeg",
  "type": "Leg",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v0
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "guarantee",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
(node/*: any*/).hash = '2b452b5a418f3d1bd8bd567c050ca941';
module.exports = node;
