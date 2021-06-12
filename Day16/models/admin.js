const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name : {type: String, required: true},
        age : {type: Number},
        email : {type: String, required: true, unique: true}
    }
)

mongoose.export();