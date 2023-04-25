import React from 'react'
import {frCond} from '../Lang/fr'
import {useSelector} from 'react-redux'

const Cond = () => {

    const current_language = useSelector(state => state.lang)

    return(
        <>
        <div className="cond">
            <div className="row">
                <div className="col-md-6 cond-images">
                    <div className="box"></div>
                    <div className="yellow"></div>
                    <img src="./img/avatars/adult-blur-brick-walls-846741.jpg" className="boy" alt="boy"/>
                    <img src="./img/avatars/attractive-beautiful-beautiful-girl-1028927.jpg" alt="girl" className="girl"/>
                </div>
                <div className="col-md-6 cond-text">
                    <div className="bigTitle">
                    { current_language === 'EN' ? "Made for families we trust" : frCond.title }
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magni a praesentium obcaecati nemo assumenda corporis voluptas, 
                    repellat harum amet provident nostrum illo explicabo voluptatem 
                    aut quo reiciendis repellendus? Culpa, ducimus.
                    </p>
                    <div className="btn">{ current_language === 'EN' ? "Join Us" : frCond.btn}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cond