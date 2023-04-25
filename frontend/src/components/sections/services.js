import React from "react";
import { serviceData } from "../Data/content";
import {fr_Services} from '../Lang/fr'
import {useSelector} from 'react-redux'

const Services = () => {

  const current_language = useSelector(state => state.lang)

    return (
      <div className="services">
        <div className="row">
          <div className="col-md-6">
            <div className="left">
              <h1>{current_language === 'EN' ? "Simple" : fr_Services.one}</h1>
              <h1>{current_language === 'EN' ? "Easy" : fr_Services.tow }</h1>
              <h1>{current_language === 'EN' ? "Lets go" : fr_Services.tree}</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                inventore eum porro illo, sapiente magnam, et saepe, deserunt
                atque nostrum ea! Perferendis nihil, ut animi officiis tenetur
                quisquam est aperiam.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right">
              <div>
                {serviceData.map((item) => {
                  return (
                    <div className="serv" key={item.id}>
                      <div className="top">
                        <i className={item.icon} aria-hidden="true"></i>
                        <div className="title">{item.title}</div>
                      </div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Id eaque provident assumenda laborum nemo error,
                        odit at corporis? Aut, quisquam.
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Services

