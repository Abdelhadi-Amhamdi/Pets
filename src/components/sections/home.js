import React from 'react'
import Error from './404'
import IndexHome from '../dashboard/index'
import {useLocalStorage} from '../../hooks/LocalStorage'

const Home = () => {
    
    const [token ] = useLocalStorage('auth-token' , '')


    return(
        <>
        {
            token ? <IndexHome /> : <Error />
        }
        
        </>
    )
}

export default Home