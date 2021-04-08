var Author = require('../models/author');

// Display list of all Authors
exports.author_list = (req, res) => {
  res.send('Dummy');
}

exports.author_details = (req, res) => {
  res.send('Dummy' + req.params.id);
}

exports.author_create_get = (req, res) => {
  res.send('Dummy');
}

exports.author_create_post = (req, res) => {
  res.send('Dummy');
}

exports.author_delete_get = (req, res) => {
  res.send('Dummy');
}

exports.author_delete_post = (req, res) => {
  res.send('Dummy');
}

exports.author_update_get = (req, res) => {
  res.send('Dummy');
}

exports.author_update_post = (req, res) => {
  res.send('Dummy');
}
