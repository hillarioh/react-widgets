import React from 'react';

export class Tab extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            tabIndex: 0
        }
        this.clicked = this.clicked.bind(this);
    }

    clicked(e){
        this.setState({
            tabIndex: parseInt(e.target.id)
        })
    }

    render(){
        return(
            <div className="tabs">
                <ul className="list-title">
        <li className="list-content" id="0" onClick={this.clicked}>{this.props.tabs[0].title}</li>
        <li className="list-content" id="1" onClick={this.clicked}>{this.props.tabs[1].title}</li>
        <li className="list-content" id="2" onClick={this.clicked}>{this.props.tabs[2].title}</li>
                </ul>
                <article className="content">
                    <h1 id="content">{this.props.tabs[this.state.tabIndex].content}</h1>
                </article>
            </div>
        );
    }

}