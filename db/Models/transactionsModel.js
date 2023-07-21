const { default: mongoose } = require("mongoose");

const transactionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        default: []
    },
    date_text:{
        type: String
    },
    others: {
        type:Object,
        default: {}
    }
}, {strict: false})
module.exports = mongoose.model("transactions", transactionSchema)