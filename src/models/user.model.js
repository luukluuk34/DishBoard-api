const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const getModel = require('./model_cache');

const UserSchema = new Schema({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"User needs to have a unique e-mail"]
    },
    about:{
        type:String,
    },
    dateOfBirth:{
        type:Date,
        required:true,
    },
    //fill in list of saved redcipes en Made Recipes.
});

module.exports = getModel('User', UserSchema);
 