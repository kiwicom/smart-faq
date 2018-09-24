/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BookingStatus = ('CANCELLED' | 'CLOSED' | 'CONFIRMED' | 'DELETED' | 'EXPIRED' | 'NEW' | 'PENDING' | 'REFUNDED' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type GuaranteeNeededResolver_booking$ref: FragmentReference;
export type GuaranteeNeededResolver_booking = {|
  +databaseId: ?number,
  +status: ?BookingStatus,
  +contactDetails: ?{|
    +phone: ?string,
    +email: ?string,
    +passenger: ?{|
      +firstname: ?string,
      +lastname: ?string,
    |},
  |},
  +customerSupport: ?{|
    +hasGuaranteeChat: ?boolean,
  |},
  +upcomingLeg: ?{|
    +arrival: ?{|
      +airport: ?{|
        +city: ?{|
          +name: ?string,
        |},
        +code: ?string,
      |},
    |},
    +departure: ?{|
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
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "passenger",
          "storageKey": null,
          "args": null,
          "concreteType": "Passenger",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "firstname",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "lastname",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "customerSupport",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingCustomerSupport",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "hasGuaranteeChat",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "upcomingLeg",
      "storageKey": "upcomingLeg(guarantee:\"KIWICOM\")",
      "args": [
        {
          "kind": "Literal",
          "name": "guarantee",
          "value": "KIWICOM",
          "type": "CoveredBy"
        }
      ],
      "concreteType": "Leg",
      "plural": false,
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
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = 'c5f295c3d55615ae5bf9c5b7ed4d2365';
module.exports = node;
