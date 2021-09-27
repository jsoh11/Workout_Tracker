const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    type: {
        type: String,
        trim: true,
        required: "Enter the type of work out"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter the name of the workout"
    },
    duration: {
        type: Number,
        required: "How long was the workout"
    },
    weight: {
        type: Number,
        required: "How much weight was it?"
    },
    reps: {
        type: Number,
        required: "How many reps was it?"
    },
    sets: {
        type: Number,
        required: "How many sets was it?"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
