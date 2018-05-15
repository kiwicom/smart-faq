/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AccordionBody_legs$ref = any;
type CarrierLogoWrapper_legs$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type AccordionTripSummary_trip$ref: FragmentReference;
export type AccordionTripSummary_trip = {|
  +departure: ?{|
    +localTime: ?any,
    +airport: ?{|
      +locationId: ?string,
      +city: ?{|
        +name: ?string,
      |},
    |},
  |},
  +arrival: ?{|
    +airport: ?{|
      +locationId: ?string,
      +city: ?{|
        +name: ?string,
      |},
    |},
  |},
  +legs: ?$ReadOnlyArray<?{|
    +airline: ?{|
      +name: ?string,
      +code: ?string,
      +logoUrl: ?string,
    |},
    +$fragmentRefs: (CarrierLogoWrapper_legs$ref & AccordionBody_legs$ref),
  |}>,
  +$refType: AccordionTripSummary_trip$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "locationId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "city",
      "storageKey": null,
      "args": null,
      "concreteType": "LocationArea",
      "plural": false,
      "selections": [
        v0
      ]
    }
  ]
};
return {
  "kind": "Fragment",
  "name": "AccordionTripSummary_trip",
  "type": "Trip",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "localTime",
          "args": null,
          "storageKey": null
        },
        v1
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        v1
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "legs",
      "storageKey": null,
      "args": null,
      "concreteType": "Leg",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "airline",
          "storageKey": null,
          "args": null,
          "concreteType": "Airline",
          "plural": false,
          "selections": [
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "code",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "logoUrl",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "CarrierLogoWrapper_legs",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "AccordionBody_legs",
          "args": null
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = 'c76ee4e3782fb9b248fd460f2be9953b';
module.exports = node;
