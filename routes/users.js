var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Newsletter = require('../models/Newsletter');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/', async (req, res) => {
  // const { name, mobile, email, subject, message } = req.body;

  User.create(req.body, (err, user) => {
    console.log(err, user);
    if (!this.name || !this.mobile || !this.subject || !this.message) {
      res.json({ error: 'तुमचा संदेश टाइप करा' });
    } else {
      res.json({ message: 'तुमचा संदेश पाठवण्यात आला आहे.' });
    }
  });
});
router.post('/newsletter', async (req, res) => {
  Newsletter.create(req.body, (err, news) => {
    console.log(err, news);
    if (!this.email) {
      res.json({ error: 'तुमचा ईमेल आयडी प्रविष्ट करा' });
    } else {
      res.json({ message: 'तुमचा ईमेल आयडी पाठवण्यात आला आहे.' });
    }
  });
});

module.exports = router;
