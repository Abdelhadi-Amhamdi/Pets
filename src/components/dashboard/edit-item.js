import React , {useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {Url} from '../Data/content'

const Edit = (data) => {
    const currentPost = useSelector(state => state.EditPost)
    const [name, setname] = useState(currentPost.name)
    const [description, setdescription] = useState(currentPost.description)
    const [age, setage] = useState(currentPost.age)
    const [categorie, setcategorie] = useState(currentPost.categorie)
    const [image, setimage] = useState()
    

     


    function EditItem(e){
        
        const formData = new FormData()

        formData.append('name' , name)
        formData.append('age' , age)
        formData.append('description' , description)
        formData.append('categorie' , categorie)
        formData.append('image' , image)

        e.preventDefault();
        axios.put(Url+'/posts/edit/'+currentPost._id , formData , {
            headers:{
                'Content-Type' : 'multipart/form-data',
            }
        })
        .then(res => {
            console.log(res)
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
            <form method="post" className="form-group" onSubmit={EditItem}>
                <label htmlFor="">Image :</label>
                <input 
                    type="file" 
                    className="form-control"
                    onChange={(e)=> setimage(e.target.files[0])}
                />
                <label htmlFor="">Name :</label>
                <input 
                    type="text" 
                    className="form-control" 
                    defaultValue={currentPost.name}
                    onChange={(e) => setname(e.target.value)}
                />
                <label htmlFor="">Description :</label>
                <textarea 
                    cols="30" 
                    rows="10" 
                    className="form-control"
                    defaultValue={currentPost.description}
                    onChange={(e) => setdescription(e.target.value)}
                ></textarea>
                <label htmlFor="">Price :</label>
                <input 
                    type="price" 
                    className="form-control" 
                    defaultValue={currentPost.age}
                    onChange={(e) => setage(e.target.value)}
                />
                <label htmlFor="">Categorie :</label>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={(e) => setcategorie(e.target.value)}
                    defaultValue={currentPost.categorie}
                />

                <input type="submit" className="btn btn-primary btn-block mt-4" value="Edit"/>
            </form>
        </>
    )
}

export default Edit