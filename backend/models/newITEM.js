const db = require('mongoose')

const Schema = db.Schema
const newItemSchema = new Schema({
    name : {type : String},
    description : {type : String},
    age : {type : String},
    categorie : {type : String},
    image : {type : String}
})

const Item = db.model('item' , newItemSchema) 
module.exports = Item