/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BookingStatus = ('CANCELLED' | 'CLOSED' | 'CONFIRMED' | 'DELETED' | 'EXPIRED' | 'NEW' | 'PENDING' | 'REFUNDED' | '%future added value');
export type CoveredBy = ('CARRIER' | 'KIWICOM' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type GuaranteeNeededResolver_booking$ref: FragmentReference;
export type GuaranteeNeededResolver_booking = {|
  +databaseId: ?number,
  +status: ?BookingStatus,
  +contactDetails: ?{|
    +phone: ?string,
    +email: ?string,
  |},
  +upcomingLeg: ?{|
    +guarantee: ?CoveredBy,
    +arrival: ?{|
      +time: ?any,
      +airport: ?{|
        +city: ?{|
          +name: ?string,
        |},
        +code: ?string,
      |},
    |},
    +departure: ?{|
      +time: ?any,
      +airport: ?{|
        +city: ?{|
          +name: ?string,
        |},
        +code: ?string,
      |},
    |},
  |},
  +$refType: GuaranteeNeededResolver_booking$ref,
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
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationArea",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "code",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "GuaranteeNeededResolver_booking",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "contactDetails",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingContactDetails",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "phone",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "email",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "upcomingLeg",
      "storageKey": null,
      "args": null,
      "concreteType": "Leg",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "guarantee",
          "args": null,
          "storageKey": null
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
    }
  ]
};
})();
(node/*: any*/).hash = 'a32848c062675d8dd2e0d67f015d96ed';
module.exports = node;
