import React, { Component } from 'react';
import martinaService from '../../services/MartinaService'
import './Week.css'
import Card from '../brandcard/Card';

const Week = (props) => {


  
  return ( 
    <div>
      <h2 className="Title">Top 10 of this Week</h2>
      <div className="Week">
        <Card />
      </div>
    </div>
   );
}
 
export default Week;