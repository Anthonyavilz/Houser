import React from 'react';

class Wizard extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    handleNameChange = e => {
        this.setState({name: e.target.value})
    }

    handleAddressChange = e => {
        this.setState({address: e.target.value})
    }

    handleCityChange = e => {
        this.setState({city: e.target.value})
    }

    handleStateChange = e => {
        this.setState({state: e.target.value})
    }

    handleZipcodeChange = e => {
        this.setState({zipcode: e.target.value})
    }

    render() {
        return(
            <div>
                <button onClick={() => this.props.history.push('/')}>Cancel</button>
                <input type="text" placeholder='Property Name' value={this.state.name} onChange={this.handleNameChange} ></input>
                <input type="text" placeholder='Address' value={this.state.address} onChange={this.handleAddressChange} ></input>
                <input type="text" placeholder='City' value={this.state.city} onChange={this.handleCityChange} ></input>
                <input type="text" placeholder='State' value={this.state.state} onChange={this.handleStateChange} ></input>
                <input type="number" placeholde='Zip-Code' value={this.state.zipcode} onChange={this.handleZipcodeChange}></input>
            </div>
        )
    }
}

export default Wizard;