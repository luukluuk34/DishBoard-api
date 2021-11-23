const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const getModel = require('./model_cache');

const UserSchema = new Schema({
    FirstName:{
        type: String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:[true,"User needs to have a unique e-mail"]
    },
    About:{
        type:String,
    },
    DateOfBirth:{
        type:Date,
        required:true,
    },
    //fill in list of saved redcipes en Made Recipes.
});

module.exports = getModel('User', UserSchema);
 