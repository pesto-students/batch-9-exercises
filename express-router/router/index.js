const express = require('express');

const router = express.Router();

let languages = [];

router.get('/', (req, res) => {
  res.render('index', { languages: languages });
});

router.get('/new', (req, res) => {
  res.render('new.ejs', {});
});

router.post('/', (req, res) => {
  const language = req.body.name;
  const object = { name: language, id: languages.length };
  languages.push(object);
  res.render('index', { languages: languages });
});

router.get('/:id/edit', (req, res) => {
  const languageID = req.params.id;

  const language = languages.filter(language => language.id == languageID);

  res.render('edit', { language: language[0] });
});

router.delete('/:id', (req, res) => {
  languages = languages.filter(language => language.id != req.params.id);
  res.redirect('/');
});

router.patch('/:id', (req, res) => {
  languages = languages.map(language => {
    if (language.id == req.params.id) {
      language.name = req.body.name;
    }
    return language;
  });
  res.redirect('/');
});

module.exports = router;
