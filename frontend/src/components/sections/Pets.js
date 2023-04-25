import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {Url} from '../Data/content'
import {frPet} from '../Lang/fr'
import {enPet} from '../Lang/en'

const Pets = () => {
  const search = useSelector((state) => state.Search);
  const current_language = useSelector((state) => state.lang);
  const [index, setindex] = useState(0);
  const [age, setage] = useState("");
  const [img, setimg] = useState("");
  const [name, setname] = useState("");
  const [pet_id, setpet_id] = useState("")

  useEffect(() => {
    function getData() {
      axios
        .get(Url+"/posts")
        .then((res) => {
          console.log(res)
          setpet_id(res.data[index]._id)
          setage(res.data[index].age);
          setname(res.data[index].name);
          setimg(res.data[index].image.replace("public", "."));
        })
        .catch((err) => {
          console.log(err );
        });
    }
    getData();
  }, [index]);
  useEffect(() => {
    if (search === null) {
      console.log("null");
    } else if (search === "") {
      console.log("undefined");
    } else {
      setname(search.name);
      setage(search.age);
      setimg(search.image.replace("public", "."));
    }
  }, [search]);
 
 

  function next() {
    setindex(index + 1);
  }
  function prev() {
    setindex(index - 1);
  }

  console.log(pet_id)

  return (
    <>
      <div className="pets">
        <div className="pet-text">
          
          <h1 className="title">{current_language === 'EN' ? enPet.name : frPet.name} {name}</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            sapiente commodi ad vitae, nihil numquam facilis suscipit itaque
            ratione assumenda!
          </p>
          <h6 className="year">{age} {current_language === 'EN' ? enPet.year : frPet.year}</h6>
          {/* <button
            className="btn"
            onClick={() => {
              setadopt_id(pet_id);
            }}
          >
            Adopt It
          </button> */}
        </div>
        <div className="Pet-img">
          <img src={img} alt="pet-img" />
          <button onClick={prev} className="next">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </button>
          <button onClick={next}>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pets;
