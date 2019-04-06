import React, { Component } from 'react';
import './Board.css'
import martinaService from '../services/MartinaService'
import Week from './week/Week';
import TopCat from './topcategories/TopCat';
//import { Column, ColumnForm } from './column';

class Board extends Component {
  state = { 
    weeks: []
   }

  render() { 
    return ( 
      <div className="Board">
        <Week />
        <TopCat />
      </div>
     );
  }
}
 
export default Board;