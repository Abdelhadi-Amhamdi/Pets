import React, { useState } from "react";
import axios from "axios";
import { useDispatch , useSelector } from "react-redux";
import { search } from "../../redux/actions/index";
import {frSlider} from '../Lang/fr'
import {enSlider} from '../Lang/en'
import {useLocalStorage} from '../../hooks/LocalStorage'
import Stiker from './stiker'
import {Url} from '../Data/content'

const Slide = () => {
  const [query, setquery] = useState("");
  const [par, setpar] = useState("dog");

  const Current_language =  useSelector(state => state.lang)


  const [lang] = useLocalStorage('lang' , 'English')
  const Dispatch = useDispatch();

  const getPet = (e) => {
    e.preventDefault();
    const f = query[0].toUpperCase()
    const q = query.replace(query[0] , f);
    const p = par
  
    axios
      .get(Url+"/posts/get/"+q+'/'+p)
      .then((res) => {
        const data = res.data;
        Dispatch(search(data));
      })
      .catch((err) => {
        console.log(err , lang);
      });
      
  };

  return (
    <>
      <div className="slide">
        <div className="big"></div>
        <div className="small"></div>
        <Stiker />
        <div className="slide-text">
          <p>{Current_language === 'EN' ? enSlider.smallT : frSlider.smallT}</p>
          {Current_language === 'EN' ? 
          <h1 className="title"><span>adopt</span> pure Love</h1> :
          <h1 className="title">{frSlider.bigT}</h1>
          }
        </div>
        <div className="search">
          <div className="text-search">
            <h4>{Current_language === 'EN' ? enSlider.searchT : frSlider.searchT}</h4>
          </div>
          <div className="row body-search">
            <div className="col-md-3">
              <div className="form-group">
                <label>{Current_language === 'EN' ? enSlider.es : frSlider.es}</label>
                <select
                  className="form-control select-search"
                  onChange={(e) => {setpar(e.target.value)}}
                >
                  <option>{Current_language === 'EN' ? enSlider.dog : frSlider.dog}</option>
                  <option>{Current_language === 'EN' ? enSlider.cat : frSlider.cat}</option>
                </select>
              </div>
            </div>
            <div className="col-md-9">
              <form className="form-search" onSubmit={getPet}>
                <input
                  className="form-control input-search"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setquery(e.target.value);
                  }}
                />
                <button className="btn-search" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
