const mongoose = require('mongoose');
//class schema

const ClassSchema = mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    Instructor:
    {
        type: String
    },
    //Array of objects
    lessions:[{
        lession_number: {type: Number},
        lession_title: {type: String},
        lession_body: {type: String}
    }]
});

const Class = module.exports = mongoose.model('Class', ClassSchema);

//Fetch All classes

module.exports.getClasses = function(callback,limit)
{
    Class.find(callback).limit(limit);
}
