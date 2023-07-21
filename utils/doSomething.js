const {formatDate} = require("./dateFuncs")
const transactionsModel = require("../db/Models/transactionsModel")

exports.doOnAllData = async()=>{
    console.log("func started")
    const lst = await transactionsModel.find()
    lst.forEach(async item=>{
        item.date.setHours(1,0,0,0)
        await transactionsModel.findOneAndUpdate({_id: item.id}, {date_text: formatDate(item.date)})
    })
    console.log("func ended")
}