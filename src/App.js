import React  from 'react'
import {BrowserRouter as Router , Route  } from 'react-router-dom'
import './scss/welcome.css'
import './scss/responsve.css'



import Navbar from './components/sections/navbar'

// auth 
import register from './components/auth/register-f'
import login from './components/auth/Login-f'
import home from './components/sections/home'
import Index from './components/sections/index'



class App extends React.Component {


  render() {
      return(
        <Router>
          
          <div className="container">
            <Navbar />
            <br />
            <Route path="/" exact component={Index}/>
            <Route path="/register" component={register} />
            <Route path="/login" component={login} />
            <Route path="/home" component={home} />
          </div>
        </Router>
      ) 
    }

}
export default App

