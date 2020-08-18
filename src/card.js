import React from 'react'
import Cardpic from "./card-pic";
import Cardtext from "./card-text";
import Cardtitle from "./card-title";

export default function Card(props) {
    return (
        <div className="card">
            <Cardpic picUrl={props.picUrl} />
            <div className="textField">
                <Cardtitle title={props.title} />
                <Cardtext text={props.text} />
            </div>
        </div>
    )
}

