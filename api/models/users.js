const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema ({
        name: { type: String, required: true },
        character: { type: String, required: true },
});

module.exports = mongoose.model('user', user)
