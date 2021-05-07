const router = require('express').Router();
const { User } = require('../../models')

router.post('/users', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    res.status(200).json(userData);
  } catch(err) {
    res.status(500).json({ message: "Could not create new user: " + err });
  }
});

router.get('/api/users/:username', (req, res) => {
  User.findAll({where: {username: req.params.username}})
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

module.exports = router;