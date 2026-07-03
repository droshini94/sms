const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    planName: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    features: {
        type: [String],
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model("Plan", planSchema);