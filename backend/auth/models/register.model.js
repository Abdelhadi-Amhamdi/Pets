const db = require('mongoose')

const Schema = db.Schema


const registerSchema = new Schema({
    username : { type:String , required : true },
    email : { type:String , required : true , unique : true  },
    password : { type:String , required : true},
} , {
    timestamps : true
})



const Register = db.model('Users' , registerSchema);

module.exports = Register