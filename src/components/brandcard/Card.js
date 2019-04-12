import React, { Component } from 'react';

import './Card.css'

class Card extends Component {

  state = {
    userLikes: []
  }

  handleLike = () => {

  }

  render() {
    return ( 
      // <div className="Card">
        <div className="card mb-3 Card" style={{maxWidth: 624 + "px", marginLeft: 252 + "px" }}>
          <div className="row no-gutters">
            <div className="col-md-2">
              <img src={this.props.logo} className="Img card-img" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <a className="TitleCard" href={this.props.webLink} >{this.props.title.length > 20 ? this.props.title.substr(0, 20)+"..." : this.props.title}</a>
                <p className="DescriptionCard" style={{width: 384 + "px", height: 21 + "px"}}>{this.props.description.substr(0, 49)+"..."}</p>
                <p className="Category"><small className="text-muted">{this.props.tags[0]}</small></p>
              </div>
            </div>
            <div className="VoteDiv col-md-2">
              <img src="img/triangle.svg" class="Triangle" />
              <p className="Vote">{this.props.userLikes.length}</p>
            </div>
          </div>
        </div>
      // </div>
     );
  }
}
 
export default Card;