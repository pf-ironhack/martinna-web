import React, { Component } from 'react';

import './CardRed.css'

const CardRed = (props) => {
  return ( 
    <div className="CardRed card mb-3" style={{maxWidth: 540 + "px"}}>
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="Title card-title">Card title</h5>
            <p className="Description card-text">This is a wider card with.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
          <div className="col-md-4">
          <img src="..." className="card-img" alt="..."/>
        </div>
        </div>
      </div>
    </div>
   );
}
 
export default CardRed;