# magistrate-entity-test

*\*\*NOT FOR PRODUCTION!\*\**

1) connect Ledger
   - connection via USB
   - unlock with device pin
   - open the ARK Ledger App
2) Install & Run this project
   - `yarn && yarn start`

## Sample (annotated) console output:

```bash
===== Testing a Magistrate Entity Transaction =====

# from the ledger device
Ledger PublicKey:  03946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a 


# using core-crypto
Ledger Address:  DChFAqbF5yFx79HRiTTVptN7eFoMgr8ysv 


# using the core-client api
Ledger Nonce:  39 


==================================================================

Magistrate Entity Transaction:
 {
  version: 2,
  network: 30,
  typeGroup: 2,
  type: 6,
  nonce: '39',
  senderPublicKey: '03946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a',
  fee: '5000000000',
  amount: '0',
  asset: {
    type: 0,
    subType: 0,
    action: 0,
    data: {
      name: 'some_business_registration_name',
      ipfsData: 'QmR45FmbVVrixReBwJkhEKde2qwHYaQzGxu4ZoDeswuF9w'
    }
  },
  id: '5c3d5bf2021de5d94fe633b2124935e16e21b5d985f3d1fd76410c7ad0a6e196'
} 

##
# At this point, the Ledger Device will prompt for Transaction Approval.
##

Signing Payload:  ff021e020000000600270000000000000003946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a00f2052a0100000000000000001f736f6d655f627573696e6573735f726567697374726174696f6e5f6e616d652e516d523435466d625656726978526542774a6b68454b6465327177485961517a477875345a6f4465737775463977


# info from ledger approval
Ledger Signature:  b036ca0fd17cac23cc1a4ed9ff47563541f12505b4ffa841146f9e8b6b4fb87311e5bde31f7ad672006f7a59157deecf947767d910dd505cb48494aef34f14a7 
for payload:  ff021e020000000600270000000000000003946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a00f2052a0100000000000000001f736f6d655f627573696e6573735f726567697374726174696f6e5f6e616d652e516d523435466d625656726978526542774a6b68454b6465327177485961517a477875345a6f4465737775463977


# signed/final tx
Signed Transaction:  {
    "version": 2,
    "network": 30,
    "typeGroup": 2,
    "type": 6,
    "nonce": "39",
    "senderPublicKey": "03946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a",
    "fee": "5000000000",
    "amount": "0",
    "asset": {
        "type": 0,
        "subType": 0,
        "action": 0,
        "data": {
            "name": "some_business_registration_name",
            "ipfsData": "QmR45FmbVVrixReBwJkhEKde2qwHYaQzGxu4ZoDeswuF9w"
        }
    },
    "id": "78bb6787472a2aa7d334aaf5d1d5dbf46eea0c0753b8fe99db2390e1ae821016",
    "signature": "b036ca0fd17cac23cc1a4ed9ff47563541f12505b4ffa841146f9e8b6b4fb87311e5bde31f7ad672006f7a59157deecf947767d910dd505cb48494aef34f14a7"
} 


is Signed Tx Valid?:  true 


# send to devnet
ADN Response:  {
  data: {
    accept: [
      '78bb6787472a2aa7d334aaf5d1d5dbf46eea0c0753b8fe99db2390e1ae821016'
    ],
    broadcast: [
      '78bb6787472a2aa7d334aaf5d1d5dbf46eea0c0753b8fe99db2390e1ae821016'
    ],
    excess: [],
    invalid: []
  }
} 


==================================================================

Magistrate Entity Transaction:
 {
  version: 2,
  network: 30,
  typeGroup: 2,
  type: 6,
  nonce: '40',
  senderPublicKey: '03946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a',
  fee: '500000000',
  amount: '0',
  asset: {
    type: 0,
    subType: 0,
    action: 1,
    registrationId: '78bb6787472a2aa7d334aaf5d1d5dbf46eea0c0753b8fe99db2390e1ae821016',
    data: { ipfsData: 'QmYSK2JyM3RyDyB52caZCTKFR3HKniEcMnNJYdk8DQ6KBB' }
  },
  id: 'f073d4ed69cbe9bb5ac9261873f180e9ac4ac8269abe5cf9341fa0a7ab1bc59c'
} 

##
# At this point, the Ledger Device will prompt for Transaction Approval.
##

Signing Payload:  ff021e020000000600280000000000000003946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a0065cd1d00000000000000012078bb6787472a2aa7d334aaf5d1d5dbf46eea0c0753b8fe99db2390e1ae821016002e516d59534b324a794d335279447942353263615a43544b465233484b6e6945634d6e4e4a59646b384451364b4242 


# info from ledger approval
Ledger Signature:  75902db0d47e97f309d8ba3fea6d50cb0222bb880f873c10cfe8ce9f409baf347fdec7e44bb1db3af7e10f443dcdc9814d72e38e67d3b9d7920e4a3beb6963e2 
for payload:  ff021e020000000600280000000000000003946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a0065cd1d00000000000000012078bb6787472a2aa7d334aaf5d1d5dbf46eea0c0753b8fe99db2390e1ae821016002e516d59534b324a794d335279447942353263615a43544b465233484b6e6945634d6e4e4a59646b384451364b4242 


# signed/final tx
Signed Transaction:  {
    "version": 2,
    "network": 30,
    "typeGroup": 2,
    "type": 6,
    "nonce": "40",
    "senderPublicKey": "03946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a",
    "fee": "500000000",
    "amount": "0",
    "asset": {
        "type": 0,
        "subType": 0,
        "action": 1,
        "registrationId": "78bb6787472a2aa7d334aaf5d1d5dbf46eea0c0753b8fe99db2390e1ae821016",
        "data": {
            "ipfsData": "QmYSK2JyM3RyDyB52caZCTKFR3HKniEcMnNJYdk8DQ6KBB"
        }
    },
    "id": "2b14643b3a217b488cfb4f8887d44531ea94535cca40325b466c03a35d1a9769",
    "signature": "75902db0d47e97f309d8ba3fea6d50cb0222bb880f873c10cfe8ce9f409baf347fdec7e44bb1db3af7e10f443dcdc9814d72e38e67d3b9d7920e4a3beb6963e2"
} 


is Signed Tx Valid?:  true 


# send to devnet
ADN Response:  {
  data: {
    accept: [
      '2b14643b3a217b488cfb4f8887d44531ea94535cca40325b466c03a35d1a9769'
    ],
    broadcast: [
      '2b14643b3a217b488cfb4f8887d44531ea94535cca40325b466c03a35d1a9769'
    ],
    excess: [],
    invalid: []
  }
} 


==================================================================

Magistrate Entity Transaction:
 {
  version: 2,
  network: 30,
  typeGroup: 2,
  type: 6,
  nonce: '41',
  senderPublicKey: '03946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a',
  fee: '500000000',
  amount: '0',
  asset: {
    type: 0,
    subType: 0,
    action: 2,
    registrationId: '78bb6787472a2aa7d334aaf5d1d5dbf46eea0c0753b8fe99db2390e1ae821016',
    data: {}
  },
  id: 'f7df3ea898a43fb16041a492d8b5eee1bbb3718095811f22689c495244aa9c28'
} 

##
# At this point, the Ledger Device will prompt for Transaction Approval.
##

Signing Payload:  ff021e020000000600290000000000000003946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a0065cd1d00000000000000022078bb6787472a2aa7d334aaf5d1d5dbf46eea0c0753b8fe99db2390e1ae8210160000


# info from ledger approval
Ledger Signature:  dbdb91e0e87382fc36058ccf6b5d8c2e7ca704168ae9d3b785da9e993984704a760aa33ca4265957b21e961337289a7546a8bf911817d247b063daa1e2834fad 
for payload:  ff021e020000000600290000000000000003946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a0065cd1d00000000000000022078bb6787472a2aa7d334aaf5d1d5dbf46eea0c0753b8fe99db2390e1ae8210160000  


# signed/final tx
Signed Transaction:  {
    "version": 2,
    "network": 30,
    "typeGroup": 2,
    "type": 6,
    "nonce": "41",
    "senderPublicKey": "03946e33545a103855b35c186cef8f4e3a7dce8c6075967dc7eae3419ceef3d55a",
    "fee": "500000000",
    "amount": "0",
    "asset": {
        "type": 0,
        "subType": 0,
        "action": 2,
        "registrationId": "78bb6787472a2aa7d334aaf5d1d5dbf46eea0c0753b8fe99db2390e1ae821016",
        "data": {}
    },
    "id": "68a3422b8dd59ff3b7d8899ce21ae0bb78187b28350bde9a230e600938ef5b74",
    "signature": "dbdb91e0e87382fc36058ccf6b5d8c2e7ca704168ae9d3b785da9e993984704a760aa33ca4265957b21e961337289a7546a8bf911817d247b063daa1e2834fad"
} 


is Signed Tx Valid?:  true 


# send to devnet
ADN Response:  {
  data: {
    accept: [
      '68a3422b8dd59ff3b7d8899ce21ae0bb78187b28350bde9a230e600938ef5b74'
    ],
    broadcast: [
      '68a3422b8dd59ff3b7d8899ce21ae0bb78187b28350bde9a230e600938ef5b74'
    ],
    excess: [],
    invalid: []
  }
} 

==================================================================

```
