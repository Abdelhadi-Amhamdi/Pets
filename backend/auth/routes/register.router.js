const router = require('express').Router();
const {registerValidation} = require('../../validation')
let User = require('../models/register.model')
const bcrypt = require('bcryptjs')


router.post('/add' , async (req , res) => {

    const {error} = registerValidation(req.body)
    if(error) return res.json(error.details[0].message)

    const EmailExist = await User.findOne({email : req.body.email})
    if(EmailExist) return res.json('this email is alredy exist !')

    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(req.body.password , salt)

    const Adduser = new User({
         username : req.body.name,
         email : req.body.email,
         password : hashedpass 
    })
        Adduser.save()
        .then(()=> res.json(true))
        .catch(err => res.json(err))
        
})

router.get('/' , async (req , res) => {
    const users = await User.find();
    res.json(users)
})

router.get('/all' , async (req , res) => {
    const all = await User.find();
    res.json(all)
})
router.delete('/delete' ,  (req , res)=> {
    User.deleteMany()
    .then(()=> res.json('deleted'))
})

module.exports = router