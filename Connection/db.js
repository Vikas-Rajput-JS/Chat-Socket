const mongoose = require('mongoose')
const Connection = mongoose.connect('mongodb://0.0.0.0:27017/Chat')
if(Connection){
    console.log('Database is connected succesfully')
}