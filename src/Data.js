import React from 'react';

class Data extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    countIncrement=()=>{
        this.setState({count:this.state.count+1});
    }
    count
    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.countIncrement}>Click me</button>
            </div>
        )
    }
}
export default Data;