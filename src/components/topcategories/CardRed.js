import React, { Component } from 'react';

import './CardRed.css'

const CardRed = (props) => {
  return ( 
    <div className="Shape card">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="TitleRed card-title">{props.title.length > 20 ? props.title.substr(0, 20)+"..." : props.title}</h5>
            <p className="DescriptionRed card-text">{props.description.substr(0, 49)+"..."}</p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={props.logo} className="ImgRed card-img" alt="..."/>
        </div>
      </div>
    </div>
   );
}
 
export default CardRed;