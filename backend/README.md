# References
### `My Github Backend Sample`
```
https://github.com/haqiramadhani/backend-point-of-sales/
```
### `Tutorial Express + Mongoose`
```
https://medium.com/@ranggaantok/membangun-rest-api-sederhana-dengan-expressjs-mongodb-9cf96cf1e791
```
### `Mongoose documentation`
```
https://mongoosejs.com/docs/guide.html
```
# API Documentation
## Authentication
### `[POST] /api/auth/register`
```
body: {
  "first_name": "String",
  "last_name": "String",
  "username": "String",
  "email": "String",
  "phone": "String",
  "password": "String"
}
```
### `[POST] /api/auth/login`
```
body: {
  "email": "String",
  "password": "String"
}
```
### `[POST] /api/auth/activate`
```
body: {
  "email": "String",
  "password": "String"
}
```
### `[POST] /api/auth/forgetPassword`
```
body: {
  "email": "String",
  "password": "String"
}
```
### `[POST] /api/auth/updatePassword`
```
body: {
  "email": "String",
  "password": "String"
}
```
## WhatsApp
### `[POST] /api/whatsapp/init`
```
header: {
  "token": "String"
},
body: {
  "session": "string",
  "phone": "string"
}
```
### `[GET] /api/whatsapp/qrcode`
```
header: {
  "token": "String"
},
```
### `[POST] /api/whatsapp/send`
```
header: {
  "token": "String"
},
body: {
  "phone": "string",
  "message": "string"
}
```
### `[POST] /api/whatsapp/addParticipant`
```
header: {
  "token": "String"
},
body: {
  "idGroup": "string",
  "idParticipant": "string"
}
```
### `[GET] /api/whatsapp/asyncLoadAllEarlierMessages`
```
header: {
  "token": "String"
},
params: {
  "contactId": "string"
}
```
### `[GET] /api/whatsapp/checkNumberStatus`
```
header: {
  "token": "String"
},
params: {
  "contactId": "string"
}
```
### `[GET] /api/whatsapp/clearChat`
```
header: {
  "token": "String"
},
params: {
  "chatId": "string"
}
```
### `[POST] /api/whatsapp/createGroup`
```
header: {
  "token": "String"
},
body: {
  "groupName": "string",
  "contacts": ["string"]
}
```
### `[GET] /api/whatsapp/deleteChat`
```
header: {
  "token": "String"
},
params: {
  "chatId": "string"
}
```
### `[POST] /api/whatsapp/deleteMessage`
```
header: {
  "token": "String"
},
body: {
  "contactId": "string",
  "messageId": ["string"],
  "onlyLocal": boolean
}
```
### `[POST] /api/whatsapp/demoteParticipant`
```
header: {
  "token": "String"
},
body: {
  "idGroup": "string",
  "idParticipant": ["string"]
}
```
### `[GET] /api/whatsapp/forceRefocus`
```
header: {
  "token": "String"
}
```
### `[POST] /api/whatsapp/forwardMessages`
```
header: {
  "token": "String"
},
body: {
  "to": "string",
  "messages": any,
  "skipMyMessages": boolean
}
```
### `[GET] /api/whatsapp/getAllChats`
```
header: {
  "token": "String"
},
params: {
  "withNewMessageOnly": boolean
}
```
### `[GET] /api/whatsapp/getAllChatsWithMessages`
```
header: {
  "token": "String"
},
params: {
  "withNewMessageOnly": boolean
}
```
### `[GET] /api/whatsapp/getAllContacts`
```
header: {
  "token": "String"
}
```
### `[GET] /api/whatsapp/getAllGroups`
```
header: {
  "token": "String"
},
params: {
  "withNewMessageOnly": boolean
}
```
### `[GET] /api/whatsapp/getAllMessagesInChat`
```
header: {
  "token": "String"
},
params: {
  "chatId": "string",
  "includeMe": boolean,
  "includeNotifications": boolean
}
```
### `[GET] /api/whatsapp/getAllNewMessages`
```
header: {
  "token": "String"
}
```
### `[GET] /api/whatsapp/getAllUnreadMessages`
```
header: {
  "token": "String"
}
```
### `[GET] /api/whatsapp/getBatteryLevel`
```
header: {
  "token": "String"
}
```
### `[GET] /api/whatsapp/getBusinessProfilesProducts`
```
header: {
  "token": "String"
},
params: {
  "id": "String"
}
```
### `[GET] /api/whatsapp/getChat`
```
header: {
  "token": "String"
},
params: {
  "contactId": "String"
}
```
### `[GET] /api/whatsapp/getChatById`
```
header: {
  "token": "String"
},
params: {
  "contactId": "String"
}
```
### `[GET] /api/whatsapp/getConnectionState`
```
header: {
  "token": "String"
}
```
### `[GET] /api/whatsapp/getContact`
```
header: {
  "token": "String"
},
params: {
  "contactId": "String"
}
```
### `[GET] /api/whatsapp/getGeneratedUserAgent`
```
header: {
  "token": "String"
},
params: {
  "userA": "String"
}
```
### `[GET] /api/whatsapp/getGroupAdmins`
```
header: {
  "token": "String"
},
params: {
  "idGroup": "String"
}
```
### `[GET] /api/whatsapp/getGroupInviteLink`
```
header: {
  "token": "String"
},
params: {
  "chatId": "String"
}
```
### `[GET] /api/whatsapp/getGroupMembers`
```
header: {
  "token": "String"
},
params: {
  "groupId": "String"
}
```
### `[GET] /api/whatsapp/getGroupMembersId`
```
header: {
  "token": "String"
},
params: {
  "groupId": "String"
}
```
### `[GET] /api/whatsapp/getMe`
```
header: {
  "token": "String"
}
```
### `[GET] /api/whatsapp/getProfilePicFromServer`
```
header: {
  "token": "String"
},
params: {
  "chatId": "String"
}
```
### `[GET] /api/whatsapp/getStatus`
```
header: {
  "token": "String"
},
params: {
  "contactId": "String"
}
```
### `[GET] /api/whatsapp/getUnreadMessages`
```
header: {
  "token": "String"
},
params: {
  "includeMe": "String",
  "includeNotifications": boolean,
  "use_unread_count": boolean
}
```
### `[GET] /api/whatsapp/getWAVersion`
```
header: {
  "token": "String"
}
```
### `[GET] /api/whatsapp/isConnected`
```
header: {
  "token": "String"
}
```
### `[GET] /api/whatsapp/kill`
```
header: {
  "token": "String"
}
```
### `[GET] /api/whatsapp/leaveGroup`
```
header: {
  "token": "String"
},
params: {
  "groupId": "String"
}
```
### `[GET] /api/whatsapp/loadAllEarlierMessages`
```
header: {
  "token": "String"
},
params: {
  "contactId": "String"
}
```
### `[GET] /api/whatsapp/loadAndGetAllMessagesInChat`
```
header: {
  "token": "String"
},
params: {
  "chatId": "String",
  "includeMe": boolean,
  "includeNotifications": boolean
}
```
### `[GET] /api/whatsapp/loadEarlierMessages`
```
header: {
  "token": "String"
},
params: {
  "contactId": "String"
}
```
### `[POST] /api/whatsapp/promoteParticipant`
```
header: {
  "token": "String"
},
body: {
  "idGroup": "String",
  "idParticipant": "String"
}
```
### `[POST] /api/whatsapp/removeParticipant`
```
header: {
  "token": "String"
},
body: {
  "idGroup": "String",
  "idParticipant": "String"
}
```
### `[POST] /api/whatsapp/reply`
```
header: {
  "token": "String"
},
body: {
  "to": "String",
  "content": "String",
  "quotedMsg": any
}
```
### `[GET] /api/whatsapp/revokeGroupInviteLink`
```
header: {
  "token": "String"
},
params: {
  "chatId": "String"
}
```
### `[POST] /api/whatsapp/sendContact`
```
header: {
  "token": "String"
},
body: {
  "to": "String",
  "contactId": ["String"]
}
```
### `[POST] /api/whatsapp/sendFile`
```
header: {
  "token": "String"
},
body: {
  "to": "String",
  "base64": "String",
  "filename": "String",
  "caption": "String"
}
```
### `[POST] /api/whatsapp/sendGiphy`
```
header: {
  "token": "String"
},
body: {
  "to": "String",
  "giphyMediaUrl": "String",
  "caption": "String"
}
```
### `[POST] /api/whatsapp/sendImage`
```
header: {
  "token": "String"
},
body: {
  "to": "String",
  "base64": "String",
  "filename": "String",
  "caption": "String"
}
```
### `[POST] /api/whatsapp/sendImageAsSticker`
```
header: {
  "token": "String"
},
body: {
  "b64": "String",
  "to": "String"
}
```
### `[POST] /api/whatsapp/sendImageWithProduct`
```
header: {
  "token": "String"
},
body: {
  "to": "String",
  "base64": "String",
  "caption": "String",
  "bizNumber": "String",
  "productId": "String"
}
```
### `[POST] /api/whatsapp/sendLocation`
```
header: {
  "token": "String"
},
body: {
  "to": "String",
  "lat": any,
  "lng": any,
  "loc": "String"
}
```
### `[POST] /api/whatsapp/sendMessageWithThumb`
```
header: {
  "token": "String"
},
body: {
  "thumb": "String",
  "url": "String",
  "title": "String",
  "description": "String",
  "chatId": "String"
}
```
### `[POST] /api/whatsapp/sendSeen`
```
header: {
  "token": "String"
},
body: {
  "chatId": "String"
}
```
### `[POST] /api/whatsapp/sendText`
```
header: {
  "token": "String"
},
body: {
  "to": "String",
  "content": "String"
}
```
### `[POST] /api/whatsapp/sendTextWithMentions`
```
header: {
  "token": "String"
},
body: {
  "to": "String",
  "content": "String"
}
```
### `[POST] /api/whatsapp/sendVideoAsGif`
```
header: {
  "token": "String"
},
body: {
  "to": "String",
  "base64": "String",
  "filename": "String",
  "caption": "String"
}
```
### `[POST] /api/whatsapp/setChatState`
```
header: {
  "token": "String"
},
body: {
  "chatState": "String",
  "chatId": "String"
}
```
### `[POST] /api/whatsapp/setMyName`
```
header: {
  "token": "String"
},
body: {
  "newName": "String"
}
```
### `[POST] /api/whatsapp/setMyStatus`
```
header: {
  "token": "String"
},
body: {
  "newStatus": "String"
}
```
### `[POST] /api/whatsapp/simulateTyping`
```
header: {
  "token": "String"
},
body: {
  "to": "String",
  "on": boolean
}
```