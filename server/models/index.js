const User = require('./User');
const Profile = require('./Profile');
const Friendship = require('./Friendship');
const Conversation = require('./Conversation');
const Message = require('./Message');

// USER -> PROFILE 1:1
User.hasOne(Profile);
Profile.belongsTo(User);

// USER -> FRIENDSHIP m:m
User.hasMany(Friendship);
Friendship.belongsToMany(User, { through: Friendship });

// FRIENDSHIP -> CONVERSATION 1:1
Friendship.hasOne(Conversation);
Conversation.belongsTo(Friendship);

// CONVERSATION -> MESSAGE 1:m
Conversation.hasMany(Message);
Message.belongsTo(Conversation);

module.exports = { User, Profile, Friendship, Conversation, Message };