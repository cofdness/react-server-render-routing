import React from "react";

const ExecutionEnvironment = require('exenv');

export default props => {
    return (
        <div>
        <h1>Hello {props.name}</h1>
        <p>{ExecutionEnvironment.canUseDOM ? 'client side render' : 'server side render'}</p>
        </div>
    )
}