import React from "react";
import {Clients_content} from '../Data/content'

const Happy_clients = () => {
  // const a = 0 ;
  return (
    <div className="happy_clients">
      <div className="row">
        <div className="col-md-6">
          <div id="carouselId" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#carouselId"
                data-slide-to="0"
                className="active"
              ></li>
              
              {
                Clients_content[0].map((el , index) => 
                  <li data-target="#carouselId" data-slide-to={index+1} key={index}></li>
                )
              }
              
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="header">
                  <img
                    src="./img/avatars/adult-blur-brick-walls-846741.jpg"
                    alt="First slide"
                  />
                  <h4>Erlic Anderson</h4>
                </div>
                <div className="body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil dolorem rerum debitis, veniam doloremque earum?
                  </p>
                </div>
              </div>
              {Clients_content[0].map((item , index)=> 
                
                <div className="carousel-item" key={index}>
                  <div className="header">
                    <img
                      src={item.img}
                      alt="Second slide"
                    />
                    <h4>{item.name}</h4>
                  </div>
                  <div className="body">
                    <p>{item.text}</p>
                  </div>
                </div>
                
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6 text">
          <h3>{Clients_content[1].title}</h3>
          <p>{Clients_content[1].txt}</p>
          <div className="btn">{Clients_content[1].btn}</div>
        </div>
      </div>
    </div>
  );
};

export default Happy_clients;
