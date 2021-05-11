import React , {useState} from 'react' 
import axios from 'axios'
import {Url} from '../Data/content'


const RegisterSection  = () =>{

    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')

    function sentData(e) {
        e.preventDefault()
        const info = {
            email ,
            name : username ,
            password : pass
        }
        axios.post(Url+'/register/add' , info)
        .then(res => {
            if(res.data === true){
                window.location = "/login"
            }else{
                alert(res.data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div className="register-form">
                <form className="form-group" onSubmit={sentData}>
                    <label>UserName</label>
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={(e) => setusername(e.target.value)}
                    />
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control"
                        onChange={(e)=> setemail(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        onChange={(e) => setpass(e.target.value)}
                    />

                    <input type="submit" value="register" className="btn btn-block mt-4"/>
                </form>
            </div>
    )
}

export default RegisterSection