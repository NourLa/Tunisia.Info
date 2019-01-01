import React from "react";

export default class Rating extends React.Component {
  render() {
    return Array(Number(this.props.rating))
      .fill(<span style={{ color: "#ffd700", fontSize: "24px" }}>★</span>)
      .concat(Array(5).fill(<span style={{ color: "black", fontSize: "24px" }}>☆</span>))
      .slice(0, 5);
    /*("★".repeat(this.props.rating)
      .concat("☆".repeat(5))
      .slice(0, 5))*/
  }
}
