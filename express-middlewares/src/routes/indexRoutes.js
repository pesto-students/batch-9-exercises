const express = require('express');

const router = express.Router();

router.use('/', (req, res, next) => {
  console.log(`Request Made to server on ${new Date()}`);
  const requiredType = req.url.substring(1);
  res.append('middleware-header', requiredType);
  next();
});

router.get('/', (req, res) => {
  res.send('Hello');
});

router.get('/languages', (req, res) => {
  const favLanguages = ['JS', 'NodeJs', 'GoLang', 'Exilir', 'C'];
  res.json(favLanguages);
});

router.get('/packages', (req, res) => {
  const favPackages = ['express', 'React', 'jest', 'eslint', 'pm2'];
  res.json(favPackages);
});

module.exports = router;
