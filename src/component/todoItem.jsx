import { importAttribute } from "@babel/types"
import React from "react"
import {
    Button
} from 'react-bootstrap'

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    handleClick() {
        this.setState({count: this.state.count + 1});
    }

    handleClickMinus() {
        this.setState({count: this.state.count - 1});
    }

    render(){
        return (
            <div style={styles.container}>
                <Button variant="danger" className="me-2" onClick={() => {this.handleClick()}}>+</Button>
                <p>{this.state.count}</p>
                <Button variant="warning" className="mr-2" onClick={() => {this.handleClickMinus()}}>-</Button>
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: 'aqua',
        width: '30wh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItem: 'center',
        padding: '0.5rem',
        borderradius: '10px',
        fontSize: '30px'
    }
}

export default ToDoItem