import React, { Component } from 'react';
import './Board.css'
import martinaService from '../services/MartinaService'
import TopBrands from './brands/TopBrands';
import TopCat from './topcategories/TopCat';
import moment from 'moment';


class Board extends Component {
  state = { 
    weeks: []
   }

  render() {
    const now = new Date();
    const topWeekQuery = {
      startDate: moment(now).subtract('days', 7).format('YYYY-MM-DD')
    }
    const topLastWeekQuery = {
      startDate: moment(now).subtract('days', 14).format('YYYY-MM-DD'),
      endDate: moment(now).subtract('days', 7).format('YYYY-MM-DD')
    }
    return ( 
      <div className="Board container">
        <div className="row">
          <div className="col-8">
            <TopBrands query={topWeekQuery} />
            <TopBrands query={topLastWeekQuery} />
          </div>
          <div className="col-4">
            <TopCat query={{ tag: 'Sneakers and Shoes' }} />
            <TopCat query={{ tag: 'Android' }} />
          </div>
        </div>
      </div>
     );
  }
}
 
export default Board;