import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
    return <div className="card">
        <div className="top">
            <p>{props.uid}</p>
            <h2 className="name">{props.name}</h2>
            <Avatar imgsrc={props.imgsrc}/>
        </div>        
        <div className="bottom">
            <Details tel={props.tel} email={props.email}/>
        </div>
    </div>
}

export default Card;