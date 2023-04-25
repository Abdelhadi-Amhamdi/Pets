import React from 'react'
import Slider from './slider'
import Pets from './Pets'
import Cond from './cond'
import Services from './services'
import Clients from './clients.jsx'
import Blogs from './blog.jsx'
import Map from './map.jsx'
import Contact from './contact.jsx'
import Footer from './footer'

const Index = () => {
    return(
        <>
        <Slider />
        <Pets />
        <Cond />
        <Services />
        <Clients />
        <Blogs />
        <Map /> 
        <Contact />
        <Footer /> 
        </>
    )
}

export default Index