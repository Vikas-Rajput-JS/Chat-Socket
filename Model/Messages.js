const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    message:{type:String,default:''},
    user:{type:String,required:true},
    date:{type:Date,default:Date.now}
})

const Model = mongoose.model('chats',MessageSchema)

module.exports =Model;