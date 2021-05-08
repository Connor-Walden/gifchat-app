const router = require('express').Router();
const { User, Profile } = require('../../models')

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

router.get('/users/:id', (req, res) => {
  User.findAll({ where: { id: req.params.id}})
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

module.exports = router;