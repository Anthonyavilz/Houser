import React from 'react';
import House from '../House/House';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <button onClick={() => this.props.history.push('/wizard')} >Add New Property</button>
                <House />
            </div>
        )
    }
}

export default Dashboard;