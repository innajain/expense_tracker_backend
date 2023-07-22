const { default: mongoose } = require("mongoose");
const {formatDate} = require("../../utils/dateFuncs")

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
        default: new Date() 
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
        type: String,
        default: formatDate(new Date())
    },
    others: {
        type:Object,
        default: {}
    }
}, {strict: false})
module.exports = mongoose.model("transactions", transactionSchema)