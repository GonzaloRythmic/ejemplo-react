import React from "react"
import ReactDom from "react-dom"

class Home extends React.Component<any, any> {
    constructor(props){
        super(props);
    }
    render () {
        return (<div>Hola, soy una prueba</div>)
    }
}

ReactDom.render(<Home/>, document.querySelector(".app"));


export {Home}