import React, { Component } from 'react';

import './Card.css'

const Card = (props) => {
  return ( 
    // <div className="Card">
      <div className="card mb-3 Card" style={{maxWidth: 624 + "px", marginLeft: 252 + "px" }}>
        <div className="row no-gutters">
          <div className="col-md-2">
            <img src={props.logo} className="Img card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="TitleCard" style={{width: 384 + "px"}}>{props.title}</h5>
              <p className="DescriptionCard" style={{width: 384 + "px", height: 21 + "px"}}>{props.description.substr(0, 49)+"..."}</p>
              <p className="Category"><small className="text-muted">{props.tags[0]}</small></p>
            </div>
          </div>
          <div className="col-md-2">
          <p className="Vote" style={{width: 64 + "px", height: 72 + "px", borderRadius: 4 + "px", border: "green"}}>{props.userLikes.length}</p>
          </div>
        </div>
      </div>
    // </div>
   );
}
 
export default Card;