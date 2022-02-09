const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userID: {
        type: String,
        require: true,
        unique: true
    },
    userName: {
        type: String,
        require: true,
        unique: true
    },
    ServerID: {
        type: String,
        require: true
    },
});

const model = mongoose.model("users", userSchema);

module.exports = model;