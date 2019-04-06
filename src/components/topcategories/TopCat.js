import React, { Component } from 'react';

import './TopCat.css';
import CardRed from './CardRed';

const TopCat = (props) => {
  return ( 
    <div>
      <h2 className="Title">Top Sweaters</h2>
      <div className="TopCat">
        <CardRed />
      </div>
    </div>
   );
}
 
export default TopCat;