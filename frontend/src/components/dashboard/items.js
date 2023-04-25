import React , {useEffect , useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useLocalStorage} from '../../hooks/LocalStorage'
import {PostsData} from '../../redux/actions'
import {spliceItem , EditItem} from '../../redux/actions'
import {useDispatch , useSelector} from 'react-redux'
import {Url} from '../Data/content'

const Items = () => {


    const [id, setid] = useState()
    const [token] = useLocalStorage('auth-token')
    const Dispatch = useDispatch();
    const data = useSelector(state => state.Posts)

    useEffect(() => {
        function GetItems(){
            const headers = {headers : {'auth-token' : token}}
            axios.get(Url+'/posts' , headers)
            .then(res => {
                console.log(res)
                Dispatch(PostsData(res.data))
            })
            .catch(err => {
                console.log(err)
            })
        }
        GetItems()
    }, [Dispatch ,token])

    

    useEffect(() => {
        
        axios.delete(Url+'/posts/delete/'+id )
        .then(res => {
            if(res.data === true) {
                Dispatch(spliceItem(id))
            }
        })
        .catch(err => {
            console.log(err)
        })
    }, [id , Dispatch])

    
    

    

 

    return(
        <>
        <div className="row Items">
            {data.map((item , id ) => {
                const img = item.image.replace("public" , '.')
                return(
                    <div className="card col-md-4" key={id}>
                        <div className="card-body">
                           <img src={img} className="item-img" alt="pet-img"></img>
                           <div className="infos">
                                <p>{item.categorie}</p>
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.age} Years old</p>
                                    <Link 
                                        className="btn btn-warning"
                                        to="/edit"
                                        onClick={()=> Dispatch(EditItem(item))}
                                    >edit</Link>
                                <div 
                                    className="btn btn-danger" 
                                    onClick={
                                        () => setid(item._id)
                                }>delete</div>
                           </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default Items