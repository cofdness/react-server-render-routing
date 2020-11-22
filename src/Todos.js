import React from "react";
import loadData from "./helpers/loadData";

class Todos extends React.Component {
    constructor(props) {
        super(props);

        if (props.staticContext && props.staticContext.data) {
            this.state = {
                data: props.staticContext.data
            }
        } else {
            this.state = {
                data: []
            }
        }
    }

    render() {
        console.log('state');
        console.log(this.state);
        const {data} = this.state;
        return <ul>{data.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
    }

}

export default Todos;