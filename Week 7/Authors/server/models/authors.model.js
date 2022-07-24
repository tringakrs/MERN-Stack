const mongoose = require("mongoose");

const AuthorsSchema = {
    name: {
        type: String,
        required: [true, 'name is required'],
        minLength: [3, 'name must be at least 3 chars'],
    },
};

module.exports = mongoose.model("Author", AuthorsSchema);
