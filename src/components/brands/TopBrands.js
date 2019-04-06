
import React, { Component } from 'react';
import martinaService from '../../services/MartinaService'
import './TopBrands.css'
import Card from '../brandcard/Card';

class TopDateRange extends Component {

  state = {
    brands: []
  }

  componentDidMount() {
    console.log(this.props);
    martinaService.getBrands(this.props.query)
      .then(
        (brands) => this.setState({ brands: brands }),
        (error) => console.error(error)
      )
  }

  render() {
    const { brands } = this.state;
    return (<div>
      <h2 className="Title">Top 10 of this Week</h2>
      {brands.map(b => (
        <p key={b.id}>{b.title}</p>)
      )}
        <div className="Week"><Card /></div>
      </div>
    );
  }
}

export default TopDateRange;