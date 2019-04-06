import React, { Component } from 'react';
import './Board.css'
import martinaService from '../services/MartinaService'
import TopBrands from './brands/TopBrands';
import TopCat from './topcategories/TopCat';
import moment from 'moment';
//import { Column, ColumnForm } from './column';

class Board extends Component {
  state = { 
    weeks: []
   }

  render() {
    const now = new Date();
    const topWeekQuery = {
      startDate: moment(now).subtract('days', 7).format('YYYY-MM-DD')
    }
    return ( 
      <div className="Board container">
        <div className="row">
          <div className="col-8">
            <TopBrands query={topWeekQuery} />
          </div>
          <div className="col-4">
            <p>AAAAAAAAA</p>
            <TopBrands query={{ tag: 'Fashion' }} />
          </div>

        </div>
      </div>
     );
  }
}
 
export default Board;