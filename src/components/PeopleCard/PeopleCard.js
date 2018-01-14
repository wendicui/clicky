import React from "react";
import "./PeopleCard.css";

const PeopleCard = props => (
  <div className="card">
    <div className="img-container" onClick = {() =>props.clicked(props.id)}>
      <img alt={props.name}
        src={props.image}/>
    </div>
  </div>
);

export default PeopleCard;
