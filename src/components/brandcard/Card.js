import React, { Component } from 'react';
import martinaService from '../../services/MartinaService'
import './Card.css'

class Card extends Component {

  state = {
    likes: this.props.likes
  }

  handleLike = () => {
    martinaService.doLike(this.props.id)
      .then(brand => {
        this.setState({
          likes: brand.likes
        })
      })
  }

  render() {
    const { user } = this.props;
    return ( 
        <div className="card mb-3 Card" style={{maxWidth: 624 + "px", marginLeft: 252 + "px" }}>
          <div className="row no-gutters">
            <div className="col-md-2">
              <img src={this.props.logo} className="Img card-img" alt={this.props.id}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <a className="TitleCard" href={this.props.webLink} >{this.props.title.length > 20 ? this.props.title.substr(0, 20)+"..." : this.props.title}</a>
                <p className="DescriptionCard" style={{width: 384 + "px", height: 21 + "px"}}>{this.props.description.substr(0, 49)+"..."}</p>
                <p className="Category"><small className="text-muted">{this.props.tags[0]}</small></p>
              </div>
            </div>
            {/* { !user.name && (
              <div className="VoteDiv">
              <img src="../../assets/imgs/triangle.svg" className="Triangle" />
              <p className="Vote">{this.state.likes}</p>
            </div>
            )}
            { user.name && (
              <div className="VoteDiv" onClick={this.handleLike}>
              <img src="../../assets/imgs/triangle.svg" className="Triangle" />
              <p className="Vote">{this.state.likes}</p>
            </div>
            )} */}
            <div className="VoteDiv" onClick={this.handleLike}>
              <img src="../../assets/imgs/triangle.svg" className="Triangle" />
              <p className="Vote">{this.state.likes}</p>
            </div>
          </div>
        </div>  
     );
  }
}
 
export default Card;

