var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
  book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
  imprint: {type: String, required: true},
  status: {type: String, required: true, enum: ['Available', 'Maintainance', 'Loaned', 'Reserved'], default: 'Maintainance'},
  due_back: {type: Date, default: Date.now()}
});

// Virtual for bookInstance's URL
BookInstanceSchema.virtual('url')
.get(function() {
  return '/catalog/bookintsance/' + this._id;
});

// Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);
