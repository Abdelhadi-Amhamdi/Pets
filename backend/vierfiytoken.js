const jwt = require('jsonwebtoken')


module.exports = function (req , res , next) { 
    const token = req.header('auth-token');
    if(!token) return res.send({denie:'access dinaied'})

    try {
        const verified = jwt.verify(token , process.env.SECRET_TOKEN)
        req.user = verified
        next()
    }catch(err) {
        res.send('invalid token')
        
    }
}