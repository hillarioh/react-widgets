import React from 'react';

export class Autocomplete extends React.Component {
    constructor(props){
        super(props);
        this.state  =  {
            inputVal: ''
        }
        this.selectName = this.selectName.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getNames(){
        if (this.state.inputVal) {
            let re = new RegExp(`^${this.state.inputVal}`,'i');
            return this.props.names.filter(name => re.test(name))
        } else {
            return this.props.names
        }
    }

    handleChange(e){
        this.setState({
            inputVal: e.target.value
        });
    }

    selectName(e){
        this.setState({
            inputVal: e.target.id
        });
    }


    render(){
        let items = this.getNames().map(nam => <li id={nam} onClick={this.selectName}>{nam}</li>)
        return(
            <div>
                <h1>Autocomplete</h1>
                <input type="text" value={this.state.inputVal} onChange={this.handleChange} />
                <ul>{items}</ul>
            </div>
        );
    }
}