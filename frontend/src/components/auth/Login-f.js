import React from 'react'
import { useState} from 'react'
import axios from 'axios'
import {useLocalStorage } from '../../hooks/LocalStorage'
import {useHistory} from 'react-router-dom'
import {Url} from '../Data/content'

const LoginSection = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [token , setToken] = useLocalStorage('auth-token' , '')
    const [name , setname] = useLocalStorage('username' , '')

    const History = useHistory()

    function makeAccess(e) {
        e.preventDefault()
        const info = {
            email ,
            password,
        }
        axios.post(Url+'/login' , info)
        .then(res => {
            console.log(res)
            if(res.data.data) {
                setToken(res.data.data.token)
                setname(res.data.data.username)
                History.push('/home');
                console.log(token , name)
            }else {
                alert(res.data)
            }
        })
        .catch(err => {
            console.log(err)
        })

    }
    return(
            <div className="login-form">
                <form className="form-group" onSubmit={makeAccess}>


                    <label>Email :</label>
                    <input 
                        type="email" 
                        className="form-control"
                        onChange={(e) => setemail(e.target.value)}
                    />
                    
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        onChange={(e) => setpassword(e.target.value)}
                    />

                    <input type="submit" value="login" className="btn btn-block mt-4"/>
                </form>
            </div>
    )
}

export default LoginSection