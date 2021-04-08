var Genre = require('../models/genre');

// Display list of all genres
exports.genre_list = (req, res) => {
  res.send('Dummy');
}

exports.genre_details = (req, res) => {
  res.send('Dummy' + req.params.id);
}

exports.genre_create_get = (req, res) => {
  res.send('Dummy');
}

exports.genre_create_post = (req, res) => {
  res.send('Dummy');
}

exports.genre_delete_get = (req, res) => {
  res.send('Dummy');
}

exports.genre_delete_post = (req, res) => {
  res.send('Dummy');
}

exports.genre_update_get = (req, res) => {
  res.send('Dummy');
}

exports.genre_update_post = (req, res) => {
  res.send('Dummy');
}
