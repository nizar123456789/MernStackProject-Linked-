const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DevOpsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('DevOpsProduct', DevOpsSchema)