const express = require('express');

const router = express.Router();

const languages = [{ name: 'JavaScript', id: 1 }, { name: 'Haskell', id: 2 }, { name: 'Python', id: 3 }];

router.get('/', (req, res) => {
  res.render('index', { languages });
});

router.post('/', (req, res) => {
  const newLanguageId = languages.length + 1;
  const newLanguage = { name: req.body.name, id: newLanguageId };
  languages.push(newLanguage);
  res.redirect('/');
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.get('/:id/edit', (req, res) => {
  const languageIdToEdit = parseInt(req.params.id, 10);
  const languageToEdit = languages.find(language => language.id === languageIdToEdit);
  if (!languageToEdit) {
    res.status(404).send('Language not found');
  }
  res.render('edit', { language: languageToEdit });
});

router.get('/:id/show', (req, res) => {
  const languageIdToEdit = req.params.id;
  const languageToEdit = languages.find(language => language.id === languageIdToEdit);
  if (!languageToEdit) {
    res.status(404).send('Language not found');
  }
  res.render('show', { language: languageToEdit });
});

router.patch('/:id/', (req, res) => {
  const languageId = parseInt(req.params.id, 10);
  const languageIndex = languages.findIndex(language => language.id === languageId);
  if (languageIndex < 0) {
    return res.status(404).send('Invalid language id');
  }
  languages[languageIndex].name = req.body.name;
  return res.redirect('/');
});

router.delete('/:id/', (req, res) => {
  const languageId = parseInt(req.params.id, 10);
  const languageIndex = languages.findIndex(language => language.id === languageId);
  if (languageIndex < 0) {
    return res.status(404).send('Invalid language id');
  }
  languages.splice(languageIndex, 1);
  return res.redirect('/');
});
module.exports = router;
