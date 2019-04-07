
import React, { Component } from 'react';
import martinaService from '../../services/MartinaService'
import './TopBrands.css'
import Card from '../brandcard/Card';

class TopBrands extends Component {

  state = {
    brands: []
  }

  componentDidMount() {
    martinaService.getBrands(this.props.query)
      .then(
        (brands) => this.setState({ brands: brands }),
        (error) => console.error(error)
      )
  }

  render() {
    const { brands } = this.state;
    return (
      <div className="TopBrands">
        <h2 className="MainTitle">Top 10 of this Week</h2>
        {brands.map(b => (
          <Card {...b} key={b.id} />
          )
        )}
      </div>
    );
  }
}

export default TopBrands;