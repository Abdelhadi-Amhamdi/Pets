const db = require('mongoose')

const Schema = db.Schema


const LoginSchema = new Schema({
    email : {type:String},
    password : {type:String},
    username : {type:String},
} , {
    timestamps : true
})

const Login = db.model('user' , LoginSchema) ;

module.exports = Login