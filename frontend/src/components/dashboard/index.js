import React from 'react'
import { BrowserRouter as Router , Link, Route } from 'react-router-dom'
import Add from './add-item'
import Items from './items'
import Edit from './edit-item'
import '../../scss/home.css'


const IndexHome = () => {
    return(
        <>
            <div className="home">
                <Router>
                    <Link to="/add" className="btn" >Add New Pet</Link>
                    <Route exact path="/add" component={Add} />
                    <Route path="/home" exact component={Items}/>
                    <Route path="/edit" component={Edit} />  
                </Router>
            </div>
            
        </>
    )
}
export default IndexHome