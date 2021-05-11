import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="row">
        <div className="col-md-6">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            sit beatae quibusdam delectus voluptatum qui aspernatur
            voluptatibus? Molestiae quis nam nesciunt cum optio dolores eveniet,
            pariatur magnam reprehenderit culpa dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, temporibus! Repudiandae obcaecati libero corporis fugit,
            eveniet voluptates non eius ea dolorum ab, sint totam maiores quidem
            maxime, nihil iste. Recusandae, fugiat consequuntur optio, eius at
            iusto est deleniti iste aliquam sunt esse voluptatem? Maiores
            tempora consequatur pariatur odit dolorum eligendi!
          </p>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label htmlFor="">Name :</label>
            <input type="text" placeholder="Jhon Deo"/>

            <label htmlFor="">Email :</label>
            <input type="email" placeholder="example@email.com"/>

            <label htmlFor="">Subject :</label>
            <textarea cols="30" rows="6" placeholder="fugiat consequuntur optio, eius at
            iusto est deleniti iste aliquam sunt esse voluptatem?"></textarea>

            <button className="btn">Sent</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
