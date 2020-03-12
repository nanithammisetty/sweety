import React from 'react';

class Dec extends React.Component{
    constructor(){
        super();
        this.state={
            count:100
        }
    }
    countDecrement=()=>{
        this.setState({count:this.state.count-1});
    }
    count
    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.countDecrement}>Click me</button>
            </div>
        )
    }
}
export default Dec;