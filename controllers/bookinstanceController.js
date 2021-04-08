var BookInstance= require('../models/bookinstance');

// Display list of all Authors
exports.bookinstance_list = (req, res) => {
  res.send('Dummy');
}

exports.bookinstance_details = (req, res) => {
  res.send('Dummy' + req.params.id);
}

exports.bookinstance_create_get = (req, res) => {
  res.send('Dummy');
}

exports.bookinstance_create_post = (req, res) => {
  res.send('Dummy');
}

exports.bookinstance_delete_get = (req, res) => {
  res.send('Dummy');
}

exports.bookinstance_delete_post = (req, res) => {
  res.send('Dummy');
}

exports.bookinstance_update_get = (req, res) => {
  res.send('Dummy');
}

exports.bookinstance_update_post = (req, res) => {
  res.send('Dummy');
}
