import React from "react";
import {blogs} from '../Data/content'


const Blogs = () => {
  return (
    <div className="blogs">
      <div className="header">
        <h4>Latest News :</h4>
      </div>
      <div className="row">
        {blogs.map((blog , index)=> 
          <div className="col-md-4" key={index}>
            <div className="card">
                <div className="card-img">
                    <img src={blog.img} alt="blog-img" className="img-fluid" />
                </div>
                <div className="card-body">
                    <h6>{blog.type}</h6>
                    <h4>{blog.title}</h4>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat, ad?
                    </p>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
