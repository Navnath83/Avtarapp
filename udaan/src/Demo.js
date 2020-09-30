import React, { Component } from 'react';
import reactDOM from 'react-dom';
import './Demo.css';


const Demo =(props)=>{

    return <div className="maindiv_style">
    <h1>HELLO WORLD ... {props.name} </h1>
        
        <p>Software Development And web services</p> </div>


}

/*class Demo extends Component{


    render(){


    return <div className="maindiv_style">
        <h1>hello world {this.props.name} </h1>
            
            <p>hi this my first app</p> </div>
            
            
    }
}
export default Demo; */

export default Demo;