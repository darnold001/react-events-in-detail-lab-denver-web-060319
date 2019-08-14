// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component{

    handleClick = (event) => {
        this.props.onRecieveCoordinates([event.clientX, event.clientY]) 
        console.log(this.props)
    }
    Render(){
        return (
            <button onClick={this.handleClick}>Click Me!</button>)

    }
}