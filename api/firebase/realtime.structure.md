```json
{
  "metrics": {
    "${ currentYear }": {
      "${ currentMonth }": {
        "${ currentDay }": {
          "DAU": number,
          "messagesExchanged": {
            "text": number,
            "media": number,
          },
          ...
          # TODO: Add more trackers
        }
      }
    }
  },
  "users": {
    "${ UID }": {
      "name": "${ name }",
      "phoneNumber": "${ phoneNumber }",
      "activityStatus": {
        "privacy": "EVERYONE" | "CONTACTS" | "ONLY_ME",
        "isOnline": boolean,
      },
      "profilePicture": "${ profilePicture }",
      "conversations": {
        "${ conversationID }": "ADMIN" | "MEMBER",
        ...
      },
      "friends": {
        "${ UID }": {
          "friendsSince": Timestamp,
          "conversationID": "${ conversationID }"
        },
        ...
      },
    },
    ...
  },
  "conversations": {
    "${ conversationID }": {
      "name": "${ conversationName }" | undefined,
      "members": {
        "${ UID }": "ADMIN" | "MEMBER",
        ...
      },
      "backgroundImage": "${ downloadURL }",
      "messages": {
        "${ messageID }": {
          "from": "${ UID }",
          "messageType": "TEXT" | "MEDIA",
          "body": "${ body }" | "${ mediaType }",
          "timestamp": Timestamp,
        },
        ...
      },
      "latestMessage": {
        "from": "${ UID }",
        "messageType": "TEXT" | "MEDIA",
        "body": "${ body }" | "${ mediaType }",
        "timestamp": Timestamp,
      },
      "pet": {
        "type": "DOG" | "CAT" | "BIRD" | "PLANT" | ...,
        "breed": string,
        "currentActivity": string
      }
    },
    ...
  }
}
```