/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type VehicleType = ('AIRCRAFT' | 'BUS' | 'TRAIN' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type AccordionLegTypeIcon_leg$ref: FragmentReference;
export type AccordionLegTypeIcon_leg = {|
  +type: ?VehicleType,
  +$refType: AccordionLegTypeIcon_leg$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AccordionLegTypeIcon_leg",
  "type": "Leg",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = '785454986576990689f365dc1ffecec5';
module.exports = node;
