import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/LocalStorage";
import { enNav } from "../Lang/en";
import {Url} from '../Data/content'
import {useDispatch , useSelector} from 'react-redux'
import {Lang} from '../../redux/actions/index'

const Navbar = () => {

  const current_lang = useSelector(state => state.lang)
  console.log(current_lang)
  let open = false 
  const Dispatch = useDispatch()
  const [token, setToken] = useLocalStorage("auth-token", "");
  const [username, setUsername] = useLocalStorage("username", "");
  const [lang, setlang] = useLocalStorage("lang", "English");
  const [login, setlogin] = useState(false);
  useEffect(() => {
    axios
      .get(Url+"/login/auth", {
        headers: { "auth-token": token },
      })
      .then((res) => {
        console.log(res);
        if (res.data === true) {
          setlogin(true);
        } else {
          setlogin(false);
        }
      })
      .catch((err) => {
        console.log(err );
      });
  }, [token]);

  function goBack() {
    window.location = "/";
    console.log(lang)
  }


  function openBerger(){
    const berger = document.querySelector('.berger')
    const clip = document.querySelector('.clip')
    const content = document.querySelector('.content-nav')
    if(!open){
      berger.classList.add('open')
      clip.classList.add('clip-open')
      open = true
      content.style.display = 'block'
    }else{
      berger.classList.remove('open')
      clip.classList.remove('clip-open')
      open = false
      content.style.display = 'none'
    }
    
  }

  return (
    <nav className="navbar">
      <div className="berger" onClick={openBerger}>
        <div className="item"></div>
      </div>
      <div className="clip">
          <div className="content-nav">
            {/* left */}
            <ul className="nav-list">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {current_lang === "EN"
                    ? enNav.home
                    : "Accueil"}
                </Link>
              </li>
              <li className="nav-item" id="policy">
                <div className="nav-link">
                  {current_lang === "EN"
                    ? enNav.policy : 
                    "Droits"}
                </div>
                <p className="hiden policy-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
                  obcaecati placeat illo nulla harum labore, aspernatur eius
                  consequatur possimus omnis quibusdam, tempora autem perspiciatis
                  magni numquam quasi ex eligendi et facilis corrupti accusantium
                  tenetur nam voluptatibus! Quo ut cum iste commodi, similique
                  repellendus quisquam mollitia expedita nisi iusto vero quod ex
                  
                </p>
              </li>
              <li className="nav-item"  id="about">
                <div className="nav-link">
                  {current_lang === "EN"
                    ? enNav.about
                    : "Pour Nous"}
                </div>
                <p className="hiden text-about">
                  <img src="./img/avatars/adult-blur-brick-walls-846741.jpg" alt="avatar-img"/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                  cumque exercitationem commodi odio voluptatem ea? In optio sequi
                  voluptatum natus quis. Harum, unde architecto, laudantium nemo
                  fugit corrupti neque velit suscipit libero assumenda, atque
                  tenetur consequatur ea blanditiis quam. Corporis beatae facere
                  </p>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  {current_lang === "EN"
                    ? enNav.contact
                    : "Contactez nous"}
                </a>
              </li>
          <li className="nav-item">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="triggerId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {current_lang === "EN"
                  ? "English"
                  :  "French"}
              </button>
              <div className="dropdown-menu" aria-labelledby="triggerId">
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setlang("French");
                    Dispatch(Lang('FR'))
                  }}
                >
                  French
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setlang("English");
                    Dispatch(Lang('EN'))
                  }}
                >
                  English
                </div>
              </div>
            </div>
          </li>
        </ul>


        {/* right */}
        
         </div>
      </div>
      <div className="phone">
        <i className="fa fa-phone-square" aria-hidden="true"></i> : +2126060606236
      </div>
      <div style={{display:'none'}}>
      {login ? (
          <ul className="auth" id="auth">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                {current_lang === "EN"
                  ? enNav.dash: "Control"}
              </Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="triggerId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {username}
                </button>
                <div className="dropdown-menu" aria-labelledby="triggerId">
                  <button
                    className="dropdown-item"
                    onClick={() => setToken("") || setUsername("") || goBack()}
                  >
                    {current_lang === "EN"
                      ? enNav.out
                      : "Sortire"}
                  </button>
                </div>
              </div>
            </li>
          </ul>
        ) : (
          <ul className="auth" id="auth">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                {current_lang === "EN"
                  ? enNav.login :  "Access"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                {current_lang === "EN"
                  ? enNav.reg : "Neuvelle Acount"}
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
