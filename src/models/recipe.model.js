const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const getModel = require('./model_cache');
const User = require('./user.model')() 

const RecipeSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    time:{
        type:Number,
        required:true,
    },
    forAmountOfPeople:{
        type:Number,
        required:true,
    },
    description:[{
        type:String,
        required:true,
    }],
    tips:{
        type:String,
    },
    user_id: {
        type:String,
        required:true,
    },
    imgUrl: {
        type:String,
        required:true,
    }
});

module.exports = getModel('Recipe', RecipeSchema);
 