/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AccordionLegCities_leg$ref = any;
type AccordionLegTypeIcon_leg$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type AccordionBodyLeg_leg$ref: FragmentReference;
export type AccordionBodyLeg_leg = {|
  +arrival: ?{|
    +time: ?any,
    +localTime: ?any,
  |},
  +departure: ?{|
    +time: ?any,
    +localTime: ?any,
  |},
  +$fragmentRefs: (AccordionLegCities_leg$ref & AccordionLegTypeIcon_leg$ref),
  +$refType: AccordionBodyLeg_leg$ref,
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
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "localTime",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "AccordionBodyLeg_leg",
  "type": "Leg",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "AccordionLegCities_leg",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AccordionLegTypeIcon_leg",
      "args": null
    },
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
    }
  ]
};
})();
(node/*: any*/).hash = 'a3b718d067ea9fab60c81ed75f070ce4';
module.exports = node;
