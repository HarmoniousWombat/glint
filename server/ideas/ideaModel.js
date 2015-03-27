// Idea Model
// ----------
//
// The Idea model defines the structure of all of the Idea documents created.

var mongoose = require('mongoose');

var IdeaSchema = new mongoose.Schema({
    board: { type: String, default: 'global' },
    title: String,
    text: { type: String, default: '' },
    detailsMD: { type: String, default: '' },
    detailsHTML: String,
    votes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    created_by: { type: String, default: 'anonymous' },
    created_at: { type: Date, default: Date.now },
    category: { type: String, default: '' },
    tags: [String],
    roles: [String],
    comments: { type: Number, default: 0 },
    delete_flag: { type: Boolean, default: false }
});

module.exports = mongoose.model('Idea', IdeaSchema);
