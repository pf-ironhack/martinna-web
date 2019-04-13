import React, { Component } from 'react';
import martinaService from '../../services/MartinaService'
import './TopCat.css'
import CardRed from './CardRed';

class TopCat extends Component {

  state = {
    brands: []
  }

  componentDidMount() {
    // console.log(this.props);
    martinaService.getBrands(this.props.query)
      .then(
        (brands) => this.setState({ brands: brands }),
        (error) => console.error(error)
      )
  }

  render() {
    const { brands } = this.state;
    return (
      <div>
        <h2 className="TitleCatRed">Top Sneakers</h2>
        {brands.map(b => (
          <CardRed {...b} key={b.id}/>
          )
        )}
      </div>
    );
  }
}

export default TopCat;



{/* <div>
<h2 className="Title">Top Sweaters</h2>
<div className="TopCat">
  <CardRed />
</div>
</div> */}