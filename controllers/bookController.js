var Book = require('../models/book');

exports.index = (req, res) => {
  res.send('Dummy');
}

// Display list of all books
exports.book_list = (req, res) => {
  res.send('Dummy');
}

exports.book_details = (req, res) => {
  res.send('Dummy' + req.params.id);
}

exports.book_create_get = (req, res) => {
  res.send('Dummy');
}

exports.book_create_post = (req, res) => {
  res.send('Dummy');
}

exports.book_delete_get = (req, res) => {
  res.send('Dummy');
}

exports.book_delete_post = (req, res) => {
  res.send('Dummy');
}

exports.book_update_get = (req, res) => {
  res.send('Dummy');
}

exports.book_update_post = (req, res) => {
  res.send('Dummy');
}
