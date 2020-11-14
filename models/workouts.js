const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let workout = new Schema ({
    day: {
        type:Date,
        default:Date.now

    },
    exercises: [
      {
        type: {
            type:String,
            required:true,
            trim:true
        },
        name: {
            type:String,
            required:true,
            trim:true
        },
        duration: {
            type:Number
        },
        weight: {
            type:Number
        },
        reps: {
            type:Number
        },
        sets: {
            type:Number
        },
        distance: {
            type:Number
        }
      }
    ]

});

module.exports = mongoose.model('workouts', workout);