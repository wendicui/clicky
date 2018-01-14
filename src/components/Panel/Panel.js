import React from "react";
import "./Panel.css"

const Panel = (props)=>{
    return(
        <div className = "container center  "id = "panel">
            <h5 className = {props.colors}> Click image to earn points, but do not click the same one twice</h5>
        </div>
    )

}

export default Panel
