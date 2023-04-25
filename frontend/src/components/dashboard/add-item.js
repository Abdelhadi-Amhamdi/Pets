import React , {useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Url} from '../Data/content'

const Add = (data) => {
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [age, setage] = useState('')
    const [categorie, setcategorie] = useState('')
    const [image , setImage] = useState()

   
    function ADDNewItem(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('avatar' , image)
        formData.append('name' , name)
        formData.append('description' , description)
        formData.append('age' , age)
        formData.append('categorie' , categorie)
        axios.post(Url+'/posts/add' , formData , {
            headers:{
                'Content-Type' : 'multipart/form-data',
            }
        })
        .then(res => {
            if(res.data === true) {
                window.location = "/home"
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <>
            <Link to="/home" className="btn btn-danger">back</Link>
            <form  method="post" className="form-group" onSubmit={ADDNewItem}>
                <label htmlFor="">Image :</label>
                <input 
                    type="file" 
                    className="form-control"
                    onChange={(e)=> setImage(e.target.files[0])}
                />
                <label htmlFor="">Name :</label>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={(e) => setname(e.target.value)}
                />
                <label htmlFor="">Description :</label>
                <textarea 
                    cols="30" 
                    rows="10" 
                    className="form-control"
                    onChange={(e) => setdescription(e.target.value)}
                ></textarea>
                <label htmlFor="">age :</label>
                <input 
                    type="price" 
                    className="form-control" 
                    onChange={(e) => setage(e.target.value)}
                />
                <label htmlFor="">Categorie :</label>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={(e) => setcategorie(e.target.value)}
                />

                <input type="submit" className="btn btn-primary btn-block mt-4" value="add"/>
            </form>
        </>
    )
}

export default Add