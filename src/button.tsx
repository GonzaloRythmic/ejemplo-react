import React from "react"
import ReactDom from "react-dom"

class Button extends React.Component<any, any> {
    render () {
        return <button style = {{backgroundColor: "aqua"}}></button>
        {this.props.children} 
    }
}

export {Button}