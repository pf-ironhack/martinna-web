import React, { Component } from 'react';
import './Categories.css'
import martinaService from '../services/MartinaService'

class Categories extends Component {
  state = { 
    categories: []
   }

   componentDidMount() {
     martinaService.getCategories()
      .then(
        (categories) => this.setState({ categories: categories }),
        (error) => console.error(error)
      )
   }
   
  render() { 
    const { categories } = this.state;
    return ( 
      <div className="CatNavBar">
        <ul id="UlCat">
          {categories.map(c => {
            return <li className="LiCat">
              <div className="CatName">
                <a className="AItems" href="#">{c}</a>
              </div>
            </li>
          })}
        </ul>
      </div> 
     );
  }
}
 
export default Categories;

        