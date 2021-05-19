const router = require('express').Router();
const { User, Profile, Friendship, Message } = require('../../models')

router.post('/users', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    const profileData = await Profile.create({ 
      user_id: userData.id, 
      profile_picture: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      bio: ""
    });

    res.status(200).json({user: userData, profile: profileData});
  } catch(err) {
    res.status(500).json({ message: "Could not create new user: " + err });
  }
});

router.get('/users', (req, res) => {
  User.findAll()
  .then(data => res.status(200).json(data));
});

router.get('/users/:id', (req, res) => {
  User.findAll({ where: { id: req.params.id}, include: Profile})
  .then(users => {
    res.status(200).json(users);
  });
});

router.get('/profile/:id', (req, res) => {
  Profile.findOne({where: { user_id: req.params.id }})
  .then(result => {
    res.status(200).json(result);
  });
});

router.get('/friends/:id', (req, res) => {
  Friendship.findAll({ where: { user_id: req.params.id }, include: User })
  .then(data => {
    res.status(200).json(data);
  });
});

router.post('/friends', (req, res) => {
  Friendship.create(req.body)
  .then(data => {
    res.status(200).json(data);
  })
});

router.delete('/friends/:id/:friendId', (req, res) => {
  Friendship.destroy({where: { user_id: req.params.id, friend_id: req.params.friendId }})
  .then(data => {
    res.status(200).json(data);
  });
});

router.get('/messages/from/:sender_id/to/:reciever_id', (req, res) => {
  Message.findAll({ where: { sender_id: req.params.sender_id, reciever_id: req.params.reciever_id } })
  .then(data => {
    res.status(200).json(data);
  })
}); 

router.post('/messages', (req, res) => {
  Message.create({...req.body, sent_on: Date.now()})
  .then(data => {
    res.status(200).json(data);
  })
});

module.exports = router;