import React from "react";
import "./PeopleCard.css";

const PeopleCard = props => (
  <div className="card">
    <div className="img-container" >
      <img alt={props.name}
        src={props.image}
        onClick = {() =>props.clicked(props)}/>
    </div>
  </div>
);

export default PeopleCard;
