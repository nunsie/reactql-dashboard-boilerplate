import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Item extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="team-player">
          <Link to={this.props.imageLink}>
            <img
              src={this.props.image}
              alt="Thumbnail Image"
              className="img-fluid img-raised rounded"
            />
          </Link>
          <Link to={this.props.titleLink}><h4 className="title">{ this.props.title }</h4></Link>
          <Link to={this.props.descriptionLink}><p className="category text-info">{ this.props.description }</p></Link>
        </div>
      </div>
    );
  }
}
