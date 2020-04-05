'use strict';
// Import ExpressJS
const express = require('express');

// Import other Route
// const send = require('./send');
// const group = require('./group');
// const message = require('./message');

// Import Controller

// Create new ExpressJS Route
const router = express.Router();

// Routing
router.post('/init'); // body: {session: string, phone: string} // Create new session
router.get('/qrcode'); // Get the qrcode image
router.post('/send'); // body: {phone: string, message: string} // Send message to phone number
router.post('/addParticipant'); // body: {idGroup: string, idParticipant: string} // Add participant to Group
router.get('/asyncLoadAllEarlierMessages'); // ?contactId=string // Load all messages in chat
router.get('/checkNumberStatus'); // ?contactId=string // Checks if a number is a valid whatsapp number
router.get('/clearChat'); // ?chatId=string // Delete all messages from the chat
router.post('/createGroup'); // body: {groupName: string, contacts: string | string[]} // Create new group with initial participant
router.get('/deleteChat'); // ?chatId=string // Delete the conversation from your whatsapp
router.post('/deleteMessage'); // body: {contactId: string, messageId: string[] | string, onlyLocal?: boolean} // Deletes message of given message id
router.post('/demoteParticipant'); // body: {idGroup: string, idParticipant: string} // Demote Admin of Group
router.get('/forceRefocus'); // Use here
router.post('/forwardMessages'); // {to: string, messages: any, skipMyMessages: boolean} // Forward an array of messages to a specific chat using the message ids or Objects
router.get('/getAllChats'); // ?withNewMessageOnly=boolean // Retrieves all chats
router.get('/getAllChatsWithMessages'); // ?withNewMessageOnly=boolean // Retrieves all chats with messages
router.get('/getAllContacts'); // Retrieves all contacts
router.get('/getAllGroups'); // ?withNewMessageOnly=boolean // Retrieve all groups
router.get('/getAllMessagesInChat'); // ?chatId=string&includeMe=boolean&includeNotifications=boolean // Retrieves all Messages in a chat
router.get('/getAllNewMessages'); // Retrieves all new Messages. where isNewMsg==true
router.get('/getAllUnreadMessages'); // Retrieves all unread Messages. where ack==-1
router.get('/getBatteryLevel'); // Retrieves Battery Level
router.get('/getBusinessProfilesProducts'); // ?id=string // Find any product listings of the given number. Use this to query a catalog
router.get('/getChat'); // ?contactId=string // Retrieves chat object of given contact id
router.get('/getChatById'); // ?contactId=string // Retrieves chat object of given contact id
router.get('/getConnectionState'); // Returns the connection state
router.get('/getContact'); // ?contactId=string // Retrieves contact detail object of given contact id
router.get('/getGeneratedUserAgent'); // ?userA=string // Get the generated user agent, this is so you can send it to the decryption module.
router.get('/getGroupAdmins'); // ?idGroup=string // Get Admins of a Group
router.get('/getGroupInviteLink'); // ?chatId=string // Retrieves an invite link for a group chat. returns false if chat is not a group
router.get('/getGroupMembers'); // ?groupId=string // Returns group members [Contact] objects
router.get('/getGroupMembersId'); // ?groupId=string // Retrieves group members as [Id] objects
router.get('/getMe'); // Returns an object with all of your host device details
router.get('/getProfilePicFromServer'); // ?chatId=string // Retrieves chat picture
router.get('/getStatus'); // ?contactId=string // Get the status of a contact
router.get('/getUnreadMessages'); // ?includeMe=boolean&includeNotifications=boolean&use_unread_count=boolean // Retrieves all unread Messages
router.get('/getWAVersion'); // Version of Application
router.get('/isConnected'); // Retrieves if the phone is online. Please note that this may not be real time.
router.get('/kill'); // Shuts down the page and browser
router.get('/leaveGroup'); // ?groupId=string // Removes the host device from the group
router.get('/loadAllEarlierMessages'); // ?contactId=string // Load all messages in chat object from server.
router.get('/loadAndGetAllMessagesInChat'); // ?chatId=string&includeMe=boolean&includeNotifications=boolean // loads and Retrieves all Messages in a chat
router.get('/loadEarlierMessages'); // ?contactId=string // Load more messages in chat object from server. Use this in a while loop
router.post('/promoteParticipant'); // body: {idGroup: string, idParticipant: string} // Promote Participant to Admin in Group
router.post('/removeParticipant'); // body: {idGroup: string, idParticipant: string} // Remove participant of Group
router.post('/reply'); // body: {to: string, content: string, quotedMsg: any}
router.get('/revokeGroupInviteLink'); // ?chatId=string // Revokes the current invite link for a group chat. Any previous links will stop working
router.post('/sendContact'); // body: {to: string, contactId: string | string[]} // Sends contact card to given chat id
router.post('/sendFile'); // body: {to: string, base64: string, filename: string, caption: string} // Sends a file to given chat, with caption or not, using base64. This is exactly the same as sendImage
router.post('/sendGiphy'); // body: {to: string, giphyMediaUrl: string, caption: string} // Sends a video to given chat as a gif by using a giphy link, with caption or not, using base64
router.post('/sendImage'); // body: {to: string, base64: string, filename: string, caption: string} // Sends a image to given chat, with caption or not, using base64
router.post('/sendImageAsSticker'); // body: {b64: string, to: string} // This function takes an image and sends it as a sticker to the recipient. This is helpful for sending semi-ephemeral things like QR codes. The advantage is that it will not show up in the recipients gallery. This function automatically converts images to the required webp format.
router.post('/sendImageWithProduct'); // body: {to: string, base64: string, caption: string, bizNumber: string, productId: string} // Sends product with image to chat
router.post('/sendLocation'); // body: {to: string, lat: any, lng: any, loc: string} // Sends a location message to given chat
router.post('/sendMessageWithThumb'); // body: {thumb: string, url: string, title: string, description: string, chatId: string}
router.post('/sendSeen'); // body: {chatId: string} // Sets a chat status to seen. Marks all messages as ack: 3
router.post('/sendText'); // body: {to: string, content: string} // Sends a text message to given chat
router.post('/sendTextWithMentions'); // body: {to: string, content: string} // Sends a text message to given chat that includes mentions. In order to use this method correctly you will need to send the text like this: "@4474747474747 how are you?" Basically, add a @ symbol before the number of the contact you want to mention.
router.post('/sendVideoAsGif'); // body: {to: string, base64: string, filename: string, caption: string} // Sends a video to given chat as a gif, with caption or not, using base64
router.post('/setChatState'); // body: {chatState: ChatState, chatId: String} // Sets the chat state. The state you want to set for the chat. Can be TYPING, RECORDING or PAUSED.
router.post('/setMyName'); // body: {newName: string} // Set your profile name
router.post('/setMyStatus'); // body: {newStatus: string} // set your about me
router.post('/simulateTyping'); // body: {to: string, on: boolean} // Simulate '...typing' in chat

// Export Module
module.exports = router;