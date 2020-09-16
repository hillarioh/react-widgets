import React from 'react';

export class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time: new Date()
        }
        this.handle = 0;
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({
            time: new Date()
        });
    }

    componentDidMount(){
        this.handle = setInterval(this.tick,1000);
    }

    componentWillMount(){
        clearInterval(this.handle);
        this.handle = 0;
    }


    render(){
        return(
            <div className="clock-title">
                <h1>Clock</h1>
                <div className="clock-body">
                    <p className="clock"><span>Time: </span><span >{(this.state.time).toLocaleTimeString()}</span></p>
                    <p className="clock"><span>Date: </span><span >{(this.state.time).toDateString()}</span></p>
                </div>
            </div>
            
        );
    }
}