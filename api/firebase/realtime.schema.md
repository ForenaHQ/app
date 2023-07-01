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
  "invites": {
    "${ inviteCode }": "${ UID }"
  },
  "users": {
    "${ UID }": {
      "isOnline": boolean | null,
      "conversations": {
        "${ conversationID }": "ADMIN" | "MEMBER",
        ...
      },
      "friends": {
        "${ UID }": {
          "stats": {
            "messages": number,
            "media": {
              "photo": number,
              "gif": number,
              "video": number,
              "sticker": number
            }
          }
        }
      },
      "invites": {
        "codes": string[]
      }
    },
    ...
  },
  "conversations": {
    "${ conversationID }": {
      "id": "${ conversationID }",
      "members": {
        "${ UID }": "ADMIN" | "MEMBER",
        ...
      },
      "messages": {
        "${ messageID }": {
          "id": "${ messageID }",
          "author": "${ UID }",
          "messageType": "TEXT" | "MEDIA",
          "body": "${ body }" | "${ mediaType }",
          "timestamp": Timestamp,
        },
        ...
      },
      "latestMessage": {
        "id": "${ messageID }",
        "author": "${ UID }",
        "messageType": "TEXT" | "MEDIA",
        "body": "${ body }" | "${ mediaType }",
        "timestamp": Timestamp,
      },
      "received": {
        "${ UID }": Timestamp,
        ...
      },
      "seen": {
        "${ UID }": Timestamp,
        ...
      },
      "pet": {
        "currentActivity": string,
        "metadata" {
          ...ALL VITALS HERE
        }
      }
    },
    ...
  }
}
```