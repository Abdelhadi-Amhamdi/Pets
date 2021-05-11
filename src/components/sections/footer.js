import React from "react";
import {socilaMedia} from '../Data/content'

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        
        <div className="col-md-12" id="rigth-footer">
          <p>All right saved 2021 <i className="fa fa-copyright" aria-hidden="true"></i></p>
          <ul className="footer-list-icons">
            {socilaMedia.map((item , index)=> 
              <li key={index}>
                <a href={item.url}>
                  <i className={item.icon} aria-hidden="true"></i>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
