```json
{
  "users": {
    "${ UID }": {
      "name": "${ name }",
      "phoneNumber": "${ phoneNumber }",
      "starredMessages" SUBCOLLECTION: {
        "${ conversationID }": {
          "${ messageID }": {
            "id": "${ messageID }",
            "author": "${ UID }",
            "messageType": "TEXT" | "MEDIA",
            "body": "${ body }" | "${ mediaType }",
            "timestamp": Timestamp,
          },
          ...
        },
        ...
      },
      "friends" SUBCOLLECTION: {
        "${ UID }": {
          "friendsSince": Timestamp,
          "conversationID": "${ conversationID }"
        },
        ...
      },
      "joinedOn": Timestamp,
      "birthday": Timestamp,
      "gender": Gender
    },
    ...
  },
  "conversations": {
    "${ conversationID }": {
      "id": "${ conversationID }",
      "name": "${ conversationName }" | undefined,
      "backgroundImage": "${ downloadURL }",
      "pet": {
        "type": "DOG" | "CAT" | "BIRD" | "PLANT" | ...,
        "breed": string,
      },
      "createdOn": Timestamp,
      "createdBy": "${ UID }"
    },
    ...
  }
}
```