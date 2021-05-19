const User = require('./User');
const Profile = require('./Profile');
const Friendship = require('./Friendship');
const Message = require('./Message');

// USER -> PROFILE 1:1
User.hasOne(Profile);
Profile.belongsTo(User);

// USER -> FRIENDSHIP m:m
User.hasMany(Friendship);
Friendship.belongsTo(User, { foreignKey: 'friend_id' });

// USER -> MESSAGE m:m
User.hasMany(Message);
Message.belongsTo(User, { foreignKey: 'sender_id' });

module.exports = { User, Profile, Friendship, Message };