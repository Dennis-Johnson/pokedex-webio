import React from "react";
import "../styles.css";

export default class Pokemon extends React.Component {
  render() {
    return (
      <div className="Pokemon">
        <img alt="lol" src={this.props.image} className="image" />
        <div className="name">{this.props.name}</div>
      </div>
    );
  }
}
